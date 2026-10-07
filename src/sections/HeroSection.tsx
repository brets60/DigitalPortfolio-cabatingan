import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, Wifi, MapPin } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#080D16]"
    >
      {/* Subtle Moving Light / Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.06, 0.1, 0.06],
            x: ['-50%', '-48%', '-50%'],
            y: ['-50%', '-52%', '-50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/2 w-[650px] h-[400px] bg-[#3B82F6] rounded-full blur-[140px]"
        />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#2563EB]/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-tech-grid opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            
            {/* Small Label with Status Indicator */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA]">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                Networking Specialist & Full-Stack Developer
              </span>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for opportunities</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-5 sm:mb-6"
            >
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]">
                digital experiences
              </span>{' '}
              that solve{' '}
              <span className="relative inline-block text-white">
                real problems
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                  className="absolute bottom-1 left-0 h-[3px] bg-[#3B82F6]/70 rounded-full"
                />
              </span>
              .
            </motion.h1>

            {/* Short Natural Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-[#94A3B8] font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8"
            >
              I'm <strong className="text-white font-medium">John Angelo P. Cabatingan</strong>, a BSIT student and Networking Specialist who enjoys architecting secure networks, building practical web applications, and delivering dependable technology-driven solutions.
            </motion.p>

            {/* Location & Key Discipline Badge (Self-contained clean pills on mobile) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#94A3B8] mb-7 sm:mb-8 pb-5 sm:pb-6 border-b border-white/[0.06] w-full max-w-xl"
            >
              <div className="px-2.5 py-1 rounded-md bg-[#111A28] border border-white/[0.05] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Maramag, Bukidnon</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-[#111A28] border border-white/[0.05] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Torres Capitol College</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-[#111A28] border border-white/[0.05] flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Networking & Software</span>
              </div>
            </motion.div>

            {/* Action Buttons: Full width stack on mobile, horizontal on tablet/desktop */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <MagneticButton
                href="#journey"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] border border-[#3B82F6]/40 shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all duration-200 group flex items-center justify-center"
              >
                <span>Explore Journey & Work</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F8FAFC] bg-[#111A28] hover:bg-[#162235] border border-white/10 hover:border-white/20 shadow-sm transition-all duration-200 group flex items-center justify-center"
              >
                <Download className="w-4 h-4 mr-2 text-[#60A5FA] transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Authentic Professional Portrait (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-2 lg:mt-0">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto lg:mx-0"
            >
              
              {/* Backing Accent Frame with Ambient Breathing */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#3B82F6]/25 via-transparent to-white/[0.08] blur-sm -z-10"
              />

              {/* Main Portrait Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111A28] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="John Angelo P. Cabatingan — Networking Specialist and Full-Stack Software Developer"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient at bottom of portrait */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111A28] via-[#111A28]/60 to-transparent pointer-events-none" />

                  {/* Name banner overlay at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-tight">
                        John Angelo P. Cabatingan
                      </p>
                      <p className="text-[10px] sm:text-xs text-[#94A3B8]">
                        Full-Stack Developer & Networking Specialist
                      </p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
