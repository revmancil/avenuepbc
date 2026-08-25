"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-[#faf8f5]">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#d4a843] mb-3">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#800000] mb-5 leading-tight">
              A Place Where You Belong
            </h2>
            <div className="gold-divider mb-6" />
            <p className="font-sans text-base text-gray-600 leading-relaxed mb-4">
              For over 60 years, THE AVENUE &mdash; Avenue Progressive Baptist Church &mdash; has been
              a cornerstone of faith and community in South Dallas. We are a warm, Bible-believing
              church family where everyone is welcomed, loved, and encouraged to grow in Christ.
            </p>
            <p className="font-sans text-base text-gray-600 leading-relaxed mb-8">
              Whether you&rsquo;re looking for a church home, exploring your faith, or searching for
              a community that cares, you&rsquo;ll find open doors and open hearts at THE AVENUE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about/history" className="btn-outline inline-flex items-center gap-2 text-xs px-6 py-3">
                Our Story
                <ArrowRight size={14} />
              </Link>
              <Link href="/visit" className="btn-primary inline-flex items-center gap-2 text-xs px-6 py-3">
                Plan Your Visit
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/photos/DM1A1120-2.jpg"
                alt="Avenue Progressive Baptist Church community gathered in fellowship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#800000] text-white rounded-lg px-5 py-3 shadow-lg">
              <p className="font-serif text-xl font-bold">Since 1961</p>
              <p className="font-sans text-[10px] tracking-wider uppercase text-gray-300">Serving South Dallas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
