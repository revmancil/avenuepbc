'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Users, Heart, BookOpen, Music, UserCheck, Clock, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import V2Header from '@/components/v2/v2-header';
import V2Footer from '@/components/v2/v2-footer';
import V2PageHero from '@/components/v2/v2-page-hero';
import V2CTA from '@/components/v2/v2-cta';
import Reveal from '@/components/v2/v2-reveal';

export default function V2MinistriesPage() {
  const ministries = [
    {
      title: 'Sunday School',
      description: 'Bible study for all ages with age-appropriate classes designed to help everyone grow in their faith.',
      image: '/images/photos/DM1A1075-2.jpg',
      icon: BookOpen,
      time: 'Sundays at 10:00 AM',
      location: 'Various Classrooms',
      fullDescription: 'Our Sunday School program offers biblically-based teaching for all ages, from children to adults. Each class is tailored to provide age-appropriate lessons that help deepen understanding of God\u2019s Word and its application to daily life. We believe that studying the Bible together in community strengthens our faith and builds lasting relationships.',
      ageGroups: [
        'Children (Ages 3-12)',
        'Youth (Ages 13-17)',
        'Young Adults (Ages 18-35)',
        'Adults (Ages 36+)',
        'Senior Saints (Ages 65+)'
      ],
      contact: {
        coordinator: 'Sunday School Director',
        email: 'sundayschool@avenueprogressive.org',
        phone: '(214) 421-6467'
      }
    },
    {
      title: 'Youth Ministry',
      description: 'Engaging programs for teenagers focused on building strong faith foundations and lasting friendships.',
      image: '/images/photos/DM1A1006-2.jpg',
      icon: Users,
      time: 'Fridays at 6:30 PM',
      location: 'Youth Room',
      fullDescription: 'The Avenue Youth Ministry is dedicated to helping teenagers grow in their relationship with Christ through dynamic worship, relevant biblical teaching, and meaningful fellowship. We provide a safe space where young people can ask questions, explore their faith, and build friendships that will last a lifetime.',
      activities: [
        'Weekly youth services with worship and teaching',
        'Monthly outings and social events',
        'Summer youth camp',
        'Community service projects',
        'Leadership development programs'
      ],
      contact: {
        coordinator: 'Youth Pastor',
        email: 'youth@avenueprogressive.org',
        phone: '(214) 421-6467'
      }
    },
    {
      title: "Women's Ministry",
      description: 'Empowering women through Bible study, fellowship, and service opportunities in our community.',
      image: '/images/photos/DM1A0956.jpg',
      icon: Heart,
      time: 'Second Saturday of each month at 10:00 AM',
      location: 'Fellowship Hall',
      fullDescription: 'The Women\u2019s Ministry at Avenue Progressive Baptist Church provides a nurturing environment where women of all ages can grow spiritually, build meaningful relationships, and serve together. Through Bible studies, prayer groups, and fellowship events, we encourage and support one another in our journey of faith.',
      activities: [
        'Monthly fellowship gatherings',
        'Bible study groups',
        'Prayer ministry',
        'Community outreach projects',
        'Annual women\u2019s retreat',
        'Mentorship programs'
      ],
      contact: {
        coordinator: "Women's Ministry Leader",
        email: 'women@avenueprogressive.org',
        phone: '(214) 421-6467'
      }
    },
    {
      title: "Men's Ministry",
      description: 'Building godly men through fellowship, accountability, and service to God and community.',
      image: '/images/photos/DM1A0969.jpg',
      icon: UserCheck,
      time: 'First Saturday of each month at 8:00 AM',
      location: 'Fellowship Hall',
      fullDescription: 'The Men\u2019s Ministry exists to challenge and equip men to be spiritual leaders in their homes, churches, and communities. We provide opportunities for fellowship, accountability, and service while encouraging each man to grow in his walk with Christ.',
      activities: [
        'Monthly breakfast fellowship',
        'Bible study and prayer groups',
        'Community service projects',
        'Annual men\u2019s conference',
        'Mentorship and accountability partnerships',
        'Sports and recreation events'
      ],
      contact: {
        coordinator: "Men's Ministry Leader",
        email: 'men@avenueprogressive.org',
        phone: '(214) 421-6467'
      }
    },
    {
      title: 'Hospitality Ministry',
      description: 'Welcoming guests and members with warmth and excellence, creating an inviting atmosphere for worship.',
      image: '/images/photos/DM1A0964-2.jpg',
      icon: Heart,
      time: 'Sundays before and after services',
      location: 'Sanctuary & Fellowship Hall',
      fullDescription: 'Our Hospitality Ministry is dedicated to creating a warm, welcoming environment for everyone who walks through our doors. We believe that genuine hospitality reflects the love of Christ and helps people feel at home in God\u2019s house.',
      activities: [
        'Greeting and welcoming visitors',
        'Assisting with special events and programs',
        'Coordinating fellowship meals',
        'Managing the welcome center',
        'Providing refreshments',
        'Supporting church gatherings'
      ],
      contact: {
        coordinator: 'Hospitality Ministry Coordinator',
        email: 'hospitality@avenueprogressive.org',
        phone: '(214) 421-6467'
      }
    },
    {
      title: 'Music Ministry',
      description: 'Using the gift of music to worship God and inspire our congregation through song.',
      image: '/images/photos/DM1A0951.jpg',
      icon: Music,
      time: 'Saturdays at 12:30 PM (Choir Rehearsal)',
      location: 'Sanctuary',
      fullDescription: 'The Music Ministry at Avenue Progressive Baptist Church is committed to leading our congregation in Spirit-filled worship through music. Whether you sing, play an instrument, or have a heart for worship, there\u2019s a place for you to use your gifts to glorify God.',
      groups: [
        'Adult Choir',
        'Youth Choir',
        "Children's Choir",
        'Praise Team',
        'Musicians and Band'
      ],
      activities: [
        'Weekly choir rehearsals',
        'Sunday morning worship leading',
        'Special seasonal concerts',
        'Musical workshops and training',
        'Community performances'
      ],
      contact: {
        coordinator: 'Music Director',
        email: 'music@avenueprogressive.org',
        phone: '(214) 421-6467'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <V2Header />
      <main>
        <V2PageHero
          eyebrow="Serve & Grow"
          title="Our Ministries"
          subtitle="Discover opportunities to grow, serve, and connect with others as we build God’s kingdom together."
          image="/images/photos/65th-congregation-joy.jpg"
          imageAlt="Ministry gathering at THE AVENUE"
        />

        {/* Intro + grid */}
        <section className="py-24 bg-cream">
          <div className="container-width">
            <Reveal className="max-w-2xl mb-16">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Get Involved</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-5">
                Find Your Place to Serve
              </h2>
              <p className="font-sans text-lg text-gray-600 leading-relaxed">
                Every person has unique gifts and talents. Discover how you can use yours to make a
                difference in our church and community.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.map((ministry, index) => {
                const IconComponent = ministry.icon;
                return (
                  <Dialog key={ministry.title}>
                    <Reveal delay={(index % 3) * 0.08}>
                      <div className="group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="relative aspect-[16/11] bg-maroon-950 overflow-hidden">
                          <Image
                            src={ministry.image}
                            alt={ministry.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/40 to-maroon-950/10" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="inline-block rounded-2xl bg-maroon-950/60 backdrop-blur-sm px-4 py-3">
                              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gold-400 text-maroon-950 mb-3">
                                <IconComponent size={20} />
                              </div>
                              <h3 className="font-serif text-2xl font-bold drop-shadow-lg">{ministry.title}</h3>
                            </div>
                          </div>
                        </div>

                        <div className="p-7 flex-grow flex flex-col">
                          <p className="font-sans text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                            {ministry.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-maroon-800 font-medium mb-5">
                            <Clock className="h-4 w-4 text-gold-500" />
                            <span>{ministry.time}</span>
                          </div>
                          <DialogTrigger asChild>
                            <button className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-maroon-900 text-white font-sans font-semibold text-sm hover:bg-maroon-800 transition-colors">
                              Learn More <ArrowUpRight size={16} />
                            </button>
                          </DialogTrigger>
                        </div>
                      </div>
                    </Reveal>

                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-[1.5rem]">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-3xl font-bold text-maroon-900 mb-2">
                          {ministry.title}
                        </DialogTitle>
                        <DialogDescription className="font-sans text-base text-gray-600 leading-relaxed">
                          {ministry.fullDescription}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-6 mt-4">
                        <div className="bg-cream p-5 rounded-2xl">
                          <h4 className="font-serif font-bold text-maroon-900 mb-3">Meeting Information</h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <Clock className="h-5 w-5 text-gold-500 mt-0.5" />
                              <div>
                                <p className="font-medium text-maroon-900">When</p>
                                <p className="text-gray-600">{ministry.time}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-gold-500 mt-0.5" />
                              <div>
                                <p className="font-medium text-maroon-900">Where</p>
                                <p className="text-gray-600">{ministry.location}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {(ministry.ageGroups || ministry.groups) && (
                          <div>
                            <h4 className="font-serif font-bold text-maroon-900 mb-3">
                              {ministry.ageGroups ? 'Age Groups' : 'Groups'}
                            </h4>
                            <ul className="space-y-2">
                              {(ministry.ageGroups || ministry.groups)?.map((group: string, idx: number) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3" />
                                  {group}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {ministry.activities && (
                          <div>
                            <h4 className="font-serif font-bold text-maroon-900 mb-3">Activities &amp; Programs</h4>
                            <ul className="space-y-2">
                              {ministry.activities.map((activity: string, idx: number) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="bg-maroon-50 p-5 rounded-2xl border-l-4 border-maroon-800">
                          <h4 className="font-serif font-bold text-maroon-900 mb-3">Get Involved</h4>
                          <div className="space-y-2">
                            <p className="text-gray-700">
                              <span className="font-medium">Coordinator:</span> {ministry.contact.coordinator}
                            </p>
                            <div className="flex items-center text-gray-700">
                              <Mail className="mr-2 h-4 w-4 text-gold-500" />
                              <a href={`mailto:${ministry.contact.email}`} className="hover:text-maroon-800 hover:underline" suppressHydrationWarning>
                                {ministry.contact.email}
                              </a>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Phone className="mr-2 h-4 w-4 text-gold-500" />
                              <a href={`tel:${ministry.contact.phone}`} className="hover:text-maroon-800 hover:underline" suppressHydrationWarning>
                                {ministry.contact.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          </div>
        </section>

        <V2CTA
          title="Ready to Get Involved?"
          text="We’d love to help you find the perfect ministry to match your interests and calling."
          buttons={[
            { label: 'Contact Us', href: '/contact', primary: true },
            { label: 'Plan Your Visit', href: '/visit' },
          ]}
        />
      </main>
      <V2Footer />
    </div>
  );
}
