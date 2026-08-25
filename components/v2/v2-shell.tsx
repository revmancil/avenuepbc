import React from 'react';
import V2Header from './v2-header';
import V2Footer from './v2-footer';

/**
 * Page shell for all modern (V2) pages: floating glass header, footer.
 */
export default function V2Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <V2Header />
      <main>{children}</main>
      <V2Footer />
    </div>
  );
}
