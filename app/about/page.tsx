import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, ArrowUpRight } from 'lucide-react';
import V2Shell from '@/components/v2/v2-shell';
import V2PageHero from '@/components/v2/v2-page-hero';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

export const metadata: Metadata = {
  title: 'About Us | THE AVENUE',
  description:
    'A Christ-centered family with deep roots in South Dallas, committed to worship, discipleship, and service since 1961.',
};

const explore = [
  {
    title: 'Our History',
    desc: 'From a 1961 storefront mission to a thriving church family—discover the legacy of THE AVENUE.',
    image: '/images/photos/original-avenue.png',
    href: '/about/history',
  },
  {
    title: 'Our Pastor',
    desc: 'Meet Dr. Mancil Carroll III, our Senior Pastor, and learn about his heart for ministry.',
    image: '/images/pastor-mancil-carroll.png',
    href: '/about/pastor',
  },
  {
    title: 'What We Believe',
    desc: 'The biblical truths that anchor our faith and guide our church family.',
    image: '/images/photos/DM1A1075-2.jpg',
    href: '/about/beliefs',
  },
];

export default function V2AboutPage() {
  return (
    <V2Shell>
      <V2PageHero
        eyebrow="About Us"
        title="Who We Are"
        subtitle="A Christ-centered family with deep roots in South Dallas, committed to worship, discipleship, and service since 1961."
        image="/images/photos/DM1A1120-2.jpg"
        imageAlt="THE AVENUE church community"
      />

      {/* Vision & Mission */}
      <section className="py-24 bg-cream">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Reveal className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-9">
              <div className="w-12 h-12 rounded-2xl bg-maroon-800 flex items-center justify-center mb-6">
                <Heart size={22} className="text-gold-400" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-maroon-900 mb-4">Our Vision</h2>
              <p className="font-sans text-gray-600 leading-relaxed">
                We see a church that opens the way of access to Jesus&mdash;where people grow in
                faith, find purpose, and join in transforming our community through prayer,
                service, and fellowship.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-9">
              <div className="w-12 h-12 rounded-2xl bg-maroon-800 flex items-center justify-center mb-6">
                <Users size={22} className="text-gold-400" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-maroon-900 mb-4">Our Mission</h2>
              <p className="font-sans text-gray-600 leading-relaxed">
                Our mission is to love God and our community by living faithfully, praying boldly,
                making disciples, and serving with integrity. We are committed to being a light in
                South Dallas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="max-w-2xl mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">Explore</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
              Explore our story
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {explore.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="h-full">
                <Link
                  href={c.href}
                  className="group block rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-white"
                >
                  <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/55 to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-2 flex items-center justify-between">
                      {c.title}
                      <ArrowUpRight
                        size={20}
                        className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <V2CTA
        title="Come see for yourself"
        text="The best way to know us is to visit us. You’re welcome any Sunday."
        buttons={[{ label: 'Plan Your Visit', href: '/visit', primary: true }]}
      />
    </V2Shell>
  );
}
