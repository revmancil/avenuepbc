"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 10);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navigationItems = [
    { title: 'Home', href: '/' },
    {
      title: 'About',
      href: '/about',
      children: [
        { title: 'Our History', href: '/about/history' },
        { title: 'Our Pastor', href: '/about/pastor' },
        { title: 'What We Believe', href: '/about/beliefs' },
      ],
    },
    { title: 'Plan Your Visit', href: '/visit' },
    { title: 'Watch', href: '/watch' },
    { title: 'Ministries', href: '/ministries' },
    { title: 'Events', href: '/events' },
    { title: 'Give', href: '/give' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Utility bar */}
      <div className="bg-[#800000] text-white py-2 px-4 text-xs font-sans hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#d4a843]" />
              3745 Dildock Street, Dallas, TX 75215
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={12} className="text-[#d4a843]" />
              <a href="tel:+14693720065" className="hover:text-[#d4a843] transition-colors">469-372-0065</a>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#d4a843]" />
            <span>Sunday Worship: 11:15 AM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/images/logos/avenue-progressive-logo.png"
                  alt="THE AVENUE Avenue Progressive Church Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg lg:text-xl font-serif font-bold text-[#800000] leading-tight">
                  THE AVENUE
                </span>
                <span className="text-[10px] lg:text-xs font-sans text-gray-500 tracking-wide uppercase">
                  Avenue Progressive Baptist Church
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <>
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 px-3 py-2 text-sm font-sans font-medium text-gray-700 hover:text-[#800000] transition-colors rounded-md"
                      >
                        {item.title}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            openDropdown === item.title ? 'rotate-180' : ''
                          }`}
                        />
                      </Link>
                      <div
                        className={`absolute top-full left-0 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                          openDropdown === item.title
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-sans text-gray-600 hover:bg-[#faf8f5] hover:text-[#800000] transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-sans font-medium text-gray-700 hover:text-[#800000] transition-colors rounded-md"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="hidden lg:inline-flex text-xs px-5 py-2 border-[#800000] text-[#800000] bg-white hover:bg-[#800000] hover:text-white transition-colors"
              >
                <a href="https://avenuepbc.site" target="_blank" rel="noopener noreferrer">
                  Member Portal
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="hidden lg:inline-flex btn-primary text-xs px-5 py-2"
              >
                <Link href="/visit">I&apos;m New</Link>
              </Button>

              <button
                className="lg:hidden p-2 text-gray-700 hover:text-[#800000] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-in-up">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-sans font-medium text-gray-700 hover:text-[#800000] hover:bg-[#faf8f5] rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <div className="pl-6 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-2 text-sm font-sans text-gray-500 hover:text-[#800000] rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 px-4 space-y-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#800000] text-[#800000] bg-white hover:bg-[#800000] hover:text-white transition-colors"
                  >
                    <a
                      href="https://avenuepbc.site"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Member Portal
                    </a>
                  </Button>
                  <Button asChild className="w-full btn-primary">
                    <Link href="/visit" onClick={() => setIsOpen(false)}>
                      I&apos;m New – Plan Your Visit
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
