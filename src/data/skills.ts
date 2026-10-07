import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Networking & Systems",
    description: "Core specialty in physical infrastructure, switching, wireless configuration, and systems maintenance.",
    skills: [
      { name: "WiFi Routers & AP Setup", level: "Practical Field", iconName: "Wifi", highlight: true },
      { name: "Structured Cabling (Cat5e/Cat6)", level: "Practical Field", iconName: "Network", highlight: true },
      { name: "Cisco Packet Tracer", level: "Simulations & Design", iconName: "Server", highlight: true },
      { name: "Subnetting & IP Addressing", level: "VLSM & CIDR", iconName: "Layers", highlight: true },
      { name: "VLANs & Inter-VLAN Routing", level: "Switching & CLI", iconName: "Cpu" },
      { name: "Hardware Troubleshooting", level: "Diagnostics & Repair", iconName: "Wrench", highlight: true },
      { name: "Active Directory Basics", level: "User Accounts & Groups", iconName: "Shield" },
      { name: "Network Security & Diagnostics", level: "Ping, Tracert, Wireshark", iconName: "Activity" },
    ]
  },
  {
    title: "Frontend Development",
    description: "Crafting structured, highly responsive, and accessible user interfaces.",
    skills: [
      { name: "HTML5", level: "Semantic Markup", iconName: "Code" },
      { name: "CSS3", level: "Flexbox, Grid, Animations", iconName: "Palette" },
      { name: "JavaScript (ES6+)", level: "Modern Vanilla JS", iconName: "FileCode", highlight: true },
      { name: "React", level: "Component Architecture & Hooks", iconName: "Atom", highlight: true },
      { name: "Tailwind CSS", level: "Utility-First Styling", iconName: "Wind", highlight: true }
    ]
  },
  {
    title: "Backend Development",
    description: "Building application servers, business logic, authentication, and REST endpoints.",
    skills: [
      { name: "Python", level: "Core Scripting & Algorithms", iconName: "Terminal", highlight: true },
      { name: "Flask", level: "Lightweight Web Services", iconName: "Server", highlight: true },
      { name: "REST APIs", level: "JSON Endpoints & Integration", iconName: "ArrowLeftRight" },
      { name: "PHP", level: "Server-side Scripting", iconName: "FileSpreadsheet" },
      { name: "Node.js", level: "Runtime Environment & Tools", iconName: "Boxes" }
    ]
  },
  {
    title: "Databases",
    description: "Relational schema design, normalization, queries, and data integrity.",
    skills: [
      { name: "SQLite", level: "Embedded & Capstone Storage", iconName: "Database", highlight: true },
      { name: "MySQL", level: "Relational Schemas & Joins", iconName: "Database" },
      { name: "PostgreSQL", level: "Enterprise Relational DB", iconName: "HardDrive" }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Industry-standard developer and networking administration tooling.",
    skills: [
      { name: "Git", level: "Version Control & Branching", iconName: "GitBranch", highlight: true },
      { name: "GitHub", level: "Repositories & Collaboration", iconName: "Github", highlight: true },
      { name: "VS Code", level: "Primary Development IDE", iconName: "Monitor" },
      { name: "PyCharm", level: "Python IDE Environment", iconName: "Terminal" },
      { name: "Figma", level: "UI/UX & Wireframing", iconName: "Layout" },
      { name: "Cisco CLI", level: "Router & Switch Config", iconName: "Terminal" }
    ]
  },
  {
    title: "IoT & Embedded Tech",
    description: "Hardware microcontrollers, sensor integration, camera modules, and wireless protocols.",
    skills: [
      { name: "Arduino Uno / Nano", level: "Microcontroller Programming", iconName: "Cpu", highlight: true },
      { name: "ESP32", level: "WiFi/BLE Microcontroller", iconName: "Radio", highlight: true },
      { name: "ESP32-CAM", level: "Video & Image Capture", iconName: "Camera", highlight: true },
      { name: "RF Communication", level: "Wireless Signal Transmission", iconName: "Radio" }
    ]
  }
];
