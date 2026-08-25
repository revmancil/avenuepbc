
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { uploadFile } from '@/lib/s3'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const sermons = await prisma.sermon.findMany({
      orderBy: { date: 'desc' },
    })
    return NextResponse.json(sermons)
  } catch (error) {
    console.error('Error fetching sermons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch sermons' },
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
    const description = (formData.get('description') as string) || null
    const pastor = (formData.get('pastor') as string) || (formData.get('speaker') as string) || 'Dr. Mancil Carroll III'
    const date = formData.get('date') as string
    const scripture = (formData.get('scripture') as string) || (formData.get('scriptureReference') as string) || null
    const isPublished = (formData.get('isPublished') ?? formData.get('isActive') ?? 'true') === 'true'
    const audioFile = formData.get('audio') as File | null
    const videoUrlText = (formData.get('videoUrl') as string) || null
    const thumbnailFile = formData.get('thumbnail') as File | null

    let audioUrl: string | null = null
    let videoUrl: string | null = videoUrlText || null
    let thumbnailUrl: string | null = null

    if (audioFile && audioFile.size > 0) {
      const buffer = Buffer.from(await audioFile.arrayBuffer())
      const fileName = `sermons/audio/${Date.now()}-${audioFile.name}`
      audioUrl = await uploadFile(buffer, fileName, audioFile.type)
    }

    if (thumbnailFile && thumbnailFile.size > 0) {
      const buffer = Buffer.from(await thumbnailFile.arrayBuffer())
      const fileName = `sermons/thumbnails/${Date.now()}-${thumbnailFile.name}`
      thumbnailUrl = await uploadFile(buffer, fileName, thumbnailFile.type)
    }

    const sermon = await prisma.sermon.create({
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

    return NextResponse.json(sermon, { status: 201 })
  } catch (error) {
    console.error('Error creating sermon:', error)
    return NextResponse.json(
      { error: 'Failed to create sermon' },
      { status: 500 }
    )
  }
}
