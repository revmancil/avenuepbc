
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { uploadFile } from '@/lib/s3'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // This endpoint is only ever called from the authenticated admin UI
    // (admin dashboard counts, admin staff management page) - there is no
    // public consumer - so require admin auth like the mutation handlers
    // below. Admins get the full roster (active + inactive) so they can
    // manage and re-activate inactive members.
    const session = await getServerSession(authOptions)
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const staff = await prisma.staff.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(staff)
  } catch (error) {
    console.error('Error fetching staff:', error)
    return NextResponse.json(
      { error: 'Failed to fetch staff' },
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
    const name = formData.get('name') as string
    const title = formData.get('title') as string
    const bio = formData.get('bio') as string | null
    const email = formData.get('email') as string | null
    const phone = formData.get('phone') as string | null
    const order = parseInt(formData.get('order') as string) || 0
    const isActive = formData.get('isActive') === 'true'
    const imageFile = formData.get('image') as File | null

    let imageUrl: string | null = null

    if (imageFile) {
      const buffer = Buffer.from(await imageFile.arrayBuffer())
      const fileName = `staff/${Date.now()}-${imageFile.name}`
      imageUrl = await uploadFile(buffer, fileName, imageFile.type)
    }

    const staffMember = await prisma.staff.create({
      data: {
        name,
        title,
        bio,
        imageUrl,
        email,
        phone,
        order,
        isActive,
      },
    })

    return NextResponse.json(staffMember, { status: 201 })
  } catch (error) {
    console.error('Error creating staff member:', error)
    return NextResponse.json(
      { error: 'Failed to create staff member' },
      { status: 500 }
    )
  }
}
