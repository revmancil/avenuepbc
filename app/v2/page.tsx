import React from 'react';
import type { Metadata } from 'next';
import V2Header from '@/components/v2/v2-header';
import V2Footer from '@/components/v2/v2-footer';
import V2Home from '@/components/v2/v2-home';

export const metadata: Metadata = {
  title: 'THE AVENUE | Avenue Progressive Baptist Church',
  description:
    'Avenue Progressive Baptist Church — a Christ-centered family in South Dallas since 1961.',
};

export default function V2Page() {
  return (
    <div className="min-h-screen bg-white">
      <V2Header />
      <main>
        <V2Home />
      </main>
      <V2Footer />
    </div>
  );
}
