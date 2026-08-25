'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Send, MapPin, Phone, Mail, Clock} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import V2Header from '@/components/v2/v2-header';
import V2Footer from '@/components/v2/v2-footer';
import Reveal from '@/components/v2/v2-reveal';

export default function V2ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact' }),
      });
      if (res.ok) {
        toast.success('Message sent! We’ll be in touch soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error();
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    { icon: MapPin, title: 'Address', node: <>3745 Dildock Street<br />Dallas, TX 75215</> },
    { icon: Phone, title: 'Phone', node: <a href="tel:469-372-0065" className="hover:text-maroon-800" suppressHydrationWarning>469-372-0065</a> },
    { icon: Mail, title: 'Email', node: <a href="mailto:info@avenuepbc.org" className="hover:text-maroon-800" suppressHydrationWarning>info@avenuepbc.org</a> },
    { icon: Clock, title: 'Office Hours', node: <>Mon &ndash; Fri<br />9:00 AM &ndash; 4:00 PM</> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <V2Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-maroon-950">
          <div className="absolute inset-0">
            <Image src="/images/photos/65th-congregation-group.jpg" alt="Welcome at THE AVENUE" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-maroon-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-maroon-950/70" />
          </div>
          <div className="pointer-events-none absolute top-1/4 -left-20 w-[26rem] h-[26rem] rounded-full bg-gold-400/10 blur-3xl" />
          <div className="relative z-10 container-width w-full pt-32 pb-20">
            <div className="max-w-3xl">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-400 mb-4">Get in Touch</p>
              <h1 className="font-serif text-white font-bold leading-[0.98] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Contact Us
              </h1>
              <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                We&rsquo;d love to hear from you. Reach out with questions, prayer requests, or to learn more about our church family.
              </p>
            </div>
          </div>
        </section>

        {/* Quick info cards */}
        <section className="-mt-16 relative z-20 pb-4">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {infoCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.07}>
                  <div className="bg-white rounded-[1.5rem] shadow-xl ring-1 ring-black/5 p-6 text-center h-full">
                    <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <c.icon size={22} className="text-maroon-800" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon-900 mb-1">{c.title}</h3>
                    <p className="text-gray-600 text-sm">{c.node}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="py-24 bg-cream">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Reveal>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">We&rsquo;d Love to Hear from You</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 leading-[1.05] mb-5">Send Us a Message</h2>
                <p className="font-sans text-base text-gray-600 mb-8 leading-relaxed">
                  Have a question? Need prayer? Want to know more? Drop us a message and our team will get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-8 ring-1 ring-black/5 shadow-sm space-y-4">
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="font-sans" />
                  <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="font-sans" />
                  <Textarea name="message" placeholder="Your message or prayer request..." value={formData.message} onChange={handleChange} rows={4} required className="font-sans resize-none" />
                  <Button type="submit" disabled={isSubmitting} className="rounded-full bg-maroon-900 hover:bg-maroon-800 text-white font-semibold">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={14} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Reveal>

              <Reveal delay={0.12} className="space-y-8">
                <div className="rounded-[2rem] overflow-hidden shadow-lg ring-1 ring-black/5 aspect-video">
                  <iframe
                    title="Avenue Progressive Baptist Church location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5!2d-96.762!3d32.754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3745+Dildock+Street+Dallas+TX+75215!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="bg-maroon-950 text-white rounded-[2rem] p-8">
                  <h3 className="font-serif text-xl font-bold mb-5">Visit or Reach Out</h3>
                  <div className="space-y-4 font-sans text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 text-gold-400 flex-shrink-0" />
                      <div className="text-white/80">
                        <p>3745 Dildock Street</p>
                        <p>Dallas, TX 75215</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={16} className="mt-0.5 text-gold-400 flex-shrink-0" />
                      <a href="tel:+14693720065" className="text-white/80 hover:text-gold-400 transition-colors" suppressHydrationWarning>
                        469-372-0065
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="mt-0.5 text-gold-400 flex-shrink-0" />
                      <a href="mailto:info@avenuepbc.org" className="text-white/80 hover:text-gold-400 transition-colors" suppressHydrationWarning>
                        info@avenuepbc.org
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="mt-0.5 text-gold-400 flex-shrink-0" />
                      <div className="text-white/80">
                        <p>Mon &ndash; Fri</p>
                        <p>9:00 AM &ndash; 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <V2Footer />
    </div>
  );
}
