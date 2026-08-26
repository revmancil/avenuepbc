import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './v2-reveal';

interface CTAButton {
  label: string;
  href: string;
  primary?: boolean;
}

interface V2CTAProps {
  title: string;
  text: string;
  image?: string;
  buttons: CTAButton[];
}

/** Shared closing call-to-action band for the modern (V2) pages. */
export default function V2CTA({
  title,
  text,
  image = '/images/photos/65th-church-group-front.jpg',
  buttons,
}: V2CTAProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container-width">
        <Reveal className="relative rounded-[2.5rem] overflow-hidden">
          <Image src={image} alt="Worship at THE AVENUE" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-maroon-950/[88%]" />
          <div className="relative px-8 py-20 md:py-24 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-5">
              {title}
            </h2>
            <p className="font-sans text-lg text-white/75 max-w-xl mx-auto mb-9">{text}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {buttons.map((b) => (
                <Link
                  key={b.href + b.label}
                  href={b.href}
                  className={
                    b.primary
                      ? 'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-maroon-950 font-sans font-semibold text-sm hover:bg-gold-300 transition-colors'
                      : 'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-sans font-semibold text-sm hover:bg-white/10 transition-colors'
                  }
                >
                  {b.label}
                  {b.primary && <ArrowUpRight size={17} />}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
