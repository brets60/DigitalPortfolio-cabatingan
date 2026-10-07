import React from 'react';
import { motion } from 'framer-motion';
import { timelineItems } from '../data/timeline';
import { Milestone, CheckCircle2 } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#080D16] relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Path & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Experience & Journey
          </h2>
          <p className="text-base text-[#94A3B8]">
            A chronicle of practical systems development, field infrastructure implementations, and collegiate academic progression.
          </p>
        </motion.div>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#111A28] border-2 border-[#3B82F6] group-hover:scale-125 group-hover:border-white transition-all duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] absolute inset-0 m-auto" />
              </div>

              {/* Card Container */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="p-6 sm:p-7 rounded-2xl bg-[#0D1420] border border-white/[0.06] hover:border-white/15 transition-all duration-200"
              >
                
                {/* Header Row: Year & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#60A5FA] px-2.5 py-1 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#CBD5E1] mb-4">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullets */}
                {item.bullets && (
                  <ul className="space-y-2 mb-4 border-t border-white/[0.05] pt-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#111A28] text-[#94A3B8] border border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
