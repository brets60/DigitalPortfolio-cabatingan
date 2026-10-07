import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import {
  Wifi,
  Network,
  Server,
  Layers,
  Cpu,
  Wrench,
  Shield,
  Activity,
  Code,
  Palette,
  FileCode,
  Atom,
  Wind,
  Terminal,
  ArrowLeftRight,
  FileSpreadsheet,
  Boxes,
  Database,
  HardDrive,
  GitBranch,
  Monitor,
  Layout,
  Radio,
  Camera
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Icon mapping resolver
  const renderIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 transition-transform duration-200 group-hover:scale-110" };
    switch (iconName) {
      case 'Wifi': return <Wifi {...props} className={`${props.className} text-sky-400`} />;
      case 'Network': return <Network {...props} className={`${props.className} text-blue-400`} />;
      case 'Server': return <Server {...props} className={`${props.className} text-indigo-400`} />;
      case 'Layers': return <Layers {...props} className={`${props.className} text-teal-400`} />;
      case 'Cpu': return <Cpu {...props} className={`${props.className} text-cyan-400`} />;
      case 'Wrench': return <Wrench {...props} className={`${props.className} text-amber-400`} />;
      case 'Shield': return <Shield {...props} className={`${props.className} text-emerald-400`} />;
      case 'Activity': return <Activity {...props} className={`${props.className} text-emerald-400`} />;
      case 'Code': return <Code {...props} className={`${props.className} text-orange-400`} />;
      case 'Palette': return <Palette {...props} className={`${props.className} text-pink-400`} />;
      case 'FileCode': return <FileCode {...props} className={`${props.className} text-yellow-400`} />;
      case 'Atom': return <Atom {...props} className={`${props.className} text-cyan-400`} />;
      case 'Wind': return <Wind {...props} className={`${props.className} text-teal-400`} />;
      case 'Terminal': return <Terminal {...props} className={`${props.className} text-emerald-400`} />;
      case 'ArrowLeftRight': return <ArrowLeftRight {...props} className={`${props.className} text-blue-400`} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} className={`${props.className} text-purple-400`} />;
      case 'Boxes': return <Boxes {...props} className={`${props.className} text-lime-400`} />;
      case 'Database': return <Database {...props} className={`${props.className} text-blue-400`} />;
      case 'HardDrive': return <HardDrive {...props} className={`${props.className} text-indigo-400`} />;
      case 'GitBranch': return <GitBranch {...props} className={`${props.className} text-red-400`} />;
      case 'Github': return <GithubIcon className="w-4 h-4 text-gray-300 transition-transform duration-200 group-hover:scale-110" />;
      case 'Monitor': return <Monitor {...props} className={`${props.className} text-blue-300`} />;
      case 'Layout': return <Layout {...props} className={`${props.className} text-purple-400`} />;
      case 'Radio': return <Radio {...props} className={`${props.className} text-rose-400`} />;
      case 'Camera': return <Camera {...props} className={`${props.className} text-amber-400`} />;
      default: return <Code {...props} className={`${props.className} text-[#3B82F6]`} />;
    }
  };

  const categoriesList = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#080D16] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] border border-white/[0.08] text-[#60A5FA] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Tools I Work With
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Organized stack spanning computer networking, full-stack software development, relational databases, and IoT prototyping.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-[#1D4ED8] text-white shadow-sm border border-[#3B82F6]/30'
                    : 'bg-[#111A28] text-[#94A3B8] hover:text-white border border-white/[0.06] hover:bg-[#162235]'
                }`}
                data-interactive="true"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack Grid */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#0D1420] border border-white/[0.07] relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-5 gap-2 border-b border-white/[0.05] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  {cat.description}
                </p>
              </div>

              {/* Individual Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative p-3.5 sm:p-4 rounded-xl bg-[#111A28] border border-white/[0.06] hover:border-[#3B82F6]/40 transition-all duration-150 hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between"
                    data-interactive="true"
                  >
                    <div className="flex items-start justify-between mb-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:bg-[#3B82F6]/10 transition-colors">
                        {renderIcon(skill.iconName)}
                      </div>
                      {skill.highlight && (
                        <span className="text-[10px] font-semibold text-[#60A5FA] bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-1.5 py-0.5 rounded">
                          Core
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors leading-snug">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-[#64748B] mt-1 font-mono">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
