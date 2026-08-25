import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { prisma } from '@/lib/db';
import { getSignedDownloadUrl } from '@/lib/s3';
import { formatInTimeZone } from 'date-fns-tz';
import V2Shell from '@/components/v2/v2-shell';
import V2PageHero from '@/components/v2/v2-page-hero';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

async function getEvents() {
  try {
    const now = new Date();
    await prisma.event.updateMany({
      where: {
        archived: false,
        endDate: {
          not: null,
          lt: now,
        },
      },
      data: {
        archived: true,
        showInSlider: false,
      },
    });

    const events = await prisma.event.findMany({
      where: {
        isActive: true,
        archived: false,
      },
      orderBy: {
        startDate: 'asc',
      },
    });

    const eventsWithSignedUrls = await Promise.all(
      events.map(async (event) => {
        if (event.imageUrl) {
          try {
            const signedUrl = await getSignedDownloadUrl(event.imageUrl);
            return { ...event, imageUrl: signedUrl };
          } catch (error) {
            console.error('Error generating signed URL:', error);
            return event;
          }
        }
        return event;
      })
    );

    return eventsWithSignedUrls;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

async function getArchivedEvents() {
  try {
    const events = await prisma.event.findMany({
      where: {
        archived: true,
      },
      orderBy: {
        startDate: 'desc',
      },
    });

    const eventsWithSignedUrls = await Promise.all(
      events.map(async (event) => {
        if (event.imageUrl) {
          try {
            const signedUrl = await getSignedDownloadUrl(event.imageUrl);
            return { ...event, imageUrl: signedUrl };
          } catch (error) {
            console.error('Error generating signed URL:', error);
            return event;
          }
        }
        return event;
      })
    );

    return eventsWithSignedUrls;
  } catch (error) {
    console.error('Error fetching archived events:', error);
    return [];
  }
}

export const revalidate = 0;

export default async function V2EventsPage() {
  const dbEvents = await getEvents();
  const archivedDbEvents = await getArchivedEvents();

  const defaultEvents = [
    {
      title: 'Sunday School',
      date: 'Every Sunday',
      time: '10:00 AM',
      location: 'Various Classrooms',
      description: 'Bible study for all ages with classes designed for children, youth, and adults.',
      image: '/images/photos/sunday-school.jpg',
      category: 'Education',
      isRecurring: true,
    },
    {
      title: 'Sunday Worship Service',
      date: 'Every Sunday',
      time: '11:15 AM',
      location: 'Main Sanctuary',
      description: 'Join us for inspiring worship, powerful preaching, and fellowship with our church family.',
      image: '/images/photos/DM1A1006-2.jpg',
      category: 'Worship',
      isRecurring: true,
    },
    {
      title: 'Wednesday Prayer Service',
      date: 'Every Wednesday',
      time: '6:30 PM',
      location: 'Main Sanctuary',
      description: 'Midweek prayer and spiritual renewal with our church family.',
      image: '/images/photos/DM1A1299.jpg',
      category: 'Prayer',
      isRecurring: true,
    },
    {
      title: 'Wednesday Bible Study',
      date: 'Every Wednesday',
      time: '7:00 PM',
      location: 'Fellowship Hall',
      description: 'Midweek spiritual growth through in-depth Bible study and prayer.',
      image: '/images/photos/65th-congregation-seated.jpg',
      category: 'Bible Study',
      isRecurring: true,
    },
  ];

  const timezone = 'America/Chicago';
  const formattedDbEvents = dbEvents.map((event) => {
    const startDate = new Date(event.startDate);
    return {
      title: event.title,
      date: formatInTimeZone(startDate, timezone, 'EEEE, MMMM d, yyyy'),
      time: formatInTimeZone(startDate, timezone, 'h:mm a'),
      location: event.location || 'TBA',
      description: event.description || '',
      image: event.imageUrl || 'https://cdn.abacus.ai/images/8db6b70e-0ef2-4d0d-8afd-5cb5e106659b.png',
      category: event.category || 'Event',
      isRecurring: false,
    };
  });

  const events = [...formattedDbEvents, ...defaultEvents];

  const formattedArchivedEvents = archivedDbEvents.map((event) => {
    const startDate = new Date(event.startDate);
    return {
      title: event.title,
      date: formatInTimeZone(startDate, timezone, 'EEEE, MMMM d, yyyy'),
      time: formatInTimeZone(startDate, timezone, 'h:mm a'),
      location: event.location || 'TBA',
      description: event.description || '',
      image: event.imageUrl || 'https://cdn.abacus.ai/images/8db6b70e-0ef2-4d0d-8afd-5cb5e106659b.png',
      category: event.category || 'Event',
      isRecurring: false,
    };
  });

  return (
    <V2Shell>
      <V2PageHero
        eyebrow="Life at The Avenue"
        title={<>Events &amp; Services</>}
        subtitle="Stay connected and grow in faith through our regular services, Bible studies, and community gatherings."
        image="/images/photos/65th-gathering-outside.jpg"
        imageAlt="Community gathering at THE AVENUE"
      />

      {/* Regular events */}
      <section className="py-24 bg-cream">
        <div className="container-width">
          <Reveal className="max-w-2xl mb-16">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Join Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-5">
              Regular Events &amp; Services
            </h2>
            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              Ongoing opportunities to worship, learn, and fellowship together.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Reveal key={event.title + index} delay={(index % 3) * 0.08}>
                <div className="group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] bg-maroon-950 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex px-3 py-1 rounded-full bg-maroon-900 text-white text-[10px] font-semibold uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>
                    {event.isRecurring && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex px-3 py-1 rounded-full bg-gold-400 text-maroon-950 text-[10px] font-semibold uppercase tracking-wider">
                          Weekly
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-7 flex-grow flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2">{event.title}</h3>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={15} className="text-gold-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-gold-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={15} className="text-gold-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Archived events */}
      {formattedArchivedEvents.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container-width">
            <Reveal className="max-w-2xl mb-16">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">Looking Back</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-700 leading-[1.05] mb-5">
                Past Events
              </h2>
              <p className="font-sans text-lg text-gray-500 leading-relaxed">
                A look at our past events and celebrations.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formattedArchivedEvents.map((event, index) => (
                <Reveal key={`archived-${index}`} delay={(index % 3) * 0.08}>
                  <div className="group h-full bg-white rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-sm opacity-75 hover:opacity-100 transition-all duration-300">
                    <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex px-3 py-1 rounded-full bg-gray-600 text-white text-[10px] font-semibold uppercase tracking-wider">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex px-3 py-1 rounded-full bg-white/90 text-gray-600 text-[10px] font-semibold uppercase tracking-wider">
                          Past Event
                        </span>
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="font-serif text-xl font-bold text-gray-700 mb-2">{event.title}</h3>
                      <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="space-y-2 text-sm text-gray-400 border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={15} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={15} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={15} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <V2CTA
        title="Want to Experience It in Person?"
        text="We’d love to welcome you this Sunday. Plan your first visit today."
        buttons={[{ label: 'Plan Your Visit', href: '/visit', primary: true }]}
      />
    </V2Shell>
  );
}
