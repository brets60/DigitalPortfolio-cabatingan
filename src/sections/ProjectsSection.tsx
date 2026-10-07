import React from 'react';
import type { Project } from '../types';
import { projects } from '../data/projects';
import { ArrowRight, Eye, Radio, Sparkles, Network, Calendar, Shirt } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {

  // Custom high-fidelity illustrations/mockups for each project
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'speed-detection-system':
        return (
          <div className="w-full h-full bg-[#0a111e] p-5 flex flex-col justify-between font-mono select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-30" />
            
            <div className="relative flex items-center justify-between text-xs border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white font-semibold">SPEED SENSOR NODE 01</span>
              </div>
              <span className="text-[#60A5FA] bg-[#3B82F6]/10 px-2 py-0.5 rounded text-[11px] border border-[#3B82F6]/20">
                RF 433MHz LINK OK
              </span>
            </div>

            <div className="relative my-4 grid grid-cols-2 gap-3 items-center">
              <div className="p-4 rounded-xl bg-[#111A28] border border-red-500/30">
                <div className="text-[10px] text-[#94A3B8] uppercase">Vehicle Velocity</div>
                <div className="text-3xl font-extrabold text-red-400 mt-1">
                  48.6 <span className="text-sm font-normal text-white">km/h</span>
                </div>
                <div className="text-[10px] text-red-300 mt-1 flex items-center gap-1">
                  <span>THRESHOLD: 30 km/h</span> • <span>EXCEEDED</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111A28] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#94A3B8] uppercase">Warning Relay</div>
                  <div className="text-xs font-bold text-amber-400 mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    SIREN + STROBE ACTIVE
                  </div>
                </div>
                <div className="text-[10px] text-[#64748B] mt-2">
                  ESP32-CAM: Snapshot #1049 Logged
                </div>
              </div>
            </div>

            <div className="relative p-2 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] text-[#94A3B8] flex items-center justify-between">
              <span className="text-[#3B82F6]">sqlite3 &gt; INSERT INTO violations ...</span>
              <span className="text-emerald-400">STATUS: SAVED</span>
            </div>
          </div>
        );

      case 'laundry-management-system':
        return (
          <div className="w-full h-full bg-[#0a111e] p-5 flex flex-col justify-between font-sans select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-25" />
            
            <div className="relative flex items-center justify-between text-xs border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Shirt className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-white font-semibold">LAUNDRY OPERATIONS PIPELINE</span>
              </div>
              <span className="text-emerald-400 text-[11px] font-mono">14 Orders In Progress</span>
            </div>

            <div className="relative my-3 grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-[#111A28] border border-white/[0.08]">
                <div className="text-[10px] font-semibold text-[#94A3B8] uppercase mb-1">Pickups</div>
                <div className="p-1.5 rounded bg-white/[0.03] text-[11px] text-white font-medium border border-white/[0.04]">
                  #L-409 • 8.5 kg
                  <div className="text-[9px] text-[#64748B]">Rider En Route</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#111A28] border border-blue-500/30">
                <div className="text-[10px] font-semibold text-[#60A5FA] uppercase mb-1">Washing</div>
                <div className="p-1.5 rounded bg-[#3B82F6]/10 text-[11px] text-blue-200 font-medium border border-[#3B82F6]/20">
                  #L-408 • Premium
                  <div className="text-[9px] text-blue-300">Cycle: 24 mins left</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#111A28] border border-emerald-500/20">
                <div className="text-[10px] font-semibold text-emerald-400 uppercase mb-1">Out For Delivery</div>
                <div className="p-1.5 rounded bg-white/[0.03] text-[11px] text-white font-medium border border-white/[0.04]">
                  #L-405 • Paid
                  <div className="text-[9px] text-emerald-300">San Miguel Route</div>
                </div>
              </div>
            </div>

            <div className="relative p-2 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] text-[#94A3B8] flex items-center justify-between">
              <span>Flask API / Orders Gateway</span>
              <span className="text-[#60A5FA] font-mono">Daily Gross: ₱12,450.00</span>
            </div>
          </div>
        );

      case 'breta-ai':
        return (
          <div className="w-full h-full bg-[#0a111e] p-5 flex flex-col justify-between font-sans select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-25" />

            <div className="relative flex items-center justify-between text-xs border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-white font-semibold">BRETA AI • CONVERSATION LAB</span>
              </div>
              <span className="text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded text-[11px] border border-purple-500/20 font-mono">
                Gemini 1.5 Pro
              </span>
            </div>

            <div className="relative my-3 space-y-2 text-xs">
              <div className="p-2.5 rounded-xl rounded-bl-sm bg-white/[0.05] border border-white/[0.08] text-[#CBD5E1] max-w-[85%]">
                <p className="text-[10px] text-[#64748B] mb-0.5">Learner (You):</p>
                "I am want to configure the router switch for our department office."
              </div>

              <div className="p-2.5 rounded-xl rounded-br-sm bg-purple-950/40 border border-purple-500/30 text-purple-100 ml-auto max-w-[90%]">
                <p className="text-[10px] text-purple-300 font-semibold mb-0.5">Breta AI Feedback:</p>
                <p className="text-[11px]">
                  Better phrasing: <strong className="text-white">"I would like to configure the router and switch..."</strong>
                </p>
                <div className="mt-1 text-[10px] text-emerald-400 flex items-center gap-1">
                  <span>✓ Grammar Accuracy: 88%</span> • <span>Tone: Professional</span>
                </div>
              </div>
            </div>

            <div className="relative p-2 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] text-[#94A3B8] flex items-center justify-between font-mono">
              <span className="text-purple-300">Speech synthesis active</span>
              <span className="text-white/60">Audio Latency: 120ms</span>
            </div>
          </div>
        );

      case 'automated-class-scheduler':
        return (
          <div className="w-full h-full bg-[#0a111e] p-5 flex flex-col justify-between font-sans select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-25" />

            <div className="relative flex items-center justify-between text-xs border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-semibold">TCCI TIMETABLE MATRIX</span>
              </div>
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[11px] border border-emerald-500/20 font-mono">
                0 Conflicts Detected
              </span>
            </div>

            <div className="relative my-3 grid grid-cols-4 gap-1.5 text-[10px] font-mono">
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-[#94A3B8]">
                <div className="text-[9px] text-[#64748B]">08:00 - 10:00</div>
                <div className="text-white font-semibold mt-1">IT-301</div>
                <div className="text-[#60A5FA]">Comp Lab 2</div>
              </div>

              <div className="p-2 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-blue-200">
                <div className="text-[9px] text-blue-300">10:00 - 12:00</div>
                <div className="text-white font-semibold mt-1">NET-204</div>
                <div className="text-blue-300">Cisco Lab</div>
              </div>

              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05] text-[#94A3B8]">
                <div className="text-[9px] text-[#64748B]">01:00 - 03:00</div>
                <div className="text-white font-semibold mt-1">DB-102</div>
                <div className="text-[#60A5FA]">Room 204</div>
              </div>

              <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                <div className="text-[9px] text-emerald-400">03:00 - 05:00</div>
                <div className="text-white font-semibold mt-1">SYS-401</div>
                <div className="text-emerald-300">Lecture Hall</div>
              </div>
            </div>

            <div className="relative p-2 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] text-[#94A3B8] flex items-center justify-between font-mono">
              <span>Backtracking Solver: 18 faculty units allocated</span>
              <span className="text-emerald-400">OPTIMAL</span>
            </div>
          </div>
        );

      case 'campus-network-topology':
      default:
        return (
          <div className="w-full h-full bg-[#0a111e] p-5 flex flex-col justify-between font-mono select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-30" />

            <div className="relative flex items-center justify-between text-xs border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-semibold">CISCO HIERARCHICAL TOPOLOGY</span>
              </div>
              <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded text-[11px] border border-cyan-500/20">
                OSPF AREA 0
              </span>
            </div>

            <div className="relative my-3 grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 rounded-lg bg-[#111A28] border border-white/10">
                <div className="text-[#94A3B8]">CORE LAYER</div>
                <div className="text-white font-bold mt-0.5">Cisco 3560</div>
                <div className="text-[9px] text-cyan-400">10Gbps Uplink</div>
              </div>

              <div className="p-2 rounded-lg bg-[#111A28] border border-cyan-500/30">
                <div className="text-[#94A3B8]">DISTRIBUTION</div>
                <div className="text-white font-bold mt-0.5">802.1Q Trunk</div>
                <div className="text-[9px] text-emerald-400">STP Root Primary</div>
              </div>

              <div className="p-2 rounded-lg bg-[#111A28] border border-white/10">
                <div className="text-[#94A3B8]">ACCESS VLANs</div>
                <div className="text-white font-bold mt-0.5">VLAN 10/20/30</div>
                <div className="text-[9px] text-amber-400">Port Security MAC</div>
              </div>
            </div>

            <div className="relative p-2 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] text-[#94A3B8] flex items-center justify-between">
              <span>Subnets: 192.168.10.0/24 (Admin) • .20.0/24 (Faculty)</span>
              <span className="text-cyan-300">ACL: BLOCKED</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0D1420] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
            <Radio className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Practical systems, IoT hardware prototypes, web applications, and network infrastructure designed and built to address genuine operational needs.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#111A28] border border-white/[0.08] hover:border-[#3B82F6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
              data-interactive="true"
            >
              {/* Project Mockup Container with Hover Zoom */}
              <div className="relative aspect-[16/9] w-full border-b border-white/[0.08] overflow-hidden bg-[#080D16]">
                <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  {renderProjectVisual(project.id)}
                </div>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#080D16]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] shadow-lg flex items-center gap-2 transition-transform duration-150 transform hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>

              {/* Project Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#60A5FA] uppercase tracking-wider font-mono">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Featured Prototype
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Short Realistic Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#0D1420] text-[#CBD5E1] border border-white/[0.05] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Row */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#60A5FA] transition-colors group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#0D1420] hover:bg-[#162235] text-[#94A3B8] hover:text-white border border-white/[0.06] transition-colors"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#1D4ED8] hover:bg-[#2563EB] text-white transition-colors"
                      >
                        Explore System
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
