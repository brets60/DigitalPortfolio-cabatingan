import React from 'react';
import { motion } from 'framer-motion';
import { githubRepos, githubProfile } from '../data/githubRepos';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const GitHubSection: React.FC = () => {
  const getLanguageColor = (lang: string) => {
    if (lang.includes('TypeScript')) return 'bg-blue-400';
    if (lang.includes('Python')) return 'bg-emerald-400';
    if (lang.includes('HTML')) return 'bg-orange-400';
    return 'bg-purple-400';
  };

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
    <section id="github" className="py-16 sm:py-20 md:py-28 bg-[#0D1420] relative border-t border-white/[0.06] overflow-hidden">
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
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Connected • @brets60</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
              Repositories & Source Code
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#94A3B8]">
              Public systems, operations platforms, management tools, and portfolio source code actively maintained on GitHub.
            </p>
          </div>

          {/* Direct Profile CTA Button: full width on phone, auto on tablet/desktop */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#111A28] hover:bg-[#162235] text-white border border-white/10 hover:border-[#3B82F6]/50 shadow-sm transition-all duration-200 text-xs font-semibold shrink-0"
            data-interactive="true"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>Visit @brets60 on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#60A5FA]" />
          </motion.a>
        </motion.div>

        {/* Repositories Grid with Staggered Reveal and Mobile Word-break Safe */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {githubRepos.map((repo, idx) => (
            <motion.a
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -5,
                borderColor: 'rgba(59, 130, 246, 0.4)',
                transition: { duration: 0.2 },
              }}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 sm:p-6 rounded-2xl bg-[#111A28] border border-white/[0.07] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden"
              data-interactive="true"
            >
              <div>
                {/* Header: Repo Tag & External Link Icon */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/20">
                    {repo.tag}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/[0.03] text-[#94A3B8] group-hover:text-white group-hover:bg-[#3B82F6]/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Repo Name: break-words so long repository slugs never overflow on phone */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors mb-2 font-mono break-all sm:break-normal line-clamp-2">
                  {repo.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5 sm:mb-6 line-clamp-3">
                  {repo.description}
                </p>
              </div>

              {/* Footer: Language and Direct Link */}
              <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                  <span className="text-[#CBD5E1] font-mono text-[11px]">{repo.language}</span>
                </div>

                <span className="text-[11px] font-medium text-[#64748B] group-hover:text-[#60A5FA] transition-colors font-mono">
                  View Repo ›
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Profile Banner Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-12 p-5 sm:p-7 rounded-2xl bg-[#111A28] border border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0D1420] border border-white/10 flex items-center justify-center text-white shrink-0">
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                github.com/brets60
              </h4>
              <p className="text-[11px] sm:text-xs text-[#94A3B8] line-clamp-1">
                Explore full source codes, commits, issue trackers, and collaborative projects.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] shadow-md transition-colors shrink-0 text-center"
            data-interactive="true"
          >
            Browse All Repositories
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
