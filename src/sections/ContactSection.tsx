import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, FacebookIcon, LinkedinIcon } from '../components/Icons';
import { MagneticButton } from '../components/MagneticButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactEmail = 'johnangelocabatingan65@gmail.com';
  const contactPhone = '+63 930 899 3055';
  const contactLocation = 'Paglaum Village, San Miguel, Maramag, Bukidnon, Philippines';

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#10B981'],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 600);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry / Project Opportunity');
    const body = encodeURIComponent(
      `Hello John,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-[#0D1420] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
            Have an idea in mind?
          </h2>
          <p className="text-sm sm:text-lg text-[#94A3B8]">
            Let's turn it into something useful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Links (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 w-full"
          >
            <div className="p-5 sm:p-7 rounded-2xl bg-[#111A28] border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <h3 className="text-sm sm:text-base font-bold text-white mb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                {/* Email Item */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1420] border border-white/[0.05] flex items-center justify-between group">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden min-w-0">
                    <div className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#60A5FA] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-[#64748B] uppercase font-semibold">Email Address</div>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-white hover:text-[#60A5FA] transition-colors truncate block font-mono text-[11px] sm:text-xs"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(contactEmail, 'email')}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy email address"
                    data-interactive="true"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </motion.button>
                </div>

                {/* Phone Item */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1420] border border-white/[0.05] flex items-center justify-between group">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#64748B] uppercase font-semibold">Phone / Mobile</div>
                      <a
                        href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                        className="text-white hover:text-emerald-400 transition-colors font-mono text-xs"
                      >
                        {contactPhone}
                      </a>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(contactPhone, 'phone')}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy phone number"
                    data-interactive="true"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </motion.button>
                </div>

                {/* Location Item */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1420] border border-white/[0.05] flex items-start gap-2.5 sm:gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#64748B] uppercase font-semibold">Location</div>
                    <p className="text-white text-xs leading-relaxed">
                      {contactLocation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons: stack on mobile */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={`mailto:${contactEmail}`}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] transition-colors"
                  data-interactive="true"
                >
                  Email Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact-form"
                  className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-[#0D1420] hover:bg-[#162235] border border-white/10 transition-colors"
                  data-interactive="true"
                >
                  Let's Work Together
                </motion.a>
              </div>
            </div>

            {/* Social Connectivity */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111A28] border border-white/[0.08]">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                Social Profiles & Networks
              </h4>
              <div className="flex flex-wrap gap-2">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/brets60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0D1420] hover:bg-[#162235] text-xs font-medium text-white border border-white/[0.06] transition-colors"
                  data-interactive="true"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub @brets60</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.facebook.com/john.cabatingan.04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0D1420] hover:bg-[#162235] text-xs font-medium text-white border border-white/[0.06] transition-colors"
                  data-interactive="true"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://linkedin.com/in/john-angelo-cabatingan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0D1420] hover:bg-[#162235] text-xs font-medium text-white border border-white/[0.06] transition-colors"
                  data-interactive="true"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            id="contact-form"
            className="lg:col-span-7 p-5 sm:p-7 md:p-8 rounded-2xl bg-[#111A28] border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3)] w-full"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mb-5 sm:mb-6">
              Whether you have a job vacancy, network setup inquiry, project collaboration, or question, feel free to drop a line.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 sm:p-8 rounded-xl bg-[#0D1420] border border-emerald-500/30 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">Message Prepared!</h4>
                <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your message is recorded. You can also open your email client to send it directly to John Angelo.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3">
                  <button
                    onClick={handleOpenMailto}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] shadow-sm"
                  >
                    Open in Default Mail Client
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium text-[#94A3B8] hover:text-white bg-[#111A28] border border-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      Your Name <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maria Santos"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0D1420] border border-white/10 text-white placeholder-[#64748B] text-sm focus:border-[#3B82F6] focus:outline-none transition-colors"
                      data-interactive="true"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      Your Email <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="maria@example.com"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0D1420] border border-white/10 text-white placeholder-[#64748B] text-sm focus:border-[#3B82F6] focus:outline-none transition-colors"
                      data-interactive="true"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. IT Specialist Role / Project Consultation"
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0D1420] border border-white/10 text-white placeholder-[#64748B] text-sm focus:border-[#3B82F6] focus:outline-none transition-colors"
                    data-interactive="true"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-1">
                    Message <span className="text-[#3B82F6]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello John, I came across your portfolio and wanted to discuss..."
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0D1420] border border-white/10 text-white placeholder-[#64748B] text-sm focus:border-[#3B82F6] focus:outline-none transition-colors resize-none"
                    data-interactive="true"
                  />
                </div>

                <div className="pt-2">
                  <MagneticButton
                    className="w-full py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] border border-[#3B82F6]/30 shadow-[0_4px_16px_rgba(37,99,235,0.25)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
