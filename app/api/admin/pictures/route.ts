
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { uploadFile } from '@/lib/s3'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const pictures = await prisma.picture.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(pictures)
  } catch (error) {
    console.error('Error fetching pictures:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pictures' },
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
    const description = formData.get('description') as string | null
    const category = formData.get('category') as string
    const eventId = formData.get('eventId') as string | null
    const isPublished = formData.get('isPublished') === 'true'
    const imageFile = formData.get('image') as File

    if (!imageFile) {
      return NextResponse.json(
        { error: 'Image file is required' },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer())
    const fileName = `pictures/${Date.now()}-${imageFile.name}`
    const imageUrl = await uploadFile(buffer, fileName, imageFile.type)

    const picture = await prisma.picture.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        eventId,
        isPublished,
      },
    })

    return NextResponse.json(picture, { status: 201 })
  } catch (error) {
    console.error('Error creating picture:', error)
    return NextResponse.json(
      { error: 'Failed to create picture' },
      { status: 500 }
    )
  }
}
