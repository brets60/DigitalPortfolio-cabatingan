import React from 'react';
import { motion } from 'framer-motion';
import { githubRepos } from '../data/githubRepos';
import { ArrowRight, Code2, FolderGit2 } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="repositories" className="py-16 sm:py-20 md:py-28 bg-[#0D1420] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Repositories & Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
              Repositories & Source Code
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#94A3B8]">
              Software systems, technical logic, and private architecture repositories.
            </p>
          </div>

          {/* Direct CTA Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#111A28] hover:bg-[#162235] text-white border border-white/10 hover:border-[#3B82F6]/50 shadow-sm transition-all duration-200 text-xs font-semibold shrink-0"
            data-interactive="true"
          >
            <span>Inquire for Code Access</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#60A5FA]" />
          </a>
        </motion.div>

        {/* Repositories Display: Empty State when no repos are published */}
        {githubRepos.length === 0 ? (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl bg-[#111A28] border border-white/[0.08] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-[0_4px_25px_rgba(0,0,0,0.25)]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0D1420] border border-white/10 flex items-center justify-center mx-auto mb-5 text-[#60A5FA]">
              <FolderGit2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
              Public Repositories Currently Empty
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-lg mx-auto mb-6">
              Source codes and project repositories are currently maintained in private development environments or undergoing scheduled refactoring. System walkthroughs, database schemas, and technical code reviews are available upon direct request.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#2563EB] text-white text-xs font-semibold shadow-md transition-all"
                data-interactive="true"
              >
                <span>Request Codebase Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#journey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D1420] hover:bg-[#162235] text-[#CBD5E1] border border-white/[0.08] text-xs font-medium transition-all"
                data-interactive="true"
              >
                <span>View Project Milestones</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {/* If any repos exist, map here */}
          </motion.div>
        )}

      </div>
    </section>
  );
};
