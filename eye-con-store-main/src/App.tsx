import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import FramesGallery from './components/sections/FramesGallery';
import ComingSoon from './components/sections/ComingSoon';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FrameDetailsModal from './components/ui/FrameDetailsModal';
import { Frame } from './types';

export default function App() {
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-slate font-sans antialiased overflow-x-hidden flex flex-col">
      {/* Dynamic Sticky Header */}
      <Navbar />

      {/* Main Showcase Chapters */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Catalog Search & Filtering */}
        <FramesGallery onSelectFrame={setSelectedFrame} />

        {/* Innovative and Future Services */}
        <ComingSoon />

        {/* Flagship Store Coordinates / Google Maps */}
        <Location />

        {/* Quick Email Inquiry Form & Hotline Info */}
        <Contact />
      </main>

      {/* Structured Dark Footer */}
      <Footer />

      {/* Premium Inspect Specification Overlay Modal */}
      <FrameDetailsModal
        frame={selectedFrame}
        onClose={() => setSelectedFrame(null)}
      />
    </div>
  );
}
