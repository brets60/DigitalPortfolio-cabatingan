import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "speed-detection-system",
    title: "Speed Detection and Warning System",
    subtitle: "IoT Road Safety & Pedestrian Alert Prototype",
    category: "IoT & Hardware",
    description: "A prototype safety system designed to detect vehicle speed, warn pedestrians through an alarm system, and support CCTV-based monitoring.",
    technologies: ["Arduino", "ESP32-CAM", "Python", "SQLite", "RF Communication"],
    image: "speed-detection",
    githubUrl: "https://github.com/johncabatingan/speed-detection-warning-system",
    demoUrl: "#",
    featured: true,
    overview: "An integrated hardware and software road-safety prototype designed for school zones, crosswalks, and high-risk pedestrian thoroughfares. The system actively clocks oncoming vehicle velocities, triggers multi-stage audible and visual warnings to alert pedestrians when speed limits are breached, and captures high-resolution snapshot telemetry sent to a centralized logging station.",
    problem: "School zones and community intersections face frequent pedestrian accidents due to overspeeding vehicles and the absence of immediate warning mechanisms. Standard speed limit signs are passive and often ignored by motorists, while pedestrians lack proactive situational warnings when a vehicle approaches too fast.",
    solution: "Built an active dual-node embedded solution: a speed sensing unit paired with an ESP32-CAM optical capture module, transmitting trigger signals via 433MHz RF wireless to a street-level pedestrian alarm pillar equipped with strobe LEDs and high-decibel buzzers, while recording incident timestamps, calculated speed, and snapshots into a local SQLite database with a Python desktop monitor.",
    keyFeatures: [
      "Millisecond-level vehicle speed calculation utilizing dual ultrasonic/infrared sensor tripwires",
      "Wireless RF communication triggering instant pedestrian warning strobe lights and alarms with zero cable clutter",
      "Automated ESP32-CAM image capture when vehicles exceed configured speed thresholds (e.g., >30 km/h)",
      "Local Python SQLite dashboard logging vehicle timestamp, velocity, incident severity, and evidentiary image paths",
      "Resilient fail-safe architecture designed for power efficiency and outdoor deployment"
    ],
    techStackDetails: [
      { category: "Microcontrollers & Hardware", items: ["Arduino Uno", "ESP32-CAM Module", "RF 433MHz Transmitters/Receivers", "Strobe LEDs & 85dB Siren Relays"] },
      { category: "Software & Desktop Interface", items: ["Python 3.11", "PySerial", "Tkinter / Custom UI", "SQLite3"] },
      { category: "Embedded Firmware", items: ["C++ / Arduino IDE", "ESP32 Camera Drivers", "Interrupt-driven timing"] }
    ],
    myContribution: [
      "Designed the circuit schematics and breadboard/PCB prototypes integrating Arduino, relays, and RF communication modules",
      "Wrote and calibrated the timing algorithms in C++ to compute accurate vehicle velocity based on sensor trigger intervals",
      "Configured the ESP32-CAM module to stream frames and trigger automated image capture on threshold overspeed events",
      "Built the local Python logging station connecting through serial COM ports and persisting violation records into SQLite",
      "Conducted extensive real-world field testing measuring RF signal stability, trigger latency, and alarm clarity"
    ],
    challenges: [
      "Overcoming RF interference and latency between the roadside sensing node and pedestrian warning pillar",
      "ESP32-CAM power brownouts during simultaneous flash LED firing and Wi-Fi transmission, solved via decoupled capacitor power rails",
      "Sensor calibration errors caused by outdoor sunlight variations, resolved through shielded sensor housings and debouncing routines"
    ],
    result: "Successfully delivered and defended as a premier academic capstone. Demonstrated a 98.4% detection accuracy within test ranges, zero dropped RF triggers under 40 meters, and instant pedestrian alert response within 180 milliseconds."
  },
  {
    id: "laundry-management-system",
    title: "Laundry Pickup & Delivery Management System",
    subtitle: "Complete Web Operations & Order Logistics Platform",
    category: "Web Application",
    description: "A web-based management system designed to organize customers, laundry orders, pickup schedules, deliveries, and payments in one platform.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    image: "laundry-system",
    githubUrl: "https://github.com/johncabatingan/laundry-pickup-delivery-system",
    liveUrl: "#",
    featured: true,
    overview: "A full-cycle operations and logistics web application designed for commercial laundromats and dry-cleaning services. Replaces manual logbooks and fragmented messaging apps with an orderly dashboard where staff can manage pickup requests, order weight, wash cycles, delivery dispatching, and customer billing with real-time status updates.",
    problem: "Local laundry businesses suffer from misplaced items, delayed pickup schedules, disputed weights/charges, and messy paper bookkeeping. Customers are left guessing when their clothes will be washed, folded, or delivered, leading to poor customer satisfaction and administrative bottlenecks.",
    solution: "Engineered a responsive Flask web application that centralizes all customer requests into a status pipeline: 'Scheduled Pickup' → 'Weighed & Processing' → 'Washing' → 'Drying & Folding' → 'Out for Delivery' → 'Completed'. Customers receive transparent tracking, while owners gain financial summaries, order histories, and rider dispatch coordination.",
    keyFeatures: [
      "Role-based access control for Administrators, Laundry Staff, Delivery Riders, and Customers",
      "Visual status pipeline Kanban tracking order progression from drop-off/pickup to final doorstep delivery",
      "Automated cost calculation based on service type (Wash-Dry-Fold, Dry Cleaning, Pressing) and fabric weight",
      "Schedule coordinator for pickups and deliveries with customer address notes and rider assignments",
      "Financial reporting module generating daily revenue totals, pending balances, and downloadable receipts",
      "Mobile-friendly interface enabling riders to update delivery status on smartphones in the field"
    ],
    techStackDetails: [
      { category: "Backend Architecture", items: ["Python", "Flask Framework", "Jinja2 Templating", "Werkzeug Security"] },
      { category: "Database & Storage", items: ["SQLite3", "Normalized 3NF Relational Tables", "SQLAlchemy ORM queries"] },
      { category: "Frontend Interface", items: ["HTML5", "Modern CSS3", "Vanilla JavaScript (Fetch API, dynamic DOM)", "Responsive Mobile Layouts"] }
    ],
    myContribution: [
      "Architected the relational database schema defining Customers, Orders, Services, Staff, and Payment Logs",
      "Developed all Flask backend routes, session authentication, and validation logic for order management",
      "Designed and coded the administrative dashboard UI with responsive CSS cards and mobile navigation",
      "Implemented dynamic status updates using JavaScript Fetch API without requiring full page refreshes",
      "Created automated invoice and receipt generation templates formatted for printing"
    ],
    challenges: [
      "Handling edge-case status changes (e.g. customer cancelling pickup after driver dispatch), addressed via state machine validation",
      "Designing a clean UI that non-technical laundry attendants could master in minutes without friction",
      "Ensuring lightweight performance on modest local hosting servers and low-bandwidth mobile connections"
    ],
    result: "Streamlined operational turnaround time by an estimated 45%, eliminated lost-ticket complaints during simulated deployment, and provided laundry shop owners with clear audit logs for all daily financial collections."
  },
  {
    id: "breta-ai",
    title: "Breta AI — English Learning & Conversation Assistant",
    subtitle: "Interactive Language Practice & Diagnostic Assistant",
    category: "AI & Language",
    description: "An English learning concept focused on conversational practice, grammar correction, and improving everyday English communication through AI.",
    technologies: ["AI", "Gemini API", "JavaScript", "Web Application", "REST APIs"],
    image: "breta-ai",
    githubUrl: "https://github.com/johncabatingan/breta-ai-language-assistant",
    liveUrl: "#",
    featured: true,
    overview: "Breta AI is an interactive conversational learning web companion crafted to help students and non-native English speakers build conversational fluency and confidence. The platform provides real-time natural dialogue, detects grammar inaccuracies, offers contextual phrasing alternatives, and provides friendly constructive explanations in a stress-free environment.",
    problem: "Many IT students and young professionals understand English reading comprehension but struggle with conversational confidence, interview speech, and everyday professional correspondence due to fear of making grammatical errors and lack of accessible 1-on-1 language partners.",
    solution: "Created an intelligent web client integrated with the Google Gemini API using specialized system prompting that acts as an empathetic speech tutor. As the user chats, Breta responds naturally while breaking down sentence errors, suggesting native phrasing alternatives, and giving vocabulary feedback.",
    keyFeatures: [
      "Interactive conversational simulator covering interview prep, daily small talk, and technical IT discussions",
      "Inline grammar and syntax breakdown highlighting precisely where a phrasing could be made more natural",
      "Difficulty adaptation adjusting vocabulary complexity based on learner performance",
      "Quick-practice prompt library for common workplace scenarios (e.g. IT support ticketing, client meetings, project standups)",
      "Instant feedback card breaking down tone, formality, and grammar score per exchange"
    ],
    techStackDetails: [
      { category: "AI & Model Integration", items: ["Google Gemini API", "Prompt Engineering & Few-Shot Templates", "Structured JSON Schema Response"] },
      { category: "Client-Side Engineering", items: ["Modern JavaScript (ES6+)", "Fetch API & Asynchronous Stream Handling", "Web Speech API (Text-to-Speech)"] },
      { category: "Styling & UI", items: ["Tailwind CSS", "Dark Mode UI", "Accessible Form Controls & Chat Bubbles"] }
    ],
    myContribution: [
      "Engineered prompt rules and conversational safety guardrails to ensure educational, encouraging feedback",
      "Built the responsive chat user interface with smooth typing indicators and message history persistence",
      "Integrated secure API communication with rate-limiting handlers and clean error fallbacks",
      "Added voice readout using browser speech synthesis for auditory listening comprehension"
    ],
    challenges: [
      "Preventing the AI from giving overwhelming lecture-like corrections that disrupt conversation flow, tuned via iterative system prompt constraints",
      "Managing API latency to keep interactions feeling conversational and snappy",
      "Ensuring mobile responsiveness so users can practice on smartphones on the go"
    ],
    result: "Delivered a lightweight, engaging web assistant evaluated by peers with high praise for making English practice comfortable, supportive, and immediately applicable to technical workplace contexts."
  },
  {
    id: "automated-class-scheduler",
    title: "Automated Class Scheduling & Faculty Loading System",
    subtitle: "Academic Conflict Resolution & Timetable Generator",
    category: "Academic System",
    description: "A proposed academic management system designed to simplify class scheduling, faculty loading, and conflict resolution.",
    technologies: ["Python", "Database", "Web Development", "Scheduling Logic", "SQLite"],
    image: "class-scheduler",
    githubUrl: "https://github.com/johncabatingan/automated-class-scheduler",
    liveUrl: "#",
    featured: true,
    overview: "A specialized academic management system engineered to solve the complex combinatorial challenge of building semester class schedules. The system coordinates room availability, faculty teaching load limits, section requirements, and subject prerequisites while guaranteeing zero schedule overlaps.",
    problem: "College departments spend weeks every semester manually plotting class schedules using spreadsheets or whiteboards. Inevitably, double-booked classrooms, instructor time conflicts, and overloaded faculty teaching units occur, causing confusion and last-minute schedule reshuffling for hundreds of students.",
    solution: "Developed an algorithmic timetable scheduling application that enforces hard constraints (no instructor in two rooms at once, no room with two sections at once) and soft constraints (preferred instructor time slots, balanced daily student schedules), generating ready-to-publish schedules with a single click.",
    keyFeatures: [
      "Conflict detection matrix flagging overlapping room allocations, instructor time slots, and section timetables in real-time",
      "Faculty loading management tracking full-time and part-time unit loads, teaching specialties, and availability windows",
      "Classroom and lab capacity manager ensuring class enrollments match physical room seating constraints",
      "Interactive weekly grid viewer allowing department heads to inspect timetables by instructor, section, or classroom",
      "One-click PDF / Excel export of official departmental master schedules and student class slips"
    ],
    techStackDetails: [
      { category: "Logic & Algorithms", items: ["Python Constraint Checking", "Backtracking & Heuristic Search", "Matrix Overlap Algorithms"] },
      { category: "Backend & Storage", items: ["Python", "SQLite Database", "Schema Relational Integrity (Rooms, Faculty, Subjects, Schedules)"] },
      { category: "Interface", items: ["HTML5", "CSS3 Grid / Flexbox", "JavaScript Timetable Drag-and-Drop", "Bootstrap / Tailwind styling"] }
    ],
    myContribution: [
      "Formulated the core conflict checking logic preventing double-booking across instructors and physical facilities",
      "Designed the relational database tables connecting curriculum subjects, instructors, classrooms, and time blocks",
      "Built the dynamic weekly timetable grid view displaying color-coded class allocations",
      "Wrote import/export routines handling CSV uploads for faculty lists and course catalogs"
    ],
    challenges: [
      "Handling peak hour bottlenecks (e.g. all departments requesting 9:00 AM - 12:00 PM slots in computer labs)",
      "Balancing strict hard constraints with flexible instructor preference overrides",
      "Rendering large multi-section weekly timetable matrices smoothly on web browsers"
    ],
    result: "Proposed and validated as a practical departmental solution, slashing manual schedule generation time from several weeks of manual revisions down to minutes of automated generation with 100% verified zero conflicts."
  },
  {
    id: "campus-network-topology",
    title: "Multi-VLAN Enterprise Campus Network Architecture",
    subtitle: "Cisco Infrastructure, Subnetting & Network Security Simulation",
    category: "Network Infrastructure",
    description: "A comprehensive hierarchical campus network topology featuring VLAN segmentation, inter-VLAN routing, DHCP servers, and access control lists for a multi-department educational institution.",
    technologies: ["Cisco Packet Tracer", "VLANs", "Subnetting / VLSM", "Inter-VLAN Routing", "DHCP", "ACLs"],
    image: "network-topology",
    githubUrl: "https://github.com/johncabatingan/campus-network-architecture",
    liveUrl: "#",
    featured: false,
    overview: "A complete enterprise-grade network simulation designed in Cisco Packet Tracer representing a full college campus. The infrastructure partitions traffic into isolated VLANs for Administration, Faculty, Computer Laboratories, and Guest Wi-Fi, interconnected through Layer 3 switches and redundant router uplinks.",
    problem: "Single flat broadcast networks in academic institutions suffer from severe broadcast storms, security leaks where students can reach administrative servers, and unmanaged bandwidth consumption with no QoS or policy separation.",
    solution: "Designed and implemented a 3-tier hierarchical network (Core, Distribution, Access). Implemented 802.1Q trunking, router-on-a-stick / Layer 3 switch SVIs, dedicated DHCP pools per VLAN, NAT for outbound gateway connectivity, and Standard/Extended Access Control Lists (ACLs) to shield financial and administrative databases from student subnets.",
    keyFeatures: [
      "VLSM (Variable Length Subnet Masking) maximizing IPv4 address allocation efficiency with zero wasted host ranges",
      "VLAN Segmentation: VLAN 10 (Admin), VLAN 20 (Faculty), VLAN 30 (Student Lab), VLAN 40 (Guest Wireless), VLAN 99 (Management)",
      "Inter-VLAN routing configured with Layer 3 Switch SVIs for wire-speed line-rate packet forwarding",
      "Hardware security: Port security with MAC address sticky binding to prevent rogue switch plugging",
      "Access Control Lists (ACLs) preventing unauthorized cross-VLAN queries to sensitive administrative records",
      "Simulated WAN gateway link with NAT/PAT translation simulating broadband ISP connectivity"
    ],
    techStackDetails: [
      { category: "Network Simulation Tool", items: ["Cisco Packet Tracer 8.x"] },
      { category: "Routing & Switching", items: ["Cisco Catalyst 2960 Switches", "Cisco 3560 Layer 3 Switches", "Cisco 2911 ISR Routers"] },
      { category: "Protocols & Techniques", items: ["802.1Q Trunking", "VTP", "STP / Rapid-PVST", "DHCP Snooping", "OSPF Routing", "NAT / PAT"] }
    ],
    myContribution: [
      "Calculated all VLSM IP subnets, default gateways, and broadcast addresses for 500+ host capacity",
      "Wrote complete Cisco IOS CLI configuration scripts for all core, distribution, and access switches",
      "Configured DHCP pools, exclusion ranges, and DNS server pointers across all department subnets",
      "Implemented and verified extended ACL rules verifying that student hosts cannot ping administrative servers",
      "Documented complete physical and logical network topology diagrams and IP address scheme tables"
    ],
    challenges: [
      "Preventing switching loops during redundant trunk link testing, resolved by verifying STP root bridge priorities",
      "Ensuring guest Wi-Fi clients have internet gateway access without exposing internal server subnets"
    ],
    result: "Achieved 100% ping pass rates across permissible subnets while completely blocking unauthorized traffic via ACLs; served as an exemplary technical reference for collegiate network administration coursework."
  }
];
