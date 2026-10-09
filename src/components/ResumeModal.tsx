import React, { useState, useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, FileText, UserCheck } from 'lucide-react';
import { educationData, secondaryEducation, elementaryEducation, applicationLetterData } from '../data/education';
import { FacebookIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'resume' | 'letter'>('resume');

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
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0D1420] border border-white/10 rounded-2xl shadow-2xl text-[#F8FAFC] p-6 sm:p-10 my-6 print:p-0 print:m-0 print:bg-white print:text-black print:max-w-none print:shadow-none print:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar & Tab Switcher (hidden during print) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-white/[0.08] gap-4 print:hidden">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#111A28] border border-white/[0.08] self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('resume')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'resume'
                  ? 'bg-[#1D4ED8] text-white shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
              data-interactive="true"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>
            <button
              onClick={() => setActiveTab('letter')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'letter'
                  ? 'bg-[#1D4ED8] text-white shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
              data-interactive="true"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Application Letter</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
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

        {/* ================= TAB 1: CURRICULUM VITAE / RESUME ================= */}
        {activeTab === 'resume' && (
          <div className="space-y-6 text-sm leading-relaxed">
            {/* Header: Photo + Contact Info */}
            <div className="border-b border-white/[0.08] pb-6 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                  John Angelo P. Cabatingan
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#60A5FA] mb-3">
                  IT Support Staff • Network Technician • Systems Administrator | BSIT
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                    <a href="tel:+639308993055" className="hover:text-white transition-colors font-mono">
                      0930 899 3055
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                    <a href="mailto:johnangelocabatingan65@gmail.com" className="hover:text-white transition-colors font-mono truncate">
                      johnangelocabatingan65@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <MapPin className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                    <span>Paglaum Village, San Miguel, Maramag, Bukidnon</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <FacebookIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <a
                      href="https://www.facebook.com/john.cabatingan.04"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition-colors flex items-center gap-1 text-xs"
                    >
                      <span>facebook.com/john.cabatingan.04</span>
                      <ExternalLink className="w-3 h-3 text-[#60A5FA]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 2x2 Formal ID Portrait */}
              <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden bg-[#111A28] border-2 border-white/10 shrink-0 shadow-md">
                <img
                  src="/docx_profile.jpg"
                  alt="John Angelo P. Cabatingan formal portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
                Objective
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05]">
                Dedicated Bachelor of Science in Information Technology graduate seeking an entry-level IT position where I can apply my comprehensive training in programming, database management, networking, web development, systems administration, and cybersecurity. Eager to contribute to organizational efficiency, support digital transformation, and deliver reliable technical solutions while continuing to grow professionally.
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
                Professional Experience
              </h2>
              <div className="p-4 rounded-xl bg-[#111A28] border border-white/[0.05]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white text-xs sm:text-sm">
                    Network Technician & IT Field Support Specialist
                  </h3>
                  <span className="text-xs text-[#60A5FA] font-mono">Practical Experience</span>
                </div>
                <ul className="space-y-2 text-xs text-[#CBD5E1]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span>Install, configure, and set up WiFi routers, access points, and network devices for homes and offices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span>Run and arrange network cables, connect devices properly, and ensure clean, safe wiring layouts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span>Test internet connectivity, check signal strength, and troubleshoot weak or no connection issues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span>Assist with basic technical support: computer setup, software installation, printer configuration, and system checks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span>Guide users on devices to WiFi, changing passwords, and simple network maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span>Organize work records, log installation details, and complete all assigned tasks on schedule.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
                Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05]">
                  <h4 className="font-semibold text-white mb-1.5 text-xs text-[#60A5FA]">
                    Hard Skills
                  </h4>
                  <ul className="space-y-1 text-[#CBD5E1]">
                    <li>• Computer Troubleshooting & Diagnostics</li>
                    <li>• WiFi Router & Access Point Configuration</li>
                    <li>• Cat5e / Cat6 Structured Cabling & Termination</li>
                    <li>• Workstation Setup & Peripheral Maintenance</li>
                    <li>• Cisco Packet Tracer, Subnetting (VLSM) & VLANs</li>
                    <li>• Database Management & Python Programming</li>
                  </ul>
                </div>
                <div className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05]">
                  <h4 className="font-semibold text-white mb-1.5 text-xs text-[#10B981]">
                    Soft Skills
                  </h4>
                  <ul className="space-y-1 text-[#CBD5E1]">
                    <li>• WiFi Installation & User Guidance</li>
                    <li>• Clear & Patient End-User Support</li>
                    <li>• Attention to Detail & Safe Cable Management</li>
                    <li>• Technical Problem-Solving Mindset</li>
                    <li>• Work Documentation & Installation Logging</li>
                    <li>• Punctual & Organized Task Execution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
                Education
              </h2>
              <div className="space-y-2.5 text-xs">
                {/* Tertiary */}
                <div className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-[10px] font-semibold text-[#60A5FA] uppercase tracking-wider block">Tertiary</span>
                    <h4 className="font-semibold text-white">
                      Torres Capitol College, Inc.
                    </h4>
                    <p className="text-[#94A3B8]">
                      Bachelor of Science in Information Technology • Maramag, Bukidnon
                    </p>
                  </div>
                  <span className="text-[#60A5FA] font-mono text-xs shrink-0">Year: 2027</span>
                </div>

                {/* Secondary */}
                <div className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider block">Secondary</span>
                    <h4 className="font-semibold text-white">{secondaryEducation.school}</h4>
                    <p className="text-[#94A3B8]">{secondaryEducation.location}</p>
                  </div>
                  <span className="text-[#94A3B8] font-mono text-xs shrink-0">Year Graduated: 2023</span>
                </div>

                {/* Elementary */}
                <div className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider block">Elementary</span>
                    <h4 className="font-semibold text-white">{elementaryEducation.school}</h4>
                    <p className="text-[#94A3B8]">{elementaryEducation.location}</p>
                  </div>
                  <span className="text-[#94A3B8] font-mono text-xs shrink-0">Year Graduated: 2017</span>
                </div>
              </div>
            </div>

            {/* References */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2">
                References
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {educationData.references.map((ref, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#111A28] border border-white/[0.05]">
                    <h4 className="font-bold text-white uppercase tracking-wide">{ref.name}</h4>
                    <p className="text-[#60A5FA] font-medium">{ref.title}</p>
                    <p className="text-[#94A3B8]">{ref.institution}</p>
                    <p className="text-[#64748B] text-[11px]">{ref.location}</p>
                    {ref.contact && (
                      <p className="text-white/90 font-mono text-[11px] mt-2 pt-2 border-t border-white/[0.05]">
                        Contact: {ref.contact}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: OFFICIAL APPLICATION LETTER ================= */}
        {activeTab === 'letter' && (
          <div className="space-y-6 text-sm leading-relaxed p-4 sm:p-6 rounded-2xl bg-[#111A28]/50 border border-white/[0.06] font-sans">
            {/* Letter Date */}
            <div className="text-xs text-[#94A3B8] font-mono">
              {applicationLetterData.date}
            </div>

            {/* Recipient Block */}
            <div className="space-y-1 text-xs sm:text-sm">
              <p className="font-bold text-white tracking-wide uppercase">
                {applicationLetterData.recipientName}
              </p>
              <p className="text-[#60A5FA] font-semibold">
                {applicationLetterData.recipientTitle}
              </p>
              <p className="text-[#CBD5E1]">
                {applicationLetterData.institution}
              </p>
              <p className="text-[#94A3B8]">
                {applicationLetterData.location}
              </p>
            </div>

            {/* Salutation */}
            <div className="pt-2 text-white font-semibold text-xs sm:text-sm">
              Dear Sir/Madam,
            </div>

            {/* Letter Body Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[#CBD5E1] text-justify leading-relaxed">
              {applicationLetterData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Sign-off Block */}
            <div className="pt-6 space-y-1 text-xs sm:text-sm">
              <p className="text-[#94A3B8]">Respectfully,</p>
              <div className="pt-6">
                <p className="font-bold text-white text-base">
                  {applicationLetterData.applicantName}
                </p>
                <p className="text-[#60A5FA] text-xs">
                  {applicationLetterData.applicantRole}
                </p>
              </div>

              {/* Applicant Contact Strip */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span className="font-mono">{applicationLetterData.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span className="font-mono">{applicationLetterData.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>{applicationLetterData.address}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
