"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Music, Heart, Users, Shirt, SmilePlus, ArrowRight } from 'lucide-react';

const items = [
  {
    icon: Clock,
    title: 'Relaxed & On Time',
    text: 'Sunday worship starts at 11:15 AM and lasts about 90 minutes. Arrive a few minutes early so we can greet you.',
  },
  {
    icon: Music,
    title: 'Uplifting Worship',
    text: 'Experience heartfelt praise through traditional hymns and contemporary gospel led by our worship team.',
  },
  {
    icon: Heart,
    title: 'Biblical Preaching',
    text: 'Pastor Carroll delivers expository, Christ-centered messages rooted in Scripture and applied to daily life.',
  },
  {
    icon: Shirt,
    title: 'Come As You Are',
    text: 'There’s no dress code. Some come in suits, some in jeans. What matters is that you’re here.',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    text: 'Children are welcome in the sanctuary, and Sunday School classes are available for every age group.',
  },
  {
    icon: SmilePlus,
    title: 'Warm Welcome',
    text: 'Our greeters and members will make sure you feel at home from the moment you walk in.',
  },
];

const WhatToExpectSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#d4a843] mb-3">
            First-Time Guest?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#800000] mb-4">
            What to Expect on Sunday
          </h2>
          <div className="gold-divider-center mb-4" />
          <p className="font-sans text-base text-gray-500 max-w-2xl mx-auto">
            We know visiting a new church can feel uncertain. Here&rsquo;s what you can look forward to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center px-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#faf8f5] flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-[#800000]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/visit" className="btn-primary inline-flex items-center gap-2 text-xs px-8 py-3">
            Plan Your Visit
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
