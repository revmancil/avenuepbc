"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, ArrowUpRight } from 'lucide-react';

const V2Footer = () => {
  return (
    <footer className="relative bg-maroon-950 text-white overflow-hidden">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-maroon-800/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative container-width py-16">
        {/* Top CTA */}
        <div className="grid lg:grid-cols-2 gap-8 items-center pb-12 mb-12 border-b border-white/10">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              We&rsquo;d love to see you this Sunday.
            </h3>
            <p className="font-sans text-white/60 mt-3 max-w-md">
              Join us for worship at 11:15 AM. Come as you are &mdash; there&rsquo;s a seat and a
              warm welcome waiting for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link
              href="/visit"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full bg-gold-400 text-maroon-950 font-sans font-semibold text-sm hover:bg-gold-300 transition-colors"
            >
              Plan Your Visit
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/watch"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full border border-white/25 text-white font-sans font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Watch Online
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1.5 flex items-center justify-center">
                <Image
                  src="/images/logos/avenue-progressive-logo.png"
                  alt="The Avenue logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-serif font-bold text-lg">THE AVENUE</p>
                <p className="text-[10px] tracking-widest uppercase text-white/50">Since 1961</p>
              </div>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              A Christ-centered family in South Dallas &mdash; a way of access to Jesus.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/profile.php?id=61559569121128"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-400 hover:text-maroon-950 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <Link
                href="/watch"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-400 hover:text-maroon-950 flex items-center justify-center transition-colors"
                aria-label="Watch"
              >
                <Youtube size={16} />
              </Link>
            </div>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-400 mb-4">
              Service Times
            </p>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span>Sunday School &mdash; 10:00 AM</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span>Sunday Worship &mdash; 11:15 AM</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span>Wednesday Prayer &mdash; 6:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-400 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 font-sans text-sm text-white/70">
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/ministries" className="hover:text-gold-400 transition-colors">Ministries</Link></li>
              <li><Link href="/events" className="hover:text-gold-400 transition-colors">Events</Link></li>
              <li><Link href="/give" className="hover:text-gold-400 transition-colors">Give</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-400 mb-4">
              Visit Us
            </p>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span>3745 Dildock Street<br />Dallas, TX 75215</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a href="tel:4693720065" className="hover:text-gold-400 transition-colors">469-372-0065</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-gold-400 shrink-0" />
                <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Avenue Progressive Baptist Church. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/admin/login" className="font-sans text-xs text-white/40 hover:text-gold-400 transition-colors">Admin</Link>
            <p className="font-sans text-xs text-white/40">South Dallas, TX &middot; Est. 1961</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default V2Footer;
