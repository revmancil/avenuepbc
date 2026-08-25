import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { GraduationCap, Globe, Heart, Quote } from 'lucide-react';
import V2Shell from '@/components/v2/v2-shell';
import V2PageHero from '@/components/v2/v2-page-hero';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

export const metadata: Metadata = {
  title: 'Our Senior Pastor | THE AVENUE',
  description:
    'Meet Dr. Mancil Carroll III, Senior Pastor of Avenue Progressive Baptist Church in South Dallas.',
};

const infoCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      { label: 'Doctor of Divinity', sub: 'Liberty University' },
      { label: 'Master of Divinity', sub: 'Liberty University' },
    ],
  },
  {
    icon: Globe,
    title: 'Community Leadership',
    items: [
      { label: 'Alpha Phi Alpha Fraternity Inc.', sub: 'Southwestern Regional Chaplain' },
      { label: 'Plano Child Care Learning Academy', sub: 'Board Member' },
      { label: 'MC3 Ministries', sub: 'Founder' },
    ],
  },
  {
    icon: Heart,
    title: 'Family',
    items: [
      { label: 'Wife: Maxine Carroll', sub: 'Joyfully married for 26 years' },
      { label: 'Children', sub: 'Jasmine, Paris, and Metia' },
    ],
  },
];

export default function V2PastorPage() {
  return (
    <V2Shell>
      <V2PageHero
        eyebrow="Leadership"
        title="Our Senior Pastor"
        subtitle="Meet the shepherd who leads our congregation with wisdom, humility, and a heart for God’s Word."
        image="/images/photos/DM1A1120-2.jpg"
        imageAlt="Worship at THE AVENUE"
      />

      {/* Profile */}
      <section className="py-24 bg-cream">
        <div className="container-width">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-2">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/pastor-mancil-carroll.png"
                  alt="Dr. Mancil Carroll III"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
                Senior Pastor
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6 leading-[1.05]">
                Dr. Mancil Carroll III
              </h2>
              <div className="font-sans text-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  Rev. Dr. Mancil Carroll III is the proud pastor of Avenue Progressive Baptist
                  Church in South Dallas, where he leads with a vision of faith, love, and service.
                  His ministry is rooted in a passion for preaching the Word of God with clarity,
                  compassion, and conviction, while building bridges between the church and the
                  community.
                </p>
                <p>
                  Pastor Carroll is the author of{' '}
                  <em className="text-maroon-800 not-italic font-semibold">Holy, But Not Perfect</em>,
                  a powerful testimony of redemption and grace, reminding believers that God&rsquo;s
                  call is never revoked and His love never fails. His heart for people extends beyond
                  the pulpit, as he is committed to equipping families, mentoring young leaders, and
                  guiding the next generation to live with purpose and faith.
                </p>
                <p>
                  He has been joyfully married for 26 years to Maxine Carroll, and together they are
                  the proud parents of three adult children: Jasmine, Paris, and Metia. His love for
                  family shapes his approach to ministry&mdash;the church should be both a spiritual
                  home and a family that welcomes all.
                </p>
                <p>
                  As pastor, Dr. Carroll continues the Avenue legacy of being &ldquo;A Way of Access
                  to Jesus&rdquo;&mdash;leading a congregation that not only worships together but
                  also works together to uplift the South Dallas community through outreach, service,
                  and love.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08} className="h-full">
                <div className="rounded-3xl bg-cream ring-1 ring-black/5 p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-maroon-800 flex items-center justify-center mb-6">
                    <card.icon size={22} className="text-gold-400" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-maroon-900 mb-5">{card.title}</h3>
                  <div className="space-y-4">
                    {card.items.map((it) => (
                      <div key={it.label}>
                        <p className="font-sans text-sm font-semibold text-gray-800">{it.label}</p>
                        <p className="font-sans text-xs text-gray-500 mt-0.5">{it.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Vision */}
      <section className="py-24 bg-maroon-950 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-16 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="relative container-width max-w-4xl">
          <Reveal>
            <Quote size={44} className="text-gold-400 mb-6" />
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Ministry Vision</h3>
            <p className="font-sans text-lg text-white/75 leading-relaxed">
              Dr. Mancil Carroll III leads The Avenue with a clear vision: to equip believers to
              stay connected to the Vine through daily Word and prayer, small discipleship triads,
              and excellence in serving. His ministry is anchored in Philippians 3:10, with a
              heartbeat to know Christ and the power of His resurrection. Under his leadership, The
              Avenue continues to be rooted in biblical truth and loving service to the South Dallas
              community, inspiring spiritual growth and fostering meaningful discipleship for all
              generations.
            </p>
          </Reveal>
        </div>
      </section>

      <V2CTA
        title="Connect with our church"
        text="Want to learn more about our ministry or schedule a visit? We’d love to hear from you."
        buttons={[
          { label: 'Plan Your Visit', href: '/visit', primary: true },
          { label: 'Contact Us', href: '/contact' },
        ]}
      />
    </V2Shell>
  );
}
