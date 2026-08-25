import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

const LIVE_STREAM_KEY = 'live_stream_url'

// Public: returns the current live stream video URL (if any)
export async function GET() {
  try {
    const record = await prisma.siteContent.findUnique({
      where: { key: LIVE_STREAM_KEY },
    })
    return NextResponse.json({ url: record?.isActive ? record.content : '' })
  } catch (error) {
    console.error('Error fetching live stream url:', error)
    return NextResponse.json({ url: '' })
  }
}

// Admin only: set / update the current live stream video URL
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const url = (body?.url ?? '').toString().trim()

    const record = await prisma.siteContent.upsert({
      where: { key: LIVE_STREAM_KEY },
      update: { content: url, isActive: true },
      create: {
        key: LIVE_STREAM_KEY,
        title: 'Live Stream Video URL',
        content: url,
        type: 'text',
        isActive: true,
      },
    })

    return NextResponse.json({ url: record.content })
  } catch (error) {
    console.error('Error saving live stream url:', error)
    return NextResponse.json(
      { error: 'Failed to save live stream url' },
      { status: 500 }
    )
  }
}
