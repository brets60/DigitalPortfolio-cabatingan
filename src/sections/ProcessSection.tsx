import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, PenTool, Code2, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      subtitle: "Clarify Requirements & Constraints",
      description: "Thoroughly analyze the underlying problem, operational pain points, and technical requirements before writing code or pulling cables.",
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />
    },
    {
      number: "02",
      title: "Plan",
      subtitle: "Architecture & Schematics",
      description: "Design the network topology, relational database schema, user journeys, and component architecture to ensure scalable foundations.",
      icon: <PenTool className="w-5 h-5 text-blue-400" />
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Implementation & Integration",
      description: "Develop the frontend interfaces, robust backend APIs, microcontroller firmware, and clean switch/router configurations with best practices.",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />
    },
    {
      number: "04",
      title: "Improve",
      subtitle: "Testing, Hardening & Refinement",
      description: "Perform packet loss checks, stress test database queries, fix edge-case bugs, optimize responsiveness, and prepare clean documentation.",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0D1420] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            How I Build
          </h2>
          <p className="text-base text-[#94A3B8]">
            A disciplined, iterative engineering process applied to every software application and network infrastructure project.
          </p>
        </motion.div>

        {/* 4 Steps: Horizontal Layout on Desktop, Vertical on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -6,
                borderColor: 'rgba(59, 130, 246, 0.4)',
                transition: { duration: 0.2 },
              }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#111A28] border border-white/[0.06] transition-all flex flex-col justify-between"
              data-interactive="true"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-extrabold text-[#60A5FA]">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-[#60A5FA] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Phase {step.number}</span>
                <span className="font-mono text-[#3B82F6]">verified ›</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
