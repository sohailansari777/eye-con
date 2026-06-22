/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Compass, HelpCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF8C42]/10 text-[#FF8C42] font-mono text-xs font-semibold uppercase tracking-wider rounded-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>SHOWROOM VISIT</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
            Our Showroom Location
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Schedule a visit or drop by during business hours to try on frames personally and enjoy complimentary refreshments and personal lens consultations.
          </p>
        </div>

        {/* Info Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
          
          {/* Main Map Block (7 cols on large) */}
          <div className="lg:col-span-7 bg-white p-2 rounded-sm border border-[#E2E8F0] shadow-sm min-h-[350px] md:min-h-[450px] relative overflow-hidden flex flex-col justify-between">
            {/* Embedded Google Maps responsive Frame */}
            <iframe
              title="EYE CON Showroom Location Map"
              src="https://maps.google.com/maps?q=J4M9%2BMJ+Bokaro+Steel+City,+Jharkhand&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-sm border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Information Card (5 cols on large) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Showroom detail card */}
            <div className="bg-white p-8 rounded-sm border border-[#E2E8F0] shadow-sm space-y-6 text-left flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="font-sans font-bold text-slate-900 text-xl tracking-tight uppercase">
                  Bokaro showroom
                </h3>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Plot+No+281,+Near+SBI+Bank,+Bari+Co-operative+Colony,+Bokaro+Steel+City,+Tentulia,+Jharkhand+827010,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0F4C81] text-white hover:bg-[#FF8C42] text-[10px] font-bold font-sans rounded-sm transition-all duration-300 shadow-sm uppercase tracking-wider cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 animate-pulse" />
                  <span>Get Directions</span>
                </a>
              </div>

              <div className="space-y-6">
                {/* Point 1: Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-sm bg-[#FF8C42]/10 text-[#FF8C42] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm uppercase">Official Address</h4>
                    <p className="text-slate-600 font-sans text-xs mt-1 leading-relaxed">
                      Plot No 281, Near SBI Bank, <br />
                      Bari Co-operative Colony, <br />
                      Bokaro Steel City, <br />
                      Tentulia, Jharkhand 827012, India
                    </p>
                    <span className="text-[10px] font-mono text-[#0F4C81] bg-[#0F4C81]/5 px-2 py-0.5 rounded-sm inline-block mt-2 font-semibold">
                      Plus Code: J4M9+MJ Bokaro Steel City, Jharkhand
                    </span>
                  </div>
                </div>

                {/* Point 2: Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-sm bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-sans font-bold text-slate-900 text-sm uppercase">Opening Hours</h4>
                    <div className="mt-2">
                      <table className="w-full">
                        <tbody>
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                            <tr key={day} className="border-b border-slate-50 last:border-0">
                              <td className="py-1 pr-4 text-[13px] text-slate-600 font-sans font-normal">{day}</td>
                              <td className="py-1 text-[13px] text-slate-500 font-sans font-normal text-right">9:00 AM – 9:00 PM</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Point 3: Landmark */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-sm bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm uppercase">Directions & Landmarks</h4>
                    <p className="text-slate-600 font-sans text-xs mt-1 leading-relaxed">
                      Conveniently located <strong className="text-slate-800 font-semibold">Near SBI Bank</strong> inside Bari Co-operative Colony. Ample storefront parking is available for showroom visitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action hotline card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-[#0F4C81] text-white p-6 rounded-sm text-left shadow-lg relative overflow-hidden flex items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#FF8C42] uppercase font-bold block">
                  SHOWROOM CALL / HOTLINE
                </span>
                <span className="font-sans font-bold text-sm md:text-base uppercase tracking-wider">
                  Need directions or assistance?
                </span>
                <a href="tel:+918521021005" className="text-[11px] text-blue-200 font-mono block hover:underline hover:text-white transition-colors">+91 85210 21005</a>
              </div>
              <a
                href="tel:+918521021005"
                className="w-12 h-12 rounded-sm bg-white text-[#0F4C81] hover:bg-[#FF8C42] hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-md cursor-pointer"
                title="Call Shop"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
