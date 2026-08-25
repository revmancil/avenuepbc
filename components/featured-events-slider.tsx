
'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

interface FeaturedEvent {
  id: string;
  title: string;
  imageUrl: string | null;
  description: string | null;
  startDate: string;
  endDate: string | null;
  location: string | null;
  category: string;
  showInSlider: boolean;
  isActive: boolean;
  archived: boolean;
}

export default function FeaturedEventsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [featuredEvents, setFeaturedEvents] = useState<FeaturedEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Fetch featured events from database
  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      try {
        const response = await fetch('/api/admin/events');
        const allEvents = await response.json();
        // Filter events that should show in slider, are active, not archived, and have images
        const filtered = allEvents.filter((event: FeaturedEvent) => 
          event.showInSlider && event.isActive && !event.archived && event.imageUrl
        );
        setFeaturedEvents(filtered);
      } catch (error) {
        console.error('Error fetching featured events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedEvents();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || featuredEvents.length === 0) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi, featuredEvents.length]);

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-1 bg-gray-200 w-24 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!featuredEvents || featuredEvents.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-maroon-700 text-sm font-medium mb-3">Don&apos;t Miss</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
            Featured Upcoming Events
          </h2>
          <div className="gold-divider mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Special services and celebrations you won&apos;t want to miss
          </p>
        </div>

        <div className="relative">
          {/* Embla Carousel */}
          <div className="overflow-hidden rounded-lg shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                    <Image
                      src={event.imageUrl || ''}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                    {/* Gradient Overlay - matching home page style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Category Badge - matching home page style */}
                    <div className="absolute top-6 left-6">
                      <Badge variant="secondary" className="bg-maroon-800 text-white capitalize text-sm px-4 py-2">
                        {event.category}
                      </Badge>
                    </div>

                    {/* Event Details Overlay - matching home page style */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="text-lg md:text-xl mb-6 line-clamp-2 text-gray-200">
                          {event.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-4 text-base md:text-lg">
                        <div className="flex items-center space-x-2">
                          <Calendar size={20} className="text-gold-400" />
                          <span>{formatInTimeZone(new Date(event.startDate), 'America/Chicago', 'MMM dd, yyyy')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={20} className="text-gold-400" />
                          <span>{formatInTimeZone(new Date(event.startDate), 'America/Chicago', 'h:mm a')}</span>
                        </div>
                        {event.location && (
                          <div className="flex items-center space-x-2">
                            <MapPin size={20} className="text-gold-400" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {featuredEvents.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-maroon-800 text-maroon-800 shadow-lg z-10"
                onClick={scrollPrev}
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-maroon-800 text-maroon-800 shadow-lg z-10"
                onClick={scrollNext}
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </Button>
            </>
          )}

          {/* Dots Navigation */}
          {featuredEvents.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex
                      ? 'bg-maroon-800 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
