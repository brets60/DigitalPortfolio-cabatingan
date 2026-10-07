import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Award } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0D1420] border border-white/10 rounded-2xl shadow-2xl text-[#F8FAFC] p-6 sm:p-8 md:p-10 my-8 transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#111A28] border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/30 transition-colors z-10"
          aria-label="Close modal"
          data-interactive="true"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Header Info */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/20">
              {project.category}
            </span>
            <span className="text-xs text-[#94A3B8]">• Case Study</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-medium leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 my-6 pb-6 border-b border-white/[0.08]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-[#111A28] hover:bg-[#162235] text-white border border-white/10 transition-colors"
              data-interactive="true"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-[#1D4ED8] hover:bg-[#2563EB] text-white shadow-sm transition-colors"
              data-interactive="true"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
          <span className="text-xs text-[#94A3B8] ml-auto">
            Architected & Built by John Angelo P. Cabatingan
          </span>
        </div>

        {/* Modal Body Grid */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
          {/* Overview */}
          <section>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#3B82F6] rounded-full inline-block"></span>
              Project Overview
            </h3>
            <p className="text-[#CBD5E1]">{project.overview}</p>
          </section>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-[#111A28]/80 border border-red-500/15">
              <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111A28]/80 border border-blue-500/20">
              <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The Solution
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <section>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#3B82F6] rounded-full inline-block"></span>
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111A28] border border-white/[0.05] text-xs sm:text-sm text-[#CBD5E1]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technology Stack Breakdown */}
          <section>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#3B82F6]" />
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.techStackDetails.map((stack, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#111A28] border border-white/[0.06]">
                  <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded bg-white/[0.05] text-[#94A3B8] border border-white/[0.04]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* My Contribution */}
          <section className="p-5 rounded-xl bg-[#111A28] border border-blue-500/20">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#60A5FA] rounded-full inline-block"></span>
              My Contribution
            </h3>
            <ul className="space-y-2">
              {project.myContribution.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  <span className="text-[#3B82F6] font-mono font-bold">›</span>
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Challenges */}
          <section>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Technical Challenges Overcome
            </h3>
            <div className="space-y-2">
              {project.challenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#111A28] border border-white/[0.06] text-xs sm:text-sm text-[#94A3B8]"
                >
                  <strong className="text-white block mb-0.5">Challenge {idx + 1}:</strong>
                  {ch}
                </div>
              ))}
            </div>
          </section>

          {/* Result & Impact */}
          <section className="p-5 rounded-xl bg-gradient-to-br from-[#111A28] to-[#162235] border border-emerald-500/20">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              Result & Impact
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              {project.result}
            </p>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[#111A28] hover:bg-[#162235] border border-white/10 transition-colors"
            data-interactive="true"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
