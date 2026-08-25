"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const slides = [
    {
      src: '/images/photos/DM1A1068.jpg',
      alt: 'Congregation gathered in worship at THE AVENUE',
    },
    {
      src: '/images/photos/DM1A1075-2.jpg',
      alt: 'Church service at Avenue Progressive Baptist Church',
    },
    {
      src: '/images/photos/DM1A1217-2.jpg',
      alt: 'Fellowship and community at THE AVENUE',
    },
    {
      src: '/images/photos/DM1A1006-2.jpg',
      alt: 'Worship and praise at THE AVENUE',
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    const timer = setInterval(() => api.scrollNext(), 5000);
    return () => {
      clearInterval(timer);
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-[90vh] min-h-[600px] max-h-[900px]">
            {slides.map((slide, i) => (
              <CarouselItem key={i} className="h-[90vh] min-h-[600px] max-h-[900px]">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-[#d4a843] mb-4">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 leading-[0.95]">
          THE AVENUE
        </h1>
        <p className="font-sans text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Avenue Progressive Baptist Church &mdash; A Christ-centered family in South Dallas,
          rooted in faith, love, and service since 1961.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/visit"
            className="btn-secondary inline-flex items-center gap-2 text-sm px-8 py-3.5"
          >
            Plan Your Visit
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/watch"
            className="btn-outline-light inline-flex items-center gap-2 text-sm px-8 py-3.5"
          >
            <Play size={16} />
            Watch Online
          </Link>
        </div>

        {/* Service Times */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 max-w-xl mx-auto border border-white/10">
          <p className="text-xs font-sans uppercase tracking-widest text-[#d4a843] mb-3">
            Join Us This Week
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-white font-sans font-semibold text-sm">Sunday School</p>
              <p className="text-gray-300 text-xs font-sans">10:00 AM</p>
            </div>
            <div className="border-x border-white/20">
              <p className="text-white font-sans font-semibold text-sm">Worship Service</p>
              <p className="text-gray-300 text-xs font-sans">11:15 AM</p>
            </div>
            <div>
              <p className="text-white font-sans font-semibold text-sm">Wed Prayer</p>
              <p className="text-gray-300 text-xs font-sans">6:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      {isClient && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? 'bg-[#d4a843] w-8' : 'bg-white/40 w-4 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
