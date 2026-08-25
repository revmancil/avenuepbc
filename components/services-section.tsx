
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, Users, Play, Calendar } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      title: 'Sunday School',
      time: '10:00 AM',
      description: 'Bible study for all ages with classes for children, youth, and adults',
      image: 'https://cdn.abacus.ai/images/8db6b70e-0ef2-4d0d-8afd-5cb5e106659b.png',
      icon: <Calendar size={24} />
    },
    {
      title: 'Sunday Worship',
      time: '11:15 AM',
      description: 'Join us for inspiring worship, powerful preaching, and uplifting music',
      image: 'https://cdn.abacus.ai/images/1c8aa82e-5de4-4dea-b092-68756694f0c8.png',
      icon: <Users size={24} />
    },
    {
      title: 'Wednesday Prayer Service',
      time: '6:30 PM',
      description: 'Midweek prayer and spiritual renewal with our church family',
      image: 'https://cdn.abacus.ai/images/6ad2ee20-130f-4b61-8e5e-ef6787b7410a.png',
      icon: <Clock size={24} />
    },
    {
      title: 'Wednesday Bible Study',
      time: '7:00 PM',
      description: 'Midweek spiritual growth through in-depth Bible study and prayer',
      image: 'https://cdn.abacus.ai/images/8db6b70e-0ef2-4d0d-8afd-5cb5e106659b.png',
      icon: <Clock size={24} />
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            Worship With Us
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the joy of worshipping together as we gather to praise God, 
            study His Word, and strengthen our faith community.
          </p>
        </motion.div>

        {/* Service Times Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services?.map((service, index) => (
            <motion.div
              key={service?.title || index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden card-hover h-full">
                <div className="relative h-48">
                  <Image
                    src={service?.image || ''}
                    alt={service?.title || 'Service image'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#800000]/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="bg-white/20 rounded-full p-4 mx-auto mb-4 w-fit">
                        {service?.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service?.title || ''}</h3>
                      <p className="text-yellow-300 text-xl font-semibold">{service?.time || ''}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service?.description || ''}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-[#800000] mb-4">
            Can't Make It In Person?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us online for live streaming of our worship services. Experience the same 
            inspiring worship and powerful messages from the comfort of your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-church">
              <Link href="/worship/live-stream">
                <Play className="mr-2" size={20} />
                Watch Live Stream
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white">
              <Link href="/worship/service-times">
                <Clock className="mr-2" size={20} />
                All Service Times
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <MapPin size={20} className="text-[#800000]" />
            <span className="text-lg">3745 Dildock Street, Dallas, TX 75215</span>
          </div>
          <Button asChild variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white">
            <Link href="/contact">
              Get Directions
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
