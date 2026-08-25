'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Shield, BookOpen, DollarSign, Building2, Mail, ChevronRight, Check} from 'lucide-react';
import V2Header from '@/components/v2/v2-header';
import V2Footer from '@/components/v2/v2-footer';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

const OFFERING_OPTIONS = [
  {
    id: 'tithes',
    label: 'Tithes & Offering',
    description: 'Regular tithes and general offerings',
    url: 'https://www.zeffy.com/en-US/donation-form/2025-tithes-and-offerings',
  },
  {
    id: 'sunday-school',
    label: 'Sunday School',
    description: 'Support our Sunday School ministry',
    url: 'https://www.zeffy.com/en-US/donation-form/sunday-school-5',
  },
  {
    id: 'pastors-aide',
    label: "Pastor's Aide",
    description: "Contribute to the Pastor's Aide ministry",
    url: 'https://www.zeffy.com/en-US/donation-form/pastors-aide-ministry',
  },
  {
    id: 'missions',
    label: 'Missions',
    description: 'Support missions and community outreach',
    url: 'https://www.zeffy.com/en-US/donation-form/missions-and-community',
  },
  {
    id: 'other',
    label: 'Other',
    description: 'Specify your offering purpose',
    url: 'https://www.zeffy.com/en-US/donation-form/2025-tithes-and-offerings',
  },
];

export default function V2GivePage() {
  const [selected, setSelected] = useState('tithes');
  const [otherText, setOtherText] = useState('');

  const selectedOption = OFFERING_OPTIONS.find((o) => o.id === selected)!;

  return (
    <div className="min-h-screen bg-white">
      <V2Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-maroon-950">
          <div className="absolute inset-0">
            <Image src="/images/photos/65th-pastor-pulpit.jpg" alt="Generosity at THE AVENUE" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-maroon-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-maroon-950/70" />
          </div>
          <div className="pointer-events-none absolute top-1/4 -left-20 w-[26rem] h-[26rem] rounded-full bg-gold-400/10 blur-3xl" />
          <div className="relative z-10 container-width w-full pt-32 pb-16">
            <div className="max-w-3xl">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4">Generosity</p>
              <h1 className="font-serif text-white font-bold leading-[0.98] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Give to THE AVENUE
              </h1>
              <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                Your generosity fuels our mission to share the love of Christ and serve the South Dallas community.
              </p>
            </div>
          </div>
        </section>

        {/* Scripture */}
        <section className="py-24 bg-cream">
          <div className="container-width">
            <Reveal className="max-w-3xl mx-auto text-center">
              <BookOpen size={32} className="text-gold-500 mx-auto mb-6" />
              <blockquote className="font-serif text-2xl md:text-3xl italic text-maroon-900 leading-relaxed mb-4">
                &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              </blockquote>
              <p className="font-sans text-sm text-gray-500 mb-8">2 Corinthians 9:7 (NIV)</p>
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                At THE AVENUE, we believe giving is an act of worship. Your tithes and offerings support our
                ministries, community outreach, missions, building upkeep, and the day-to-day work of sharing
                the Gospel. Every gift matters and makes a difference.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Online Giving */}
        <section className="py-24 bg-white">
          <div className="container-width">
            <Reveal className="text-center mb-14">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Online Giving</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-4">Select Your Offering</h2>
              <p className="font-sans text-base text-gray-500 max-w-xl mx-auto">
                Choose the type of offering below, then click &ldquo;Give Now&rdquo; to complete your secure donation.
              </p>
            </Reveal>

            <div className="max-w-2xl mx-auto space-y-3 mb-8">
              {OFFERING_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelected(option.id)}
                  className={`w-full text-left rounded-2xl p-4 md:p-5 border-2 transition-all duration-200 flex items-center gap-4 group ${
                    selected === option.id
                      ? 'border-maroon-800 bg-maroon-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-maroon-300 hover:shadow-sm'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      selected === option.id ? 'border-maroon-800 bg-maroon-800' : 'border-gray-300 group-hover:border-maroon-400'
                    }`}
                  >
                    {selected === option.id && <Check size={14} className="text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-serif text-lg font-bold ${selected === option.id ? 'text-maroon-800' : 'text-gray-900'}`}>
                      {option.label}
                    </h3>
                    <p className="font-sans text-sm text-gray-500">{option.description}</p>
                  </div>
                  <ChevronRight size={18} className={`flex-shrink-0 transition-colors ${selected === option.id ? 'text-maroon-800' : 'text-gray-300'}`} />
                </button>
              ))}
            </div>

            {selected === 'other' && (
              <div className="max-w-2xl mx-auto mb-8">
                <label htmlFor="other-offering" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                  Please specify the purpose of your offering
                </label>
                <input
                  id="other-offering"
                  type="text"
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  placeholder="e.g., Building Fund, Youth Trip, etc."
                  className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 font-sans text-sm text-gray-900 placeholder-gray-400 focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 outline-none transition-colors"
                />
                <p className="font-sans text-xs text-gray-400 mt-2">You can also include this note on the Zeffy donation form.</p>
              </div>
            )}

            <div className="text-center">
              <a
                href={selectedOption.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gold-400 text-maroon-950 font-sans font-semibold text-base hover:bg-gold-300 transition-colors"
              >
                <Heart size={18} />
                Give Now &ndash; {selectedOption.label}
              </a>
              <p className="font-sans text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <Shield size={12} />
                Powered by Zeffy &middot; 100% of your donation goes to THE AVENUE.
              </p>
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-24 bg-cream">
          <div className="container-width">
            <Reveal className="text-center mb-14">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Additional Options</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">Other Ways to Give</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: DollarSign, title: 'In Person', desc: 'Place your tithes and offerings in the offering plate during our Sunday worship service.' },
                { icon: Mail, title: 'By Mail', desc: 'Send a check payable to Avenue Progressive Baptist Church to 3745 Dildock Street, Dallas, TX 75215.' },
                { icon: Building2, title: 'Church Office', desc: 'Visit the church office during business hours (Mon–Fri, 9 AM–5 PM) to give in person.' },
              ].map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div className="h-full rounded-[2rem] p-7 text-center bg-white ring-1 ring-black/5 shadow-sm">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-maroon-50">
                      <m.icon size={24} className="text-maroon-800" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-24 bg-maroon-950 text-white">
          <div className="container-width">
            <Reveal className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3 leading-[1.05]">Your Giving Makes a Difference</h2>
              <p className="font-sans text-base text-white/70 max-w-xl mx-auto">When you give to THE AVENUE, you&rsquo;re supporting:</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                'Worship services & pastoral care',
                'Youth & children’s ministry',
                'Community outreach & missions',
                'Building & grounds maintenance',
              ].map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 h-full">
                    <Heart size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-sm text-white/85">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <V2CTA
          title="Questions About Giving?"
          text="We’re happy to help. Reach out and we’ll answer any questions about tithes, offerings, or designated gifts."
          buttons={[{ label: 'Contact Us', href: '/contact', primary: true }]}
        />
      </main>
      <V2Footer />
    </div>
  );
}
