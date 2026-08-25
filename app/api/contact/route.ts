
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, formType = 'contact' } = body || {};

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name || ''),
        email: String(email || ''),
        phone: phone ? String(phone) : null,
        subject: subject ? String(subject) : null,
        message: String(message || ''),
        formType: String(formType || 'contact'),
        status: 'new',
      },
    });

    return NextResponse.json(
      { 
        message: 'Contact submission received successfully',
        submissionId: submission.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
