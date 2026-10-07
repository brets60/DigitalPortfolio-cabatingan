import React from 'react';
import { ArrowRight, Download, ShieldCheck, Wifi, MapPin } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { MagneticButton } from '../components/MagneticButton';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#080D16]"
    >
      {/* Subtle Moving Light / Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B82F6]/[0.07] rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#2563EB]/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-tech-grid opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Small Label with Status Indicator */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA]">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                Networking Specialist & Full-Stack Developer
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for opportunities</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]">
                digital experiences
              </span>{' '}
              that solve{' '}
              <span className="relative inline-block text-white">
                real problems
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#3B82F6]/60 rounded-full" />
              </span>
              .
            </h1>

            {/* Short Natural Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed max-w-2xl mb-8">
              I'm <strong className="text-white font-medium">John Angelo P. Cabatingan</strong>, a BSIT student and Networking Specialist who enjoys architecting secure networks, building practical web applications, and delivering dependable technology-driven solutions.
            </p>

            {/* Location & Key Discipline Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#94A3B8] mb-8 pb-6 border-b border-white/[0.06] w-full max-w-xl">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Maramag, Bukidnon, Philippines</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Torres Capitol College, Inc.</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Infrastructure & Software</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#github"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] border border-[#3B82F6]/40 shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all duration-200 group"
              >
                <GithubIcon className="w-4 h-4 mr-2 text-white" />
                <span>Explore GitHub Repos</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-[#F8FAFC] bg-[#111A28] hover:bg-[#162235] border border-white/10 hover:border-white/20 shadow-sm transition-all duration-200 group"
              >
                <Download className="w-4 h-4 mr-2 text-[#60A5FA] transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Authentic Professional Portrait & Floating Cards (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Backing Accent Frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#3B82F6]/20 via-transparent to-white/[0.05] blur-sm -z-10" />

              {/* Main Portrait Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111A28] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="John Angelo P. Cabatingan — Networking Specialist and Full-Stack Software Developer"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient at bottom of portrait for seamless card integration */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111A28] via-[#111A28]/60 to-transparent pointer-events-none" />

                  {/* Name banner overlay at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div>
                      <p className="text-sm font-bold text-white tracking-tight">
                        John Angelo P. Cabatingan
                      </p>
                      <p className="text-xs text-[#94A3B8]">
                        Full-Stack Developer & Networking Specialist
                      </p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                  </div>
                </div>
              </div>

              {/* Floating Card: "GitHub Connected" (Bottom-Left Float) */}
              <a
                href="https://github.com/brets60"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-xl bg-[#0D1420]/95 backdrop-blur-md border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.7)] animate-float-slow max-w-[240px] hover:border-[#3B82F6]/50 transition-colors"
                data-interactive="true"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider">
                    GitHub Connected
                  </span>
                </div>
                <p className="text-xs font-semibold text-white leading-snug">
                  @brets60 Repositories
                </p>
                <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#64748B]">
                  <span>Public Code & Apps</span>
                  <span className="text-[#60A5FA] font-mono">View ›</span>
                </div>
              </a>

              {/* Top-Right Floating Metric Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-xl bg-[#0D1420]/95 backdrop-blur-md border border-white/10 shadow-lg items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#60A5FA]">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-semibold text-[#94A3B8] tracking-wider">Network Status</p>
                  <p className="text-xs font-bold text-white font-mono">Gigabit • 0% Loss</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
