
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { uploadFile, deleteFile } from '@/lib/s3'

export const dynamic = 'force-dynamic'

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
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

    const existingEvent = await prisma.event.findUnique({
      where: { id: params.id },
    })

    if (!existingEvent) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    let imageUrl = existingEvent.imageUrl

    if (imageFile) {
      // Delete old image if exists
      if (existingEvent.imageUrl) {
        try {
          await deleteFile(existingEvent.imageUrl)
        } catch (error) {
          console.error('Error deleting old image:', error)
        }
      }

      // Upload new image
      const buffer = Buffer.from(await imageFile.arrayBuffer())
      const fileName = `events/${Date.now()}-${imageFile.name}`
      imageUrl = await uploadFile(buffer, fileName, imageFile.type)
    }

    const event = await prisma.event.update({
      where: { id: params.id },
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

    return NextResponse.json(event)
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const event = await prisma.event.findUnique({
      where: { id: params.id },
    })

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    // Delete image from S3 if exists
    if (event.imageUrl) {
      try {
        await deleteFile(event.imageUrl)
      } catch (error) {
        console.error('Error deleting image:', error)
      }
    }

    await prisma.event.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Event deleted successfully' })
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    )
  }
}
