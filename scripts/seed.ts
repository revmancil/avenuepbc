
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Create test account (required for testing)
  const testPassword = await bcrypt.hash('johndoe123', 10)
  const testUser = await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'John Doe',
      password: testPassword,
      role: 'admin',
    },
  })
  console.log('✓ Created test admin user')

  // Create admin account
  const adminPassword = await bcrypt.hash('AdminPass2024!', 10)
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@avenueprogressive.org' },
    update: {},
    create: {
      email: 'admin@avenueprogressive.org',
      name: 'Admin User',
      password: adminPassword,
      role: 'admin',
    },
  })
  console.log('✓ Created admin user: admin@avenueprogressive.org')

  // Create sample events
  const sampleEvents = [
    {
      title: 'Sunday Worship Service',
      description: 'Join us for our weekly worship service with inspiring messages and uplifting music.',
      startDate: new Date('2025-10-26T11:15:00'),
      endDate: new Date('2025-10-26T13:00:00'),
      location: '3745 Dildock Street, Dallas TX 75215',
      category: 'service',
      isActive: true,
    },
    {
      title: 'Wednesday Prayer Service',
      description: 'Come together for an evening of prayer, worship, and fellowship.',
      startDate: new Date('2025-10-29T18:30:00'),
      endDate: new Date('2025-10-29T19:30:00'),
      location: 'Main Sanctuary',
      category: 'service',
      isActive: true,
    },
    {
      title: 'Community Outreach',
      description: 'Join us as we serve our community with love and compassion.',
      startDate: new Date('2025-11-02T10:00:00'),
      endDate: new Date('2025-11-02T14:00:00'),
      location: 'South Dallas Community Center',
      category: 'outreach',
      isActive: true,
    },
  ]

  for (const event of sampleEvents) {
    await prisma.event.upsert({
      where: { id: event.title.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: event,
    })
  }
  console.log('✓ Created sample events')

  // Create sample staff member (Pastor)
  await prisma.staff.upsert({
    where: { id: 'pastor-mancil-carroll' },
    update: {},
    create: {
      id: 'pastor-mancil-carroll',
      name: 'Dr. Mancil Carroll III',
      title: 'Senior Pastor',
      bio: 'Dr. Mancil Carroll III is a dedicated servant of God, committed to leading Avenue Progressive Baptist Church with wisdom, compassion, and unwavering faith.',
      imageUrl: '/images/pastor-mancil-carroll.png',
      email: 'pastor@avenueprogressive.org',
      order: 1,
      isActive: true,
    },
  })
  console.log('✓ Created staff member')

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
