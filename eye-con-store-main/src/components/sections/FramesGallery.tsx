/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FRAMES_DATA } from '../../data/frames';
import { Frame } from '../../types';
import FrameCard from '../ui/FrameCard';
import { Filter, SlidersHorizontal, Grid3X3, Layers } from 'lucide-react';

interface FramesGalleryProps {
  onSelectFrame: (frame: Frame) => void;
}

export default function FramesGallery({ onSelectFrame }: FramesGalleryProps) {
  return (
    <section id="collections" className="py-20 md:py-28 bg-slate-50 border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF8C42]/10 text-[#FF8C42] font-mono text-xs font-semibold uppercase tracking-wider rounded-sm">
            <Filter className="w-3.5 h-3.5" />
            <span>Curated Inventory</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
            Curated Frame Designs
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Browse our premium selection of distinctive full-rim frames. Every frame has been engineered to stand out, fusing lightweight comfort with distinctive modern profiles.
          </p>
        </div>

        {/* Filter Toolbar controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 border-b border-slate-200/60 pb-6">
          {/* Left info label */}
          <div className="flex items-center gap-2 text-slate-500 font-sans text-sm">
            <SlidersHorizontal className="w-4 h-4 text-[#0F4C81]" />
            <span>Showing <strong className="text-slate-900 font-semibold">{FRAMES_DATA.length}</strong> distinctive full-rim styles</span>
          </div>
        </div>

        {/* Frames Gallery Grid with animate layouts */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {FRAMES_DATA.map((frame) => (
              <motion.div
                key={frame.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <FrameCard frame={frame} onOpenDetails={onSelectFrame} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Brand guarantee banner */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-10 bg-white rounded-sm border border-[#E2E8F0] shadow-sm align-middle items-center">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-sm bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81] shrink-0">
              <Grid3X3 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-900 text-sm uppercase tracking-wider">Optimal Proportions</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Engineered using precise Golden Ratio alignments for face contours.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-sm bg-[#FF8C42]/10 flex items-center justify-center text-[#FF8C42] shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-900 text-sm uppercase tracking-wider">Anti-Reflective Lenses</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">All store orders include standard anti-glare, blue-filter coating.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-sm bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-900 text-sm uppercase tracking-wider">Hypoallergenic Alloys</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Skin-friendly alloys prevent irritation on sweat contact.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
