"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowUpRight,
  Play,
  Clock,
  Music,
  HandHeart,
  Shirt,
  Users,
  Sparkles,
  Quote,
} from 'lucide-react';
import V2Events from './v2-events';

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-maroon-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/DM1A1068.jpg"
          alt="Congregation gathered in worship at THE AVENUE"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/95 via-maroon-950/70 to-maroon-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-maroon-950/40" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-[28rem] h-[28rem] rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative z-10 container-width w-full pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/[15%] mb-6"
          >
            <Sparkles size={14} className="text-gold-400" />
            <span className="font-sans text-xs tracking-wide text-white/90">
              A way of access to Jesus &middot; South Dallas since 1961
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-white font-bold leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
          >
            Come home to
            <span className="block text-gold-400">THE AVENUE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-9"
          >
            A warm, Christ-centered church family where you are welcomed, loved, and
            encouraged to grow. Wherever you are on your journey &mdash; you belong here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/visit"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gold-400 text-maroon-950 font-sans font-semibold text-sm hover:bg-gold-300 transition-colors shadow-lg shadow-gold-400/20"
            >
              Plan Your Visit
              <ArrowUpRight size={17} />
            </Link>
            <Link
              href="/watch"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white font-sans font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <Play size={16} />
              Watch Online
            </Link>
          </motion.div>
        </div>

        {/* Service times floating card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/[15%] max-w-2xl"
        >
          {[
            { label: 'Sunday School', time: '10:00 AM' },
            { label: 'Worship Service', time: '11:15 AM' },
            { label: 'Wed. Prayer', time: '6:30 PM' },
          ].map((s) => (
            <div key={s.label} className="bg-transparent px-6 py-5 text-center sm:text-left">
              <p className="font-sans text-[11px] tracking-widest uppercase text-gold-400 mb-1">
                {s.label}
              </p>
              <p className="font-serif text-2xl font-bold text-white">{s.time}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { value: '60+', label: 'Years of ministry' },
    { value: '1961', label: 'Serving since' },
    { value: '3', label: 'Weekly gatherings' },
    { value: 'All', label: 'Are welcome' },
  ];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section ref={ref} className="bg-maroon-950 py-14 border-t border-white/5">
      <div className="container-width grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-1">{s.value}</p>
            <p className="font-sans text-xs md:text-sm tracking-wide text-white/60 uppercase">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- WELCOME ---------------- */
function Welcome() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section ref={ref} className="py-24 bg-cream overflow-hidden">
      <div className="container-width grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/photos/DM1A1120-2.jpg"
              alt="Avenue Progressive Baptist Church family in fellowship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl px-6 py-4 shadow-xl ring-1 ring-black/5">
            <p className="font-serif text-3xl font-bold text-maroon-800">60+</p>
            <p className="font-sans text-[11px] tracking-wider uppercase text-gray-400">
              Years in South Dallas
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4">
            Who We Are
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-6">
            A place where you truly belong
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed mb-5">
            For over six decades, THE AVENUE has been a cornerstone of faith and community
            in South Dallas &mdash; a warm, Bible-believing family where everyone is welcomed
            and encouraged to grow in Christ.
          </p>
          <p className="font-sans text-base text-gray-500 leading-relaxed mb-8">
            Whether you&rsquo;re looking for a church home, exploring your faith, or searching
            for a community that cares, you&rsquo;ll find open doors and open hearts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/about/history"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-maroon-800 text-white font-sans font-semibold text-sm hover:bg-maroon-900 transition-colors"
            >
              Our Story
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/visit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-maroon-200 text-maroon-800 font-sans font-semibold text-sm hover:bg-maroon-50 transition-colors"
            >
              Plan a Visit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- WHAT TO EXPECT ---------------- */
function Expect() {
  const items = [
    { icon: Clock, title: 'Relaxed & on time', text: 'Worship starts at 11:15 AM and runs about 90 minutes.' },
    { icon: Music, title: 'Uplifting worship', text: 'Heartfelt praise through hymns and contemporary gospel.' },
    { icon: HandHeart, title: 'Biblical preaching', text: 'Christ-centered messages rooted in Scripture for daily life.' },
    { icon: Shirt, title: 'Come as you are', text: 'No dress code. What matters is that you showed up.' },
    { icon: Users, title: 'Family friendly', text: 'Children are welcome and Sunday School serves every age.' },
    { icon: Sparkles, title: 'A warm welcome', text: 'Our greeters make sure you feel at home right away.' },
  ];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width">
        <div className="max-w-2xl mb-14">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
            First-Time Guest?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
            What to expect on Sunday
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-3xl p-7 bg-cream hover:bg-maroon-800 ring-1 ring-black/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 group-hover:bg-gold-400 transition-colors">
                <item.icon size={22} className="text-maroon-800" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PASTOR ---------------- */
function Pastor() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section ref={ref} className="py-24 bg-maroon-950 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="relative container-width grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative max-w-sm mx-auto lg:mx-0"
        >
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/pastor-mancil-carroll.png"
              alt="Dr. Mancil Carroll III, Senior Pastor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Quote size={44} className="text-gold-400 mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-snug mb-8">
            &ldquo;THE AVENUE is more than a church &mdash; it is a family. Here you&rsquo;ll find
            a people committed to walking with you in faith and helping you discover the
            abundant life Jesus offers.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold-400" />
            <div>
              <p className="font-serif text-xl font-bold text-white">Dr. Mancil Carroll III</p>
              <p className="font-sans text-sm text-white/50">Senior Pastor</p>
            </div>
          </div>
          <Link
            href="/about/pastor"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-sans font-semibold text-sm hover:bg-white/20 transition-colors"
          >
            Meet Pastor Carroll
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- MINISTRIES BENTO ---------------- */
function Ministries() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const cards = [
    { title: 'Sunday School', desc: 'Bible study for every age, 10:00 AM.', image: '/images/photos/DM1A1075-2.jpg', span: 'lg:col-span-2 lg:row-span-2', h: 'h-full min-h-[280px] lg:min-h-[560px]' },
    { title: 'Youth Ministry', desc: 'Faith, friendship, and purpose for teens.', image: '/images/photos/DM1A1006-2.jpg', span: '', h: 'h-[270px]' },
    { title: 'Music Ministry', desc: 'Lifting hearts through gospel and praise.', image: '/images/photos/DM1A0951.jpg', span: '', h: 'h-[270px]' },
    { title: "Women's Ministry", desc: 'Fellowship, prayer, and support.', image: '/images/photos/DM1A0956.jpg', span: '', h: 'h-[270px]' },
    { title: 'Fellowship', desc: 'Doing life together as one family.', image: '/images/photos/65th-congregation-joy.jpg', span: '', h: 'h-[270px]' },
  ];
  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-3">
              Get Involved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05]">
              Find your place to connect
            </h2>
          </div>
          <Link
            href="/ministries"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-maroon-800 hover:gap-2.5 transition-all"
          >
            All ministries
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto">
          {cards.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={m.span}
            >
              <Link href="/ministries" className={`group relative block rounded-3xl overflow-hidden ${m.h}`}>
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/40 to-maroon-950/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="rounded-2xl bg-maroon-950/60 backdrop-blur-sm px-4 py-3">
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-1 drop-shadow-lg">{m.title}</h3>
                    <p className="font-sans text-sm text-white/70">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/[15%] backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={17} className="text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          <Image
            src="/images/photos/65th-church-group-front.jpg"
            alt="Worship at THE AVENUE"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-maroon-950/[88%]" />
          <div className="relative px-8 py-20 md:py-28 text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-5">
              Your seat is waiting
            </h2>
            <p className="font-sans text-lg text-white/75 max-w-xl mx-auto mb-9">
              Join us this Sunday at 11:15 AM. Whatever your story, there&rsquo;s a place for
              you at THE AVENUE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-maroon-950 font-sans font-semibold text-sm hover:bg-gold-300 transition-colors"
              >
                Plan Your Visit
                <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/give"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-sans font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Give Online
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const V2Home = () => (
  <>
    <Hero />
    <Stats />
    <Welcome />
    <Expect />
    <Pastor />
    <Ministries />
    <V2Events />
    <CTA />
  </>
);

export default V2Home;
