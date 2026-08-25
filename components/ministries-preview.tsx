"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const ministries = [
  {
    title: 'Sunday School',
    desc: 'Bible study for every age, every Sunday at 10:00 AM.',
    image: '/images/photos/DM1A1075-2.jpg',
  },
  {
    title: 'Youth Ministry',
    desc: 'Helping teens grow in faith, friendship, and purpose.',
    image: '/images/photos/DM1A1006-2.jpg',
  },
  {
    title: 'Music Ministry',
    desc: 'Lifting hearts through gospel music and praise.',
    image: '/images/photos/DM1A0951.jpg',
  },
  {
    title: 'Women’s Ministry',
    desc: 'Fellowship, prayer, and support for women of all ages.',
    image: '/images/photos/DM1A0956.jpg',
  },
];

const MinistriesPreview = () => {
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
            Get Involved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#800000] mb-4">
            Our Ministries
          </h2>
          <div className="gold-divider-center mb-4" />
          <p className="font-sans text-base text-gray-500 max-w-2xl mx-auto">
            There’s a place for you at THE AVENUE. Explore our ministries and find where you can connect, grow, and serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/ministries" className="group block">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-lg font-bold text-white mb-1">{m.title}</h3>
                    <p className="font-sans text-xs text-gray-200">{m.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/ministries" className="btn-outline inline-flex items-center gap-2 text-xs px-8 py-3">
            All Ministries
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MinistriesPreview;
