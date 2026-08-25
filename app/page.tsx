import React from 'react';
import V2Header from '@/components/v2/v2-header';
import V2Footer from '@/components/v2/v2-footer';
import V2Home from '@/components/v2/v2-home';

export default function HomePage() {
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
