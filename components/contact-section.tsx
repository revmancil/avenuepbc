"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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

  return (
    <section ref={ref} className="section-padding bg-[#800000] text-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info + form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#d4a843] mb-3">
              We&rsquo;d Love to Hear from You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-[#d4a843] rounded-full mb-6" />
            <p className="font-sans text-sm text-gray-300 mb-8 leading-relaxed">
              Have a question? Need prayer? Want to know more? Drop us a message and our
              team will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#d4a843] font-sans"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#d4a843] font-sans"
              />
              <Textarea
                name="message"
                placeholder="Your message or prayer request..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#d4a843] font-sans resize-none"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-secondary w-full sm:w-auto"
              >
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
          </motion.div>

          {/* Right: map + quick info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
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

            {/* Contact quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#d4a843] flex-shrink-0" />
                <div className="text-gray-300">
                  <p>3745 Dildock Street</p>
                  <p>Dallas, TX 75215</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-[#d4a843] flex-shrink-0" />
                <a href="tel:+14693720065" className="text-gray-300 hover:text-[#d4a843] transition-colors">
                  469-372-0065
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-[#d4a843] flex-shrink-0" />
                <a href="mailto:info@avenuepbc.org" className="text-gray-300 hover:text-[#d4a843] transition-colors">
                  info@avenuepbc.org
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-outline-light inline-flex items-center gap-2 text-xs px-6 py-3"
            >
              Full Contact Page
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
