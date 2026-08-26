"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/history' },
      { label: 'Our Pastor', href: '/about/pastor' },
      { label: 'What We Believe', href: '/about/beliefs' },
    ],
  },
  { label: 'Visit', href: '/visit' },
  { label: 'Ministries', href: '/ministries' },
  { label: 'Events', href: '/events' },
  { label: 'Watch', href: '/watch' },
  { label: 'Give', href: '/give' },
  { label: 'Contact', href: '/contact' },
];

const V2Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl border ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-black/5 shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
            : 'bg-white/10 backdrop-blur-md border-white/[15%]'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/90 ring-1 ring-black/5 flex items-center justify-center shrink-0">
              <Image
                src="/images/logos/avenue-progressive-logo.png"
                alt="The Avenue logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p
                className={`font-serif font-bold text-base tracking-tight transition-colors ${
                  scrolled ? 'text-maroon-800' : 'text-white'
                }`}
              >
                THE AVENUE
              </p>
              <p
                className={`text-[10px] font-sans tracking-[0.15em] uppercase transition-colors ${
                  scrolled ? 'text-gray-400' : 'text-white/70'
                }`}
              >
                Progressive Baptist Church
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-sans font-medium transition-colors ${
                      scrolled
                        ? 'text-gray-600 hover:text-maroon-800 hover:bg-maroon-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={13} className="mt-0.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="w-52 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-2">
                      {link.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2.5 rounded-xl text-sm font-sans text-gray-600 hover:bg-maroon-50 hover:text-maroon-800 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-sans font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-600 hover:text-maroon-800 hover:bg-maroon-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://avenuepbc.site"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-sans font-medium px-4 py-2 rounded-full border transition-colors ${
                scrolled
                  ? 'border-maroon-200 text-maroon-800 hover:bg-maroon-50'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              Member Portal
            </a>
            <Link
              href="/visit"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold px-4 py-2 rounded-full bg-gold-400 text-maroon-950 hover:bg-gold-300 transition-colors shadow-sm"
            >
              I'm New
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-maroon-800 hover:bg-maroon-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl rounded-b-2xl px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setAboutOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-sans font-medium text-gray-700 hover:bg-maroon-50"
                    >
                      {link.label}
                      <ChevronDown size={15} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {aboutOpen && (
                      <div className="pl-4">
                        {link.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 rounded-xl text-sm font-sans text-gray-500 hover:bg-maroon-50 hover:text-maroon-800"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-sans font-medium text-gray-700 hover:bg-maroon-50 hover:text-maroon-800"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="flex gap-2 mt-3">
                <a
                  href="https://avenuepbc.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-sans font-medium px-4 py-2.5 rounded-full border border-maroon-200 text-maroon-800"
                >
                  Member Portal
                </a>
                <Link
                  href="/visit"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center text-sm font-sans font-semibold px-4 py-2.5 rounded-full bg-gold-400 text-maroon-950"
                >
                  I'm New
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default V2Header;
