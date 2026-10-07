import type { TimelineItem } from '../types';

export const timelineItems: TimelineItem[] = [
  {
    year: "2026",
    title: "Capstone Hardware & Network Lead",
    organization: "Speed Detection & Warning System Prototype",
    type: "Capstones & Systems",
    description: "Designed, engineered, and demonstrated an active IoT road safety prototype combining vehicle velocity calculation, RF wireless communication, pedestrian alarm pillars, and ESP32-CAM monitoring.",
    bullets: [
      "Interfaced Arduino sensors with 433MHz RF transceivers to transmit low-latency violation signals to pedestrian pillars",
      "Configured automated camera snapshots and Python desktop data logging using SQLite",
      "Defended the project successfully, proving reliable trigger response within 180ms"
    ],
    technologies: ["Arduino", "ESP32-CAM", "RF 433MHz", "Python", "SQLite"]
  },
  {
    year: "2026",
    title: "Web Application Development",
    organization: "Laundry Pickup & Delivery Management System",
    type: "Capstones & Systems",
    description: "Architected a full-featured web operations platform replacing paper records with automated order tracking, pickup scheduling, weight calculation, and customer receipts.",
    bullets: [
      "Constructed Flask backend routes, session security, and SQLite normalized databases",
      "Built clean, responsive order dispatching views for shop staff and delivery riders",
      "Implemented dynamic status updates and printable customer invoices"
    ],
    technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3"]
  },
  {
    year: "2025–2026",
    title: "Network Technician & IT Support Field Practice",
    organization: "Local Residential & Small Office Deployments",
    type: "Field & Infrastructure",
    description: "Hands-on experience deploying, testing, and maintaining wireless and wired local network infrastructure, client workstations, and peripheral equipment.",
    bullets: [
      "Configured WiFi routers, access points, SSID security, channel optimization, and IP pools",
      "Ran and terminated Cat5e/Cat6 ethernet cables, verified continuity, and dressed wiring racks",
      "Diagnosed internet latency, signal dropouts, and hardware issues across client workstations",
      "Provided patient technical support, software installations, and printer configurations"
    ],
    technologies: ["WiFi Routers", "Access Points", "Cat6 Cabling", "Hardware Diagnostics", "Windows Support"]
  },
  {
    year: "2023–2026",
    title: "Bachelor of Science in Information Technology",
    organization: "Torres Capitol College, Inc. — Academic Journey",
    type: "Education & Growth",
    description: "Dedicated collegiate training in computer networks, operating systems administration, database management, web engineering, hardware maintenance, and data privacy compliance.",
    bullets: [
      "Mastered subnetting (VLSM), VLAN configuration, and Cisco Packet Tracer network simulations",
      "Built proficiency in full-stack web development across frontend, backend, and relational databases",
      "Maintained consistent academic dedication toward solving real-world technological challenges"
    ],
    technologies: ["Networking", "Cisco CLI", "Python", "Databases", "Web Engineering"]
  }
];
