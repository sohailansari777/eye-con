/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldAlert, Cpu } from 'lucide-react';

export default function ComingSoon() {
  const futureServices = [
    {
      title: 'Digital Lens Adaptation',
      description: 'Using high-speed scanning systems to custom craft compound lenses optimized for severe astigmatism and high blue-light glare ratios.',
      tag: 'Coming Autumn 2026',
      icon: Cpu,
      color: 'bg-brand-blue/10 text-brand-blue'
    },
    {
      title: 'Bespoke Frame Tailoring',
      description: 'Laser-cutting signature bespoke initials or custom-sculpting acetate bridges to perfectly map to non-standard cranial profiles.',
      tag: 'Under Research',
      icon: Compass,
      color: 'bg-brand-orange/10 text-brand-orange'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Abstract light grid lines for tech flair */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue font-mono text-xs font-semibold uppercase tracking-wider rounded-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Futurism Showcase</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Advanced Optical Offerings
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-sans">
            EYE CON is continually researching state-of-the-art visual enhancements. Here is a sneak peek at the immersive bespoke labs currently in development.
          </p>
        </div>

        {/* Dynamic Glassmorphic Card layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {futureServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.title}
                className="relative p-8 md:p-10 rounded-sm bg-white/60 backdrop-blur-md border border-[#E2E8F0] hover:border-[#0F4C81] hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between group"
              >
                {/* Coming Soon absolute badge */}
                <span className="absolute top-6 right-6 px-3 py-1 bg-slate-100 text-[9px] font-bold rounded-sm uppercase tracking-widest text-slate-500 border border-slate-200">
                  Coming Soon
                </span>

                <div className="space-y-6">
                  <div className={`w-12 h-12 rounded-sm ${service.color} flex items-center justify-center shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold block">
                      {service.tag}
                    </span>
                    <h3 className="font-sans font-bold text-slate-900 text-xl group-hover:text-[#0F4C81] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <ShieldAlert className="w-3.5 h-3.5 text-brand-orange" />
                  <span>PRE-LOVER CLIENTS GET EXCLUSIVE EARLY ACCESS</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
