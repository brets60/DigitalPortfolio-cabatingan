import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'GitHub', href: '#github' },
    { name: 'Experience', href: '#experience' },
    { name: 'How I Build', href: '#process' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'github', 'experience', 'process', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#080D16]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2.5 text-white font-bold text-xl tracking-tight"
          data-interactive="true"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg bg-[#111A28] border border-white/10 flex items-center justify-center font-mono text-sm font-semibold tracking-normal text-[#F8FAFC] group-hover:border-[#3B82F6] group-hover:text-[#60A5FA] transition-colors"
          >
            JAC
          </motion.div>
          <span className="font-semibold text-base sm:text-lg tracking-tight">
            John Cabatingan<span className="text-[#3B82F6]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#111A28]/70 border border-white/[0.06] px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3 py-1 text-xs xl:text-sm font-medium rounded-full transition-colors duration-150 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
                data-interactive="true"
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/brets60"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white bg-[#111A28] hover:bg-[#162235] border border-white/10 transition-colors"
            title="GitHub Profile @brets60"
            data-interactive="true"
          >
            <GithubIcon className="w-4 h-4" />
          </motion.a>

          {onOpenResume && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenResume}
              className="text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-white/10"
              data-interactive="true"
            >
              Resume
            </motion.button>
          )}

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] border border-[#3B82F6]/30 shadow-[0_2px_12px_rgba(37,99,235,0.25)] transition-all"
            data-interactive="true"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://github.com/brets60"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-[#94A3B8] bg-[#111A28] border border-white/10"
            title="GitHub @brets60"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white bg-[#111A28] border border-white/10"
            aria-label="Toggle menu"
            data-interactive="true"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[57px] bg-[#080D16]/98 border-b border-white/10 backdrop-blur-xl px-5 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[#111A28] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-2">
                <a
                  href="https://github.com/brets60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-white bg-[#111A28] border border-white/10 flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub @brets60</span>
                </a>
                {onOpenResume && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-[#94A3B8] bg-[#111A28] border border-white/10"
                  >
                    View Official Resume
                  </button>
                )}
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full text-center py-2.5 rounded-lg text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB]"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
