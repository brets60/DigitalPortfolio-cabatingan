import React from 'react';
import { motion } from 'framer-motion';
import { educationData, secondaryEducation, elementaryEducation } from '../data/education';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-28 bg-[#080D16] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 sm:mb-4">
            Education
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#94A3B8]">
            Formal collegiate and secondary foundational training in Information Technology and computer systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Main Tertiary Degree Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className="lg:col-span-7 p-5 sm:p-7 md:p-8 rounded-2xl bg-[#0D1420] border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/20">
                Tertiary Education
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">
                {educationData.period}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
              {educationData.degree}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#60A5FA] mb-1">
              {educationData.institution}
            </p>
            <p className="text-xs text-[#94A3B8] mb-5 sm:mb-6">
              {educationData.location} • <span className="text-emerald-400">{educationData.status}</span>
            </p>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5 sm:mb-6">
              {educationData.description}
            </p>

            {/* Core Coursework Highlights */}
            <div className="border-t border-white/[0.06] pt-4 sm:pt-5">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#3B82F6]" />
                Key Academic Curriculum & Labs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {educationData.coursework.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Secondary Education & Faculty References (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Secondary Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0D1420] border border-white/[0.08]"
            >
              <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-white/[0.05] text-[#94A3B8]">
                  Secondary
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  {secondaryEducation.year}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                {secondaryEducation.school}
              </h4>
              <p className="text-xs text-[#94A3B8] mb-1.5">{secondaryEducation.location}</p>
              <p className="text-xs text-[#64748B]">{secondaryEducation.track}</p>
            </motion.div>

            {/* Elementary Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0D1420] border border-white/[0.08]"
            >
              <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-white/[0.05] text-[#94A3B8]">
                  Elementary
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  {elementaryEducation.year}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                {elementaryEducation.school}
              </h4>
              <p className="text-xs text-[#94A3B8]">{elementaryEducation.location}</p>
            </motion.div>

            {/* Academic Faculty References */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0D1420] border border-white/[0.08]"
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Users className="w-4 h-4 text-[#3B82F6]" />
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                  Academic References & Mentors
                </h4>
              </div>

              <div className="space-y-3">
                {educationData.references.map((ref, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3, transition: { duration: 0.15 } }}
                    className="p-3 sm:p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05] text-xs"
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-white text-xs">{ref.name}</p>
                      <span className="text-[10px] text-[#60A5FA] font-medium">{ref.title}</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5">{ref.institution}</p>
                    <p className="text-[10px] text-[#64748B]">{ref.location}</p>
                    {ref.contact && (
                      <p className="text-[11px] text-white/70 font-mono mt-1 pt-1 border-t border-white/[0.04]">
                        {ref.contact}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
