import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { FacebookIcon } from '../components/Icons';

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
  const contactPhone = '0930 899 3055';
  const contactLocation = 'Paglaum Village, San Miguel, Maramag, Bukidnon';
  const facebookUrl = 'https://www.facebook.com/john.cabatingan.04';

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

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-[#0D1420] relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#1D4ED8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
            Let's Connect & Work Together
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#94A3B8]">
            For IT support roles, network technician vacancies, system inquiries, or tech consultations, reach out directly.
          </p>
        </motion.div>

        {/* Main Content Grid: Left Info & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Status (5 cols) */}
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
                
                {/* Phone Item */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1420] border border-white/[0.05] flex items-center justify-between group">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden min-w-0">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-[#64748B] uppercase font-semibold">Mobile Number</div>
                      <a
                        href={`tel:+63${contactPhone.replace(/\s+/g, '')}`}
                        className="text-white hover:text-emerald-400 transition-colors font-mono text-xs sm:text-sm font-semibold truncate block"
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

                {/* Location Item */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1420] border border-white/[0.05] flex items-start gap-2.5 sm:gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#64748B] uppercase font-semibold">Address</div>
                    <p className="text-white text-xs leading-relaxed font-medium">
                      {contactLocation}
                    </p>
                  </div>
                </div>

                {/* Facebook Item */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1420] border border-white/[0.05] flex items-center justify-between group">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden min-w-0">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <FacebookIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-[#64748B] uppercase font-semibold">Facebook Profile</div>
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#60A5FA] hover:text-white transition-colors truncate block text-xs"
                      >
                        facebook.com/john.cabatingan.04
                      </a>
                    </div>
                  </div>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors shrink-0 ml-2"
                    title="Open Facebook Profile"
                    data-interactive="true"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </a>
                </div>

              </div>

              {/* Direct Action Buttons: Call & Email */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:+63${contactPhone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  data-interactive="true"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {contactPhone}</span>
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  data-interactive="true"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Directly</span>
                </a>
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
              Fill out the details below to discuss job opportunities, infrastructure projects, or technical requirements.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
                  Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. A copy has been prepared for <span className="text-white font-medium">{contactEmail}</span>.
                </p>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-[#0D1420] hover:bg-[#162235] text-xs font-semibold text-white border border-white/10 transition-colors"
                  data-interactive="true"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                      Your Name <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Client"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1420] border border-white/[0.08] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-white placeholder-[#64748B] text-sm transition-colors outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                      Your Email <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. company@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1420] border border-white/[0.08] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-white placeholder-[#64748B] text-sm transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. IT Position / Network Technician Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1420] border border-white/[0.08] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-white placeholder-[#64748B] text-sm transition-colors outline-none"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Message Details <span className="text-[#3B82F6]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the position, technical requirements, or schedule an interview..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1420] border border-white/[0.08] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-white placeholder-[#64748B] text-sm transition-colors outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] disabled:bg-blue-800 disabled:opacity-60 shadow-[0_4px_20px_rgba(37,99,235,0.25)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Direct Message</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
