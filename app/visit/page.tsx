'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Clock, MapPin, Car, Shirt, Accessibility, Heart,
  CheckCircle, Send, ArrowRight, Baby} from 'lucide-react';
import { toast } from 'sonner';
import V2Header from '@/components/v2/v2-header';
import V2Footer from '@/components/v2/v2-footer';
import Reveal from '@/components/v2/v2-reveal';

export default function V2PlanYourVisitPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', guests: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error('Please enter your name and email.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/member-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'visit' }),
      });
      if (res.ok) {
        toast.success('Thank you! We look forward to seeing you.');
        setFormData({ name: '', email: '', phone: '', guests: '', message: '' });
      } else {
        throw new Error();
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const expectations = [
    {
      icon: Clock,
      title: 'Service Times',
      items: ['Sunday School: 10:00 AM', 'Sunday Worship: 11:15 AM', 'Wednesday Prayer & Bible Study: 6:30 PM'],
    },
    {
      icon: Clock,
      title: 'How Long Is Service?',
      items: ['Sunday worship typically lasts about 90 minutes. Sunday School is about 45 minutes.'],
    },
    {
      icon: Shirt,
      title: 'What Should I Wear?',
      items: ['Come as you are. Some dress up, some dress casually. The most important thing is that you’re here.'],
    },
    {
      icon: Car,
      title: 'Parking',
      items: ['Free parking is available in the church lot and along the surrounding streets.'],
    },
    {
      icon: Baby,
      title: 'Children & Youth',
      items: ['Children are welcome in the sanctuary. Sunday School classes are available for all age groups starting at 10:00 AM.'],
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      items: ['Our building is accessible. If you have specific needs, please contact us ahead of your visit and we’ll be happy to help.'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <V2Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-maroon-950">
          <div className="absolute inset-0">
            <Image src="/images/photos/65th-church-group-front-2.jpg" alt="Church congregation" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-maroon-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-maroon-950/70" />
          </div>
          <div className="pointer-events-none absolute top-1/4 -left-20 w-[26rem] h-[26rem] rounded-full bg-gold-400/10 blur-3xl" />
          <div className="relative z-10 container-width w-full pt-32 pb-16">
            <div className="max-w-3xl">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4">Your First Sunday</p>
              <h1 className="font-serif text-white font-bold leading-[0.98] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Plan Your Visit
              </h1>
              <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                We&rsquo;re so glad you&rsquo;re thinking about visiting THE AVENUE. Here&rsquo;s everything you need to know to feel right at home.
              </p>
            </div>
          </div>
        </section>

        {/* Service Times Band */}
        <section className="bg-maroon-900 text-white py-10">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-gold-400 mb-1">Sunday School</p>
                <p className="font-serif text-2xl font-bold">10:00 AM</p>
              </div>
              <div className="md:border-x md:border-white/20">
                <p className="font-sans text-xs tracking-widest uppercase text-gold-400 mb-1">Sunday Worship</p>
                <p className="font-serif text-2xl font-bold">11:15 AM</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-gold-400 mb-1">Wednesday Prayer</p>
                <p className="font-serif text-2xl font-bold">6:30 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-24 bg-cream">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Find Us</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-5">Our Location</h2>
                <div className="font-sans text-base text-gray-600 space-y-3 mb-6">
                  <p className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1 text-gold-500 flex-shrink-0" />
                    <span>3745 Dildock Street, Dallas, TX 75215</span>
                  </p>
                  <p className="text-sm text-gray-500 pl-[30px]">
                    Located in the heart of South Dallas. Look for the church building on Dildock Street.
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-maroon-900 text-white font-sans font-semibold text-sm hover:bg-maroon-800 transition-colors"
                >
                  Get Directions <ArrowRight size={16} />
                </a>
              </Reveal>
              <Reveal delay={0.1} className="rounded-[2rem] overflow-hidden shadow-lg ring-1 ring-black/5 aspect-video">
                <iframe
                  title="Church location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5!2d-96.762!3d32.754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3745+Dildock+Street+Dallas+TX+75215!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 bg-white">
          <div className="container-width">
            <Reveal className="text-center mb-14 max-w-2xl mx-auto">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Before You Come</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-4">What to Expect</h2>
              <p className="font-sans text-base text-gray-500">
                Visiting a new church can feel like a big step. We want to make it as easy and comfortable as possible.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expectations.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 0.08}>
                  <div className="h-full bg-cream rounded-[2rem] p-7 ring-1 ring-black/5">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                      <item.icon size={22} className="text-maroon-800" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((text, idx) => (
                        <li key={idx} className="font-sans text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                          <CheckCircle size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 bg-cream">
          <div className="container-width max-w-2xl">
            <Reveal className="text-center mb-10">
              <Heart size={32} className="text-maroon-800 mx-auto mb-4" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-4">
                Let Us Know You&rsquo;re Coming
              </h2>
              <p className="font-sans text-base text-gray-500">
                Fill out this short form so we can welcome you by name. This is completely optional&mdash;you&rsquo;re welcome whether we hear from you or not!
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-8 ring-1 ring-black/5 shadow-sm space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-gray-600 mb-1">Your Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required className="font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-gray-600 mb-1">Email *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="font-sans" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-gray-600 mb-1">Phone</label>
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Optional" className="font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-gray-600 mb-1">Number of Guests</label>
                    <Input name="guests" value={formData.guests} onChange={handleChange} placeholder="Including yourself" className="font-sans" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-gray-600 mb-1">Anything we should know?</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Special needs, questions, prayer requests..." className="font-sans resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="rounded-full bg-maroon-900 hover:bg-maroon-800 text-white font-semibold">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={14} />
                      Submit
                    </span>
                  )}
                </Button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <V2Footer />
    </div>
  );
}
