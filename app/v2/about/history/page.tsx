import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import V2Shell from '@/components/v2/v2-shell';
import V2PageHero from '@/components/v2/v2-page-hero';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

export const metadata: Metadata = {
  title: 'Our History | THE AVENUE',
  description:
    'Over 60 years of faithful service in South Dallas — the story of Avenue Progressive Baptist Church since 1961.',
};

const pastors = [
  {
    num: '01',
    name: 'Dr. E. B. Glenn Dickens',
    title: 'Founding Pastor',
    years: '1961 – 2000',
    image: '/images/photos/eb-glenn-2.jpg',
    desc: 'Opened the mission on May 7, 1961. Preached the first sermon: “A Mind to Work.” Served faithfully for nearly four decades.',
  },
  {
    num: '02',
    name: 'Rev. Aaron Paul Vernon',
    title: 'Second Pastor',
    years: '2000 – 2011',
    image: '/images/photos/pastor-vernon.jpg',
    desc: 'Continued the legacy of Dr. Dickens, shepherding the congregation through a new century with steadfast faith and vision.',
  },
  {
    num: '03',
    name: 'Rev. Elmer Rogers',
    title: 'Third Pastor',
    years: '2011 – 2013',
    image: '/images/photos/elmer-rogers.jpg',
    desc: 'Guided the church through a season of transition, maintaining the spirit of community and worship at THE AVENUE.',
  },
  {
    num: '04',
    name: 'Rev. Raymond Shaw',
    title: 'Fourth Pastor',
    years: '2014 – 2024',
    image: '/images/photos/pastor-shaw.jpg',
    desc: 'Strengthened the congregation’s roots in South Dallas over a decade of dedicated ministry, guiding the church faithfully through the COVID-19 pandemic.',
  },
  {
    num: '05',
    name: 'Dr. Mancil Carroll III',
    title: 'Senior Pastor',
    years: '2025 – Present',
    image: '/images/photos/pastor-carroll-portrait.jpg',
    desc: 'Elected May 2025. Holds M.Div. & D.Min. from Liberty University. Leads with a passion for expository preaching and South Dallas.',
  },
];

const timeline = [
  {
    year: '1961',
    title: 'The Mission Opens',
    text: 'On May 7, 1961, Rev. E. B. Glenn Dickens opened the doors of the mission at 2714 Grand Avenue. When no one came on the first night, he turned to God for strength. Three weeks later he preached the first sermon — “A Mind to Work.”',
  },
  {
    year: '1961',
    title: 'First Members United',
    text: 'Fifteen individuals united with the congregation after that first sermon. The church was officially organized by Mount Sinai Baptist Church, and Rev. Dickens was appointed its first pastor. A community of faith was born.',
  },
  {
    year: '1961 – 2000',
    title: 'Dr. Dickens’ Founding Era',
    text: 'Under Dr. Dickens’ nearly four decades of leadership, THE AVENUE became a spiritual anchor in South Dallas — faithfully preaching the Gospel through the civil rights era, urban renewal, and community transformation.',
  },
  {
    year: '2000 – 2011',
    title: 'Rev. Aaron Paul Vernon',
    text: 'Rev. Vernon assumed the pastorate in 2000, carrying the baton of faith into a new century. His steady leadership kept the congregation rooted in its founding values of worship and community.',
  },
  {
    year: '2011 – 2013',
    title: 'Rev. Elmer Rogers',
    text: 'Rev. Rogers served as the third pastor, guiding the congregation through a season of prayer and transition, maintaining the spirit of worship and fellowship at THE AVENUE.',
  },
  {
    year: '2014 – 2024',
    title: 'Rev. Raymond Shaw',
    text: 'Rev. Shaw served for a decade as fourth pastor, deepening the church’s roots in South Dallas through dedicated ministry and outreach. He faithfully guided the congregation through the challenges of the COVID-19 pandemic, keeping the church united in faith and community.',
  },
  {
    year: '2025',
    title: 'Dr. Mancil Carroll III',
    text: 'In May 2025, Dr. Mancil Carroll III was elected Senior Pastor. Holding a Master of Divinity and Doctor of Ministry from Liberty University, Dr. Carroll leads with fresh vision and a deep love for South Dallas.',
  },
  {
    year: 'Today',
    title: 'Continuing the Legacy',
    text: 'Avenue Progressive Baptist Church continues as a cornerstone of faith — Sunday School at 10:00 AM, Sunday Worship at 11:15 AM, and Wednesday Prayer & Bible Study at 6:30 PM. Our doors and hearts remain open to all.',
  },
];

export default function V2HistoryPage() {
  return (
    <V2Shell>
      <V2PageHero
        eyebrow="Est. May 1961"
        title="Our History"
        subtitle="Over 60 years of faithful service, community impact, and unwavering commitment to spreading God’s love in South Dallas."
        image="/images/photos/original-avenue.png"
        imageAlt="The original Avenue Baptist Church building"
      />

      {/* Founding */}
      <section className="py-24 bg-cream">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
                The Beginning
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6 leading-[1.05]">
                Founding &amp; early years
              </h2>
              <div className="font-sans text-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  Avenue Progressive Baptist Church was founded in May 1961 in the heart of South
                  Dallas, within the historic &ldquo;Queen City&rdquo; neighborhood. Originally
                  established as a mission, the church was created to meet the spiritual needs of
                  one of the oldest African American communities in the area.
                </p>
                <p>
                  The first gatherings took place in a storefront located at 2714 Grand Avenue. The
                  name Avenue Baptist Church was inspired by the intersection of Grand Avenue and
                  Oakland Avenue&mdash;symbolizing &ldquo;A Way to Christ.&rdquo;
                </p>
                <p>
                  Rev. E. B. Glenn Dickens played a pivotal role in the church&rsquo;s formation. On
                  May 7, 1961, he opened the doors of the mission, hoping for support. When no one
                  came, he turned to God for strength. On May 28, he preached the mission&rsquo;s
                  first sermon, &ldquo;A Mind to Work,&rdquo; and fifteen individuals united with the
                  congregation. The church was officially organized by Mount Sinai Baptist Church,
                  and Rev. Dickens was appointed its first pastor.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/photos/original-avenue.png"
                  alt="Original Avenue Baptist Church building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/photos/eb-glenn.jpg"
                    alt="Rev. Dr. E. B. Glenn Dickens, Founder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <p className="font-serif text-base font-bold text-maroon-900">
                    Rev. Dr. E. B. Glenn Dickens
                  </p>
                  <p className="font-sans text-xs tracking-wide uppercase text-gray-400 mt-1">
                    Founder &amp; First Pastor
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="py-24 bg-white">
        <div className="container-width">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">Growth</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-8 leading-[1.05]">
              A growing legacy
            </h2>
            <div className="font-sans text-base text-gray-600 leading-relaxed space-y-4 text-left">
              <p>
                In August 1963, the church moved to a new location at 3745 Dildock Street,
                purchasing the property from the Church of God in Christ, Pillar Ground and Truth. A
                decade later, in October 1973, the church affiliated with the Progressive National
                Baptist Convention and adopted its current name: Avenue Progressive Baptist Church.
              </p>
              <p>
                For over 60 years, Avenue Progressive Baptist Church has remained a beacon of hope,
                faith, and community in South Dallas. We continue to honor our rich legacy while
                embracing the future with a renewed commitment to spiritual growth, outreach, and
                service.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pastoral Leadership */}
      <section className="py-24 bg-maroon-950 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="relative container-width">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
              Our Shepherds
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-[1.05]">
              Leadership through the years
            </h2>
            <p className="font-sans text-base text-white/60">
              Over six decades, Avenue Progressive has been blessed with faithful pastoral
              leadership. Only five pastors have served this congregation.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {pastors.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div className="group text-left">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 mb-4 bg-white/5">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <span className="absolute top-3 left-3 font-serif text-sm font-bold text-maroon-950 bg-gold-400 rounded-full w-9 h-9 flex items-center justify-center shadow-lg">
                      {p.num}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-gold-400 mb-1">{p.years}</p>
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">{p.name}</h3>
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-white/40 mt-1 mb-3">
                    {p.title}
                  </p>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Through the Decades — Our Story */}
      <section className="py-24 bg-cream">
        <div className="container-width max-w-4xl">
          <Reveal className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
              Through the Decades
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
              Our Story
            </h2>
          </Reveal>
          <div className="relative border-l-2 border-gold-400/30 pl-8 md:pl-12 space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-[39px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-gold-400 ring-4 ring-cream" />
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500 mb-2 font-semibold">
                    {t.year}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-maroon-900 mb-2">
                    {t.title}
                  </h3>
                  <p className="font-sans text-base text-gray-600 leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <V2CTA
        title="Be part of our continuing story"
        text="Join us as we write the next chapter of Avenue Progressive’s history."
        image="/images/photos/65th-prayer-moment.jpg"
        buttons={[
          { label: 'Plan Your Visit', href: '/visit', primary: true },
          { label: 'Contact Us', href: '/contact' },
        ]}
      />
    </V2Shell>
  );
}
