
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { uploadFile, getSignedDownloadUrl } from '@/lib/s3'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    // Auto-archive expired events first and remove them from slider
    const now = new Date()
    await prisma.event.updateMany({
      where: {
        archived: false,
        endDate: {
          not: null,
          lt: now,
        },
      },
      data: {
        archived: true,
        showInSlider: false, // Remove from slider when auto-archiving
      },
    })

    // Get filter from query params (default to showing only active events)
    const { searchParams } = new URL(request.url)
    const archived = searchParams.get('archived')
    
    const whereClause: any = {}
    if (archived === 'true') {
      whereClause.archived = true
    } else if (archived === 'false') {
      whereClause.archived = false
    }
    // If archived param is not provided, return all events

    const events = await prisma.event.findMany({
      where: whereClause,
      orderBy: { startDate: 'desc' },
    })

    // Convert S3 keys to signed URLs
    const eventsWithSignedUrls = await Promise.all(
      events.map(async (event) => {
        if (event.imageUrl) {
          try {
            const signedUrl = await getSignedDownloadUrl(event.imageUrl)
            return { ...event, imageUrl: signedUrl }
          } catch (error) {
            console.error('Error generating signed URL:', error)
            return event
          }
        }
        return event
      })
    )

    return NextResponse.json(eventsWithSignedUrls)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const startDate = formData.get('startDate') as string
    const endDate = formData.get('endDate') as string | null
    const location = formData.get('location') as string | null
    const category = formData.get('category') as string
    const isActive = formData.get('isActive') === 'true'
    const showInSlider = formData.get('showInSlider') === 'true'
    const imageFile = formData.get('image') as File | null

    let imageUrl: string | null = null

    if (imageFile) {
      const buffer = Buffer.from(await imageFile.arrayBuffer())
      const fileName = `events/${Date.now()}-${imageFile.name}`
      imageUrl = await uploadFile(buffer, fileName, imageFile.type)
    }

    const event = await prisma.event.create({
      data: {
        title,
        description,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        location,
        imageUrl,
        category,
        isActive,
        showInSlider,
      },
    })

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    )
  }
}
