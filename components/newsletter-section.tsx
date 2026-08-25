
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NewsletterForm from '@/components/newsletter-form';

const NewsletterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-[#800000] text-white rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Stay Connected
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, 
            sermon series, and community news delivered to your inbox.
          </p>
          
          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
