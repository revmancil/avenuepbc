
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
    const description = (formData.get('description') as string) || null
    const pastor = (formData.get('pastor') as string) || (formData.get('speaker') as string) || 'Dr. Mancil Carroll III'
    const date = formData.get('date') as string
    const scripture = (formData.get('scripture') as string) || (formData.get('scriptureReference') as string) || null
    const isPublished = (formData.get('isPublished') ?? formData.get('isActive') ?? 'true') === 'true'
    const audioFile = formData.get('audio') as File | null
    const videoUrlText = (formData.get('videoUrl') as string) || null
    const thumbnailFile = formData.get('thumbnail') as File | null

    const existingSermon = await prisma.sermon.findUnique({
      where: { id: params.id },
    })

    if (!existingSermon) {
      return NextResponse.json({ error: 'Sermon not found' }, { status: 404 })
    }

    let audioUrl = existingSermon.audioUrl
    let videoUrl = videoUrlText !== null ? videoUrlText : existingSermon.videoUrl
    let thumbnailUrl = existingSermon.thumbnailUrl

    if (audioFile && audioFile.size > 0) {
      if (existingSermon.audioUrl) {
        try {
          await deleteFile(existingSermon.audioUrl)
        } catch (error) {
          console.error('Error deleting old audio:', error)
        }
      }
      const buffer = Buffer.from(await audioFile.arrayBuffer())
      const fileName = `sermons/audio/${Date.now()}-${audioFile.name}`
      audioUrl = await uploadFile(buffer, fileName, audioFile.type)
    }

    if (thumbnailFile && thumbnailFile.size > 0) {
      if (existingSermon.thumbnailUrl) {
        try {
          await deleteFile(existingSermon.thumbnailUrl)
        } catch (error) {
          console.error('Error deleting old thumbnail:', error)
        }
      }
      const buffer = Buffer.from(await thumbnailFile.arrayBuffer())
      const fileName = `sermons/thumbnails/${Date.now()}-${thumbnailFile.name}`
      thumbnailUrl = await uploadFile(buffer, fileName, thumbnailFile.type)
    }

    const sermon = await prisma.sermon.update({
      where: { id: params.id },
      data: {
        title,
        description,
        pastor,
        date: new Date(date),
        scripture,
        audioUrl,
        videoUrl,
        thumbnailUrl,
        isPublished,
      },
    })

    return NextResponse.json(sermon)
  } catch (error) {
    console.error('Error updating sermon:', error)
    return NextResponse.json(
      { error: 'Failed to update sermon' },
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

    const sermon = await prisma.sermon.findUnique({
      where: { id: params.id },
    })

    if (!sermon) {
      return NextResponse.json({ error: 'Sermon not found' }, { status: 404 })
    }

    if (sermon.audioUrl) {
      try {
        await deleteFile(sermon.audioUrl)
      } catch (error) {
        console.error('Error deleting audio:', error)
      }
    }
    if (sermon.videoUrl) {
      try {
        await deleteFile(sermon.videoUrl)
      } catch (error) {
        console.error('Error deleting video:', error)
      }
    }
    if (sermon.thumbnailUrl) {
      try {
        await deleteFile(sermon.thumbnailUrl)
      } catch (error) {
        console.error('Error deleting thumbnail:', error)
      }
    }

    await prisma.sermon.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Sermon deleted successfully' })
  } catch (error) {
    console.error('Error deleting sermon:', error)
    return NextResponse.json(
      { error: 'Failed to delete sermon' },
      { status: 500 }
    )
  }
}
