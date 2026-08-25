
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address, 
      inquiryType, 
      previousChurch, 
      message 
    } = body || {};

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    // Create member inquiry
    const inquiry = await prisma.memberInquiry.create({
      data: {
        firstName: String(firstName || ''),
        lastName: String(lastName || ''),
        email: String(email || ''),
        phone: phone ? String(phone) : null,
        address: address ? String(address) : null,
        inquiryType: String(inquiryType || 'membership'),
        previousChurch: previousChurch ? String(previousChurch) : null,
        message: message ? String(message) : null,
        status: 'new',
      },
    });

    return NextResponse.json(
      { 
        message: 'Member inquiry submitted successfully',
        inquiryId: inquiry.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Member inquiry API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
