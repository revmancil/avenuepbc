import React from 'react';
import Image from 'next/image';

interface V2PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
}

/**
 * Shared hero for all modern (V2) inner pages.
 * Full-bleed image with a deep maroon gradient wash, gold eyebrow,
 * oversized serif headline and optional subtitle.
 */
export default function V2PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: V2PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-maroon-950">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/[88%] to-maroon-950/[62%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-maroon-950/70" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-[26rem] h-[26rem] rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative z-10 container-width w-full pt-32 pb-16">
        <div className="max-w-3xl">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4">
            {eyebrow}
          </p>
          <h1 className="font-serif text-white font-bold leading-[0.98] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
