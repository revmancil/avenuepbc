import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { archived } = await request.json()
    const isArchiving = Boolean(archived)

    // When archiving, also remove from slider
    // When unarchiving, keep slider status as false (admin can manually enable it)
    const event = await prisma.event.update({
      where: { id: params.id },
      data: { 
        archived: isArchiving,
        showInSlider: isArchiving ? false : undefined, // Remove from slider when archiving
      },
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error('Error updating archive status:', error)
    return NextResponse.json(
      { error: 'Failed to update archive status' },
      { status: 500 }
    )
  }
}
