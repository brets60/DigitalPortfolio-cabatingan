import type { TimelineItem } from '../types';

export const timelineItems: TimelineItem[] = [
  {
    year: "2026",
    title: "Embedded Systems Developer",
    organization: "Arduino-Based Smart Lock Application",
    type: "Capstones & Systems",
    description: "Designed, engineered, and demonstrated an IoT physical access control system integrating an Arduino microcontroller, electronic relay modules, solenoid lock mechanism, and secure keyless authentication.",
    bullets: [
      "Interfaced Arduino microcontroller with electronic 12V solenoid lock relays, status LEDs, and authentication sensors",
      "Programmed embedded C++ firmware with fail-safe lock mechanisms, brute-force lockout protections, and status indicator buzzers",
      "Achieved instant, sub-second electronic unlock response time with secure access verification"
    ],
    technologies: ["Arduino Uno", "C++ / Embedded", "Relay Modules", "12V Solenoid Lock", "RFID / Keypad", "Hardware Prototyping"]
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
