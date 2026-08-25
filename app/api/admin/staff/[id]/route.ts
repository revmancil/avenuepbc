
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
    const name = formData.get('name') as string
    const title = formData.get('title') as string
    const bio = formData.get('bio') as string | null
    const email = formData.get('email') as string | null
    const phone = formData.get('phone') as string | null
    const order = parseInt(formData.get('order') as string) || 0
    const isActive = formData.get('isActive') === 'true'
    const imageFile = formData.get('image') as File | null

    const existingStaff = await prisma.staff.findUnique({
      where: { id: params.id },
    })

    if (!existingStaff) {
      return NextResponse.json(
        { error: 'Staff member not found' },
        { status: 404 }
      )
    }

    let imageUrl = existingStaff.imageUrl

    if (imageFile) {
      // Delete old image if exists
      if (existingStaff.imageUrl) {
        try {
          await deleteFile(existingStaff.imageUrl)
        } catch (error) {
          console.error('Error deleting old image:', error)
        }
      }

      // Upload new image
      const buffer = Buffer.from(await imageFile.arrayBuffer())
      const fileName = `staff/${Date.now()}-${imageFile.name}`
      imageUrl = await uploadFile(buffer, fileName, imageFile.type)
    }

    const staffMember = await prisma.staff.update({
      where: { id: params.id },
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

    return NextResponse.json(staffMember)
  } catch (error) {
    console.error('Error updating staff member:', error)
    return NextResponse.json(
      { error: 'Failed to update staff member' },
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

    const staffMember = await prisma.staff.findUnique({
      where: { id: params.id },
    })

    if (!staffMember) {
      return NextResponse.json(
        { error: 'Staff member not found' },
        { status: 404 }
      )
    }

    // Delete image from S3 if exists
    if (staffMember.imageUrl) {
      try {
        await deleteFile(staffMember.imageUrl)
      } catch (error) {
        console.error('Error deleting image:', error)
      }
    }

    await prisma.staff.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Staff member deleted successfully' })
  } catch (error) {
    console.error('Error deleting staff member:', error)
    return NextResponse.json(
      { error: 'Failed to delete staff member' },
      { status: 500 }
    )
  }
}
