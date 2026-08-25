"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { formatInTimeZone } from 'date-fns-tz';

interface Event {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string | null;
  location: string | null;
  imageUrl: string | null;
  category: string;
  isActive: boolean;
  archived: boolean;
}

const EventsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/admin/events');
        const data = await res.json();
        const active = data
          .filter((e: Event) => e.isActive && !e.archived)
          .sort(
            (a: Event, b: Event) =>
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          )
          .slice(0, 3);
        setEvents(active);
      } catch {
        console.error('Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-[#faf8f5]">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#d4a843] mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#800000] mb-4">
            Upcoming Events
          </h2>
          <div className="gold-divider-center mb-4" />
          <p className="font-sans text-base text-gray-500 max-w-2xl mx-auto">
            Worship, fellowship, and opportunities to grow together.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#800000]" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <Calendar size={40} className="text-gray-300 mx-auto mb-3" />
            <p className="font-sans text-gray-500">No upcoming events right now. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] bg-gray-100">
                  {event.imageUrl ? (
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Calendar className="w-10 h-10 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#800000] text-white text-[10px] font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="font-sans text-sm text-gray-500 mb-3 line-clamp-2">
                      {event.description}
                    </p>
                  )}
                  <div className="space-y-1.5 font-sans text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-[#d4a843]" />
                      <span>
                        {formatInTimeZone(
                          new Date(event.startDate),
                          'America/Chicago',
                          'EEEE, MMM d, yyyy'
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-[#d4a843]" />
                      <span>
                        {formatInTimeZone(
                          new Date(event.startDate),
                          'America/Chicago',
                          'h:mm a'
                        )}
                      </span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-[#d4a843]" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/events"
            className="btn-outline inline-flex items-center gap-2 text-xs px-8 py-3"
          >
            All Events
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
