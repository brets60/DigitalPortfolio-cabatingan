import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, FacebookIcon, LinkedinIcon } from '../components/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080D16] border-t border-white/[0.08] py-12 text-[#94A3B8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#111A28] border border-white/10 flex items-center justify-center font-mono font-bold text-white text-xs">
              JAC
            </div>
            <div>
              <p className="font-bold text-white tracking-tight">
                John Angelo P. Cabatingan
              </p>
              <p className="text-[11px] text-[#64748B]">
                Networking Specialist & Full-Stack Software Developer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/johncabatingan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111A28] hover:bg-[#162235] text-[#94A3B8] hover:text-white border border-white/[0.06] transition-colors"
              aria-label="GitHub"
              data-interactive="true"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/john.cabatingan.04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111A28] hover:bg-[#162235] text-[#94A3B8] hover:text-white border border-white/[0.06] transition-colors"
              aria-label="Facebook"
              data-interactive="true"
            >
              <FacebookIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href="https://linkedin.com/in/john-angelo-cabatingan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111A28] hover:bg-[#162235] text-[#94A3B8] hover:text-white border border-white/[0.06] transition-colors"
              aria-label="LinkedIn"
              data-interactive="true"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111A28] hover:bg-[#162235] text-white border border-white/10 transition-colors text-xs font-medium"
            data-interactive="true"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-[#64748B]">
          <p>
            Designed & developed by <span className="text-white font-medium">John Angelo P. Cabatingan</span>
          </p>
          <p>
            © {new Date().getFullYear()} John Angelo P. Cabatingan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
