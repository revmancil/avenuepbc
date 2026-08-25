"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2a1215] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-white/10 p-1">
                <Image
                  src="/images/logos/avenue-progressive-logo.png"
                  alt="THE AVENUE Avenue Progressive Church Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-serif font-bold text-white">THE AVENUE</div>
                <div className="text-[10px] font-sans text-gray-400 tracking-wider uppercase">
                  Avenue Progressive Baptist Church
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans">
              A Christ-centered church family rooted in faith, love, and service to the South Dallas community since 1961.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61559569121128"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#800000] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#800000] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5 text-white">Service Times</h3>
            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <Clock size={14} className="mt-1 flex-shrink-0 text-[#d4a843]" />
                <div>
                  <p className="font-semibold text-gray-200">Sunday School</p>
                  <p className="text-gray-400">Sundays at 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="mt-1 flex-shrink-0 text-[#d4a843]" />
                <div>
                  <p className="font-semibold text-gray-200">Sunday Worship</p>
                  <p className="text-gray-400">Sundays at 11:15 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="mt-1 flex-shrink-0 text-[#d4a843]" />
                <div>
                  <p className="font-semibold text-gray-200">Wednesday Prayer &amp; Bible Study</p>
                  <p className="text-gray-400">Wednesdays at 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5 text-white">Quick Links</h3>
            <nav className="space-y-2.5 font-sans text-sm">
              {[
                { label: 'Plan Your Visit', href: '/visit' },
                { label: 'Watch Online', href: '/watch' },
                { label: 'Events', href: '/events' },
                { label: 'Give', href: '/give' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Admin Login', href: '/admin/login' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#d4a843] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5 text-white">Contact</h3>
            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-[#d4a843]" />
                <div className="text-gray-400">
                  <p>3745 Dildock Street</p>
                  <p>Dallas, TX 75215</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="flex-shrink-0 text-[#d4a843]" />
                <a href="tel:+14693720065" className="text-gray-400 hover:text-[#d4a843] transition-colors">
                  469-372-0065
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="flex-shrink-0 text-[#d4a843]" />
                <a href="mailto:info@avenuepbc.org" className="text-gray-400 hover:text-[#d4a843] transition-colors">
                  info@avenuepbc.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs font-sans text-gray-500">
            &copy; {new Date().getFullYear()} Avenue Progressive Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
