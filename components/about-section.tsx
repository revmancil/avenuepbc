"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-[#faf8f5]">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Pastor image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pastor-mancil-carroll.png"
                alt="Dr. Mancil Carroll III, Senior Pastor of THE AVENUE"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          {/* Pastor welcome text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#d4a843] mb-3">
              A Word from Our Pastor
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#800000] mb-2 leading-tight">
              Dr. Mancil Carroll III
            </h2>
            <p className="font-sans text-sm text-gray-500 mb-5">Senior Pastor</p>
            <div className="gold-divider mb-6" />

            <blockquote className="font-serif text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 border-l-4 border-[#d4a843] pl-5">
              &ldquo;THE AVENUE is more than a church&mdash;it is a family. Here you will find a people
              committed to walking with you in faith, praying alongside you, and helping you
              discover the abundant life that Jesus offers.&rdquo;
            </blockquote>

            <p className="font-sans text-base text-gray-600 leading-relaxed mb-8">
              Elected as the Senior Pastor of Avenue Progressive Baptist Church in May 2025,
              Dr. Carroll brings over 20 years of ministry experience, a passion for expository
              preaching, and a deep love for the South Dallas community.
            </p>

            <Link href="/about/pastor" className="btn-outline inline-flex items-center gap-2 text-xs px-6 py-3">
              About Pastor Carroll
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
