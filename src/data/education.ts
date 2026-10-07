import type { EducationItem } from '../types';

export const educationData: EducationItem = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Torres Capitol College, Inc.",
  location: "Maramag, Bukidnon, Philippines",
  period: "2023 – Present (Expected 2027)",
  status: "Senior Standing / Undergraduate",
  description: "Comprehensive collegiate curriculum emphasizing computer network architecture, systems administration, database management systems, hardware maintenance, web application engineering, and cybersecurity fundamentals.",
  coursework: [
    "Computer Networks & Subnetting (VLSM, Cisco Packet Tracer)",
    "Operating Systems & Systems Administration",
    "Database Management Systems (SQLite, MySQL, Relational Design)",
    "Web Systems & Technologies (Frontend & Backend)",
    "Hardware Troubleshooting, Diagnostics & Maintenance",
    "Data Privacy Compliance & Cybersecurity Fundamentals",
    "Object-Oriented Programming & Software Design"
  ],
  references: [
    {
      name: "David Mark Ybañez",
      title: "IT Instructor",
      institution: "Torres Capitol College",
      location: "Panadtalan, Maramag, Bukidnon",
      contact: "Available upon formal request"
    },
    {
      name: "Jessie Mae C. Jusayan",
      title: "IT Instructor",
      institution: "Torres Capitol College",
      location: "Panadtalan, Maramag, Bukidnon",
      contact: "Available upon formal request"
    }
  ]
};

export const secondaryEducation = {
  school: "San Miguel National High School",
  location: "San Miguel, Maramag, Bukidnon",
  year: "Completed 2023",
  track: "Senior High School — Academic Track"
};
