"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { formatInTimeZone } from 'date-fns-tz';

interface EventItem {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  location: string | null;
  imageUrl: string | null;
  category: string;
  isActive: boolean;
  archived: boolean;
}

const V2Events = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/admin/events');
        const data = await res.json();
        const active = (Array.isArray(data) ? data : [])
          .filter((e: EventItem) => e.isActive && !e.archived)
          .sort(
            (a: EventItem, b: EventItem) =>
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          )
          .slice(0, 3);
        setEvents(active);
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
              Stay Connected
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
              What&rsquo;s happening
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-maroon-800 hover:gap-2.5 transition-all"
          >
            View all events
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-maroon-800" />
          </div>
        ) : events.length === 0 ? (
          <div className="rounded-3xl bg-cream border border-black/5 p-14 text-center">
            <Calendar size={36} className="text-gold-400 mx-auto mb-4" />
            <p className="font-serif text-xl text-maroon-900 mb-1">No events scheduled right now</p>
            <p className="font-sans text-sm text-gray-500">
              Join us every Sunday at 11:15 AM &mdash; check back soon for what&rsquo;s next.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/11] bg-cream overflow-hidden">
                  {event.imageUrl ? (
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Calendar className="w-10 h-10 text-gray-300" />
                    </div>
                  )}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-maroon-800 text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <div className="space-y-2 font-sans text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-gold-400" />
                      <span>
                        {formatInTimeZone(new Date(event.startDate), 'America/Chicago', 'EEE, MMM d')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gold-400" />
                      <span>
                        {formatInTimeZone(new Date(event.startDate), 'America/Chicago', 'h:mm a')}
                      </span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-gold-400" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default V2Events;
