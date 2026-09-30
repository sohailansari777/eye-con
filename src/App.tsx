/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { Frame } from './types';

// Code-split below-the-fold components for instant FCP & LCP (< 1.5s)
const FramesGallery = lazy(() => import('./components/sections/FramesGallery'));
const ShopGallery = lazy(() => import('./components/sections/ShopGallery'));
const ComingSoon = lazy(() => import('./components/sections/ComingSoon'));
const Location = lazy(() => import('./components/sections/Location'));
const Contact = lazy(() => import('./components/sections/Contact'));
const FrameDetailsModal = lazy(() => import('./components/ui/FrameDetailsModal'));

export default function App() {
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-slate font-sans antialiased overflow-x-hidden flex flex-col">
      {/* Dynamic Sticky Header */}
      <Navbar />

      {/* Main Showcase Chapters */}
      <main className="flex-grow">
        {/* Instant Critical Above-The-Fold Hero Section */}
        <Hero />

        {/* Async Streamed Below-The-Fold Sections */}
        <Suspense fallback={null}>
          {/* Catalog Search & Filtering */}
          <FramesGallery onSelectFrame={setSelectedFrame} />

          {/* Inside EYE CON Real Store Photography Gallery */}
          <ShopGallery />

          {/* Innovative and Future Services */}
          <ComingSoon />

          {/* Flagship Store Coordinates / Google Maps */}
          <Location />

          {/* Quick Email Inquiry Form & Hotline Info */}
          <Contact />
        </Suspense>
      </main>

      {/* Structured Dark Footer */}
      <Footer />

      {/* Fixed Viewport Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Premium Inspect Specification Overlay Modal */}
      <Suspense fallback={null}>
        {selectedFrame && (
          <FrameDetailsModal
            frame={selectedFrame}
            onClose={() => setSelectedFrame(null)}
          />
        )}
      </Suspense>
    </div>
  );
}


