import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { educationData } from '../data/education';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0D1420] border border-white/10 rounded-2xl shadow-2xl text-[#F8FAFC] p-6 sm:p-10 my-6 print:p-0 print:m-0 print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar (hidden during print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
              Verified Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#111A28] hover:bg-[#162235] text-white border border-white/10 transition-colors"
              title="Print or Save PDF"
              data-interactive="true"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#111A28] border border-white/10 text-[#94A3B8] hover:text-white transition-colors"
              aria-label="Close"
              data-interactive="true"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-6 text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
              John Angelo P. Cabatingan
            </h1>
            <p className="text-sm font-semibold text-[#60A5FA] mb-3">
              Networking Specialist & Full-Stack Software Developer | BSIT
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>+63 930 899 3055</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>johnangelocabatingan65@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Paglaum Village, San Miguel, Maramag, Bukidnon</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-[#3B82F6]" />
                <a
                  href="https://www.facebook.com/john.cabatingan.04"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  facebook.com/john.cabatingan.04
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-[#CBD5E1]">
              Dedicated Bachelor of Science in Information Technology student and aspiring Networking Specialist seeking an entry-level IT position where I can apply my comprehensive training in computer networking, systems administration, database management, hardware maintenance, web development, and cybersecurity fundamentals. Fully committed to proactive infrastructure maintenance, reliable technical support, and continuous professional growth.
            </p>
          </div>

          {/* Practical Professional & Field Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
              Technical & Field Experience
            </h2>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05]">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-white text-xs sm:text-sm">
                    Network Technician & IT Systems Field Support
                  </h3>
                  <span className="text-xs text-[#94A3B8] font-mono">2025 – 2026</span>
                </div>
                <p className="text-xs text-[#94A3B8] mb-2">
                  Local Deployments & Practical Infrastructure Support • Bukidnon, PH
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#CBD5E1]">
                  <li>Installed, configured, and optimized WiFi routers, access points, and network switches for homes and small business environments.</li>
                  <li>Ran, routed, and terminated Cat5e/Cat6 ethernet cables, verified continuity with cable testers, and ensured clean, safe rack layout.</li>
                  <li>Diagnosed broadband connectivity, signal strength, latency, and packet loss issues.</li>
                  <li>Delivered hardware and software support: workstation setup, OS installations, driver configuration, and peripheral troubleshooting.</li>
                  <li>Guided non-technical users on network passwords, device connectivity, and simple security best practices.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05]">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-white text-xs sm:text-sm">
                    Hardware, Network & Software Integration Lead
                  </h3>
                  <span className="text-xs text-[#94A3B8] font-mono">2026</span>
                </div>
                <p className="text-xs text-[#94A3B8] mb-2">
                  Speed Detection & Pedestrian Warning System Capstone
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#CBD5E1]">
                  <li>Engineered Arduino velocity calculations and integrated 433MHz RF wireless signals triggering pedestrian alarm pillars.</li>
                  <li>Configured ESP32-CAM module to automatically capture overspeeding vehicle snapshots.</li>
                  <li>Implemented Python desktop serial listener storing violation logs and vehicle timestamps into SQLite.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills Breakdown */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#111A28] border border-white/[0.05]">
                <h4 className="font-semibold text-white mb-1">Networking & Hardware</h4>
                <p className="text-[#94A3B8]">
                  WiFi Router/AP Setup, Cat6 Structured Cabling, Cisco Packet Tracer, Subnetting (VLSM), VLANs, Computer Hardware Diagnostics, Component Replacement, Active Directory Basics.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#111A28] border border-white/[0.05]">
                <h4 className="font-semibold text-white mb-1">Software & Web Development</h4>
                <p className="text-[#94A3B8]">
                  Python, Flask, HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, SQLite, MySQL, REST APIs, Git, VS Code.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-[#111A28] border border-white/[0.05] flex justify-between">
                <div>
                  <h4 className="font-semibold text-white">
                    Bachelor of Science in Information Technology (BSIT)
                  </h4>
                  <p className="text-[#94A3B8]">Torres Capitol College, Inc. — Maramag, Bukidnon</p>
                </div>
                <span className="text-[#60A5FA] font-mono">2023 – 2027</span>
              </div>
              <div className="p-3 rounded-lg bg-[#111A28] border border-white/[0.05] flex justify-between">
                <div>
                  <h4 className="font-semibold text-white">Secondary Education</h4>
                  <p className="text-[#94A3B8]">San Miguel National High School — Maramag, Bukidnon</p>
                </div>
                <span className="text-[#94A3B8] font-mono">Graduated 2023</span>
              </div>
            </div>
          </div>

          {/* Academic References */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
              Academic References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {educationData.references.map((ref, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#111A28] border border-white/[0.05]">
                  <h4 className="font-semibold text-white">{ref.name}</h4>
                  <p className="text-[#60A5FA]">{ref.title}</p>
                  <p className="text-[#94A3B8]">{ref.institution}</p>
                  <p className="text-[#64748B] text-[11px]">{ref.location}</p>
                  {ref.contact && (
                    <p className="text-white/80 font-mono text-[11px] mt-1">{ref.contact}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
