"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const LegacySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/photos/avenue-church-building.jpg"
                alt="Avenue Progressive Baptist Church building in South Dallas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-3 -right-3 bg-[#d4a843] text-[#3a1a00] rounded-lg px-4 py-2 shadow-md">
              <span className="font-serif font-bold text-sm">Est. May 1961</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#d4a843] mb-3">
              Our Legacy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#800000] mb-5 leading-tight">
              Deep Roots, Growing Faith
            </h2>
            <div className="gold-divider mb-6" />
            <p className="font-sans text-base text-gray-600 leading-relaxed mb-4">
              Founded in May 1961, Avenue Progressive Baptist Church has faithfully served
              the South Dallas community for over six decades. Through seasons of change and
              growth, our commitment to the Gospel and to our neighbors has never wavered.
            </p>
            <p className="font-sans text-base text-gray-600 leading-relaxed mb-8">
              From humble beginnings to becoming &ldquo;THE AVENUE&rdquo;&mdash;a way of access
              to Jesus&mdash;our story is one of God&rsquo;s faithfulness and a people dedicated
              to His kingdom.
            </p>
            <Link href="/about/history" className="btn-outline inline-flex items-center gap-2 text-xs px-6 py-3">
              Discover Our History
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
