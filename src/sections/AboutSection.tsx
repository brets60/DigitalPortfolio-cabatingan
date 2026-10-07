import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, Network, ShieldCheck, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { number: '4+', label: 'Major Systems', detail: 'Capstones & Full-Stack Apps' },
    { number: '15+', label: 'Technologies Used', detail: 'Networking, Web & Hardware' },
    { number: '4+', label: 'Years Learning IT', detail: 'Collegiate & Practical Labs' },
    { number: '100%', label: 'Commitment', detail: 'Dedication to Continuous Growth' },
  ];

  const highlights = [
    {
      icon: <Network className="w-5 h-5 text-[#3B82F6]" />,
      title: "Network Infrastructure & Field Support",
      description: "Hands-on experience installing WiFi routers, access points, configuring SSIDs, running and terminating Cat6 cabling, and troubleshooting connectivity issues."
    },
    {
      icon: <Terminal className="w-5 h-5 text-[#60A5FA]" />,
      title: "Full-Stack Software Engineering",
      description: "Developing responsive web applications with Python Flask, SQLite/MySQL databases, and modern interactive frontends that solve tangible operational needs."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Hardware & IoT Systems",
      description: "Integrating microcontrollers like Arduino Uno, ESP32, and ESP32-CAM with RF wireless communication, sensor arrays, and physical warning mechanisms."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Reliability & Security Mindset",
      description: "Committed to clean documentation, standard network security practices, VLAN isolation, and proactive system maintenance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0D1420] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Personal Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A developer and networking technician grounded in practical implementation rather than empty theory.
          </p>
        </motion.div>

        {/* Main Grid: Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Natural Human-Written Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed"
          >
            <p>
              I'm passionate about turning ideas into useful software and dependable infrastructure. My background stems from academic projects, hands-on field practice, and building systems designed to tackle practical challenges head-on.
            </p>
            <p>
              As a Bachelor of Science in Information Technology student at <strong className="text-white font-medium">Torres Capitol College, Inc.</strong> in Bukidnon, Philippines, I have focused my training across two symbiotic domains: <span className="text-white font-medium">Computer Networking & Systems Administration</span> and <span className="text-white font-medium">Full-Stack Web Development</span>.
            </p>
            <p>
              Whether I am crimping Cat6 cables, architecting multi-VLAN simulations in Cisco Packet Tracer, configuring wireless access points, or writing Python Flask endpoints connected to SQLite databases, I take pride in building solutions that are robust, tidy, and genuinely helpful to end-users.
            </p>
            <div className="p-4 rounded-xl bg-[#111A28] border border-white/[0.08] text-[#CBD5E1] text-xs sm:text-sm font-mono leading-normal">
              <span className="text-[#3B82F6] font-bold">› Focus:</span> Network Administration • Hardware Diagnostics • Full-Stack Web Development • IoT Capstone Engineering
            </div>
          </motion.div>

          {/* Core Strengths (5 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="p-4 rounded-xl bg-[#111A28] border border-white/[0.06] hover:border-white/[0.15] transition-all"
                data-interactive="true"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Clean, Simple Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="pt-10 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="p-5 rounded-2xl bg-[#111A28] border border-white/[0.06] flex flex-col justify-between"
                data-interactive="true"
              >
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mb-1">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[11px] text-[#64748B]">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
