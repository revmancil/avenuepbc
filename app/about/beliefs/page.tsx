import React from 'react';
import type { Metadata } from 'next';
import { BookOpen, Heart, Cross, Crown, Wind, Church } from 'lucide-react';
import V2Shell from '@/components/v2/v2-shell';
import V2PageHero from '@/components/v2/v2-page-hero';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

export const metadata: Metadata = {
  title: 'What We Believe | THE AVENUE',
  description:
    'The foundational truths that guide our faith and shape our mission as followers of Jesus Christ.',
};

const beliefs = [
  {
    title: 'The Holy Scripture',
    description:
      'We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and life.',
    icon: BookOpen,
    verse: '“All Scripture is God-breathed and is useful for teaching...” — 2 Timothy 3:16',
  },
  {
    title: 'The Trinity',
    description:
      'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.',
    icon: Crown,
    verse:
      '“Go and make disciples… baptizing them in the name of the Father and of the Son and of the Holy Spirit” — Matthew 28:19',
  },
  {
    title: 'Jesus Christ',
    description:
      'We believe Jesus Christ is fully God and fully man, born of a virgin, crucified for our sins, and risen from the dead.',
    icon: Cross,
    verse: '“For God so loved the world that he gave his one and only Son…” — John 3:16',
  },
  {
    title: 'Salvation',
    description:
      'We believe salvation is by grace through faith in Jesus Christ alone, not by works.',
    icon: Heart,
    verse: '“For it is by grace you have been saved, through faith…” — Ephesians 2:8-9',
  },
  {
    title: 'The Holy Spirit',
    description:
      'We believe the Holy Spirit convicts, regenerates, baptizes, and empowers believers for Christian living.',
    icon: Wind,
    verse: '“But you will receive power when the Holy Spirit comes on you…” — Acts 1:8',
  },
  {
    title: 'The Church',
    description:
      'We believe the church is the body of Christ, called to worship, fellowship, discipleship, ministry, and evangelism.',
    icon: Church,
    verse:
      '“And I tell you that you are Peter, and on this rock I will build my church…” — Matthew 16:18',
  },
];

const distinctives = [
  { icon: BookOpen, title: 'Biblical Authority', desc: 'The Bible is our sole authority for faith and practice.' },
  { icon: Heart, title: 'Salvation by Grace', desc: 'Salvation is by grace alone through faith alone in Christ alone.' },
  { icon: Wind, title: 'Believer’s Baptism', desc: 'Baptism by immersion for those who have believed in Christ.' },
  { icon: Church, title: 'Church Autonomy', desc: 'Each local church is autonomous under Christ’s lordship.' },
];

export default function V2BeliefsPage() {
  return (
    <V2Shell>
      <V2PageHero
        eyebrow="Our Faith"
        title="What We Believe"
        subtitle="The foundational truths that guide our faith and shape our mission as followers of Jesus Christ."
        image="/images/photos/DM1A1075-2.jpg"
        imageAlt="Bible study at THE AVENUE"
      />

      {/* Intro */}
      <section className="py-24 bg-cream">
        <div className="container-width">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-maroon-800 flex items-center justify-center mx-auto mb-6">
              <BookOpen size={24} className="text-gold-400" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6 leading-[1.05]">
              Grounded in Scripture
            </h2>
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              At THE AVENUE, our beliefs are firmly rooted in the Word of God. These core doctrines
              have guided our church family since 1961 and continue to shape who we are and how we
              serve. We hold to historic Christian orthodoxy while embracing the Baptist
              distinctives that emphasize the authority of Scripture, salvation by grace through
              faith, and the autonomy of the local church.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="max-w-2xl mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
              Core Beliefs
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
              What we hold true
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.08} className="h-full">
                <div className="rounded-3xl bg-cream ring-1 ring-black/5 p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-maroon-800 flex items-center justify-center flex-shrink-0">
                      <b.icon size={20} className="text-gold-400" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-maroon-900">{b.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">
                    {b.description}
                  </p>
                  <div className="rounded-2xl bg-white p-4 border-l-2 border-gold-400">
                    <p className="font-serif text-sm italic text-gray-500 leading-relaxed">
                      {b.verse}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Baptist Distinctives */}
      <section className="py-24 bg-cream">
        <div className="container-width">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
              Our Tradition
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
              Baptist distinctives
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {distinctives.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.07} className="h-full">
                <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-maroon-50 flex items-center justify-center mx-auto mb-4">
                    <d.icon size={20} className="text-maroon-800" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-maroon-900 mb-2">{d.title}</h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <V2CTA
        title="Questions about our faith?"
        text="We’d love to talk with you. Reach out or join us this Sunday."
        buttons={[
          { label: 'Ask a Question', href: '/contact', primary: true },
          { label: 'Plan Your Visit', href: '/visit' },
        ]}
      />
    </V2Shell>
  );
}
