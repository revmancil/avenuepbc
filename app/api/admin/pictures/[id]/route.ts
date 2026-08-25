
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
    const description = formData.get('description') as string | null
    const category = formData.get('category') as string
    const eventId = formData.get('eventId') as string | null
    const isPublished = formData.get('isPublished') === 'true'
    const imageFile = formData.get('image') as File | null

    const existingPicture = await prisma.picture.findUnique({
      where: { id: params.id },
    })

    if (!existingPicture) {
      return NextResponse.json({ error: 'Picture not found' }, { status: 404 })
    }

    let imageUrl = existingPicture.imageUrl

    if (imageFile) {
      // Delete old image
      try {
        await deleteFile(existingPicture.imageUrl)
      } catch (error) {
        console.error('Error deleting old image:', error)
      }

      // Upload new image
      const buffer = Buffer.from(await imageFile.arrayBuffer())
      const fileName = `pictures/${Date.now()}-${imageFile.name}`
      imageUrl = await uploadFile(buffer, fileName, imageFile.type)
    }

    const picture = await prisma.picture.update({
      where: { id: params.id },
      data: {
        title,
        description,
        imageUrl,
        category,
        eventId,
        isPublished,
      },
    })

    return NextResponse.json(picture)
  } catch (error) {
    console.error('Error updating picture:', error)
    return NextResponse.json(
      { error: 'Failed to update picture' },
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

    const picture = await prisma.picture.findUnique({
      where: { id: params.id },
    })

    if (!picture) {
      return NextResponse.json({ error: 'Picture not found' }, { status: 404 })
    }

    // Delete image from S3
    try {
      await deleteFile(picture.imageUrl)
    } catch (error) {
      console.error('Error deleting image:', error)
    }

    await prisma.picture.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Picture deleted successfully' })
  } catch (error) {
    console.error('Error deleting picture:', error)
    return NextResponse.json(
      { error: 'Failed to delete picture' },
      { status: 500 }
    )
  }
}
