export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  html_url: string;
  tag: string;
  stars?: number;
  forks?: number;
}

export const githubProfile = {
  username: "brets60",
  profileUrl: "https://github.com/brets60",
  publicRepos: 10,
  bio: "Full-Stack Software Developer & Networking Specialist building practical digital systems and hardware integrations.",
};

export const githubRepos: GitHubRepo[] = [
  {
    name: "DigitalPortfolio-cabatingan",
    description: "Modern, human-designed personal digital portfolio website for John Angelo P. Cabatingan — Networking Specialist & Full-Stack Developer.",
    language: "TypeScript / React",
    html_url: "https://github.com/brets60/DigitalPortfolio-cabatingan",
    tag: "Active Project"
  },
  {
    name: "Laundry-Pickup-and-Delivery-Management-System",
    description: "A comprehensive web-based management platform designed to organize customers, laundry orders, pickup schedules, deliveries, and billing.",
    language: "HTML / Python",
    html_url: "https://github.com/brets60/Laundry-Pickup-and-Delivery-Management-System",
    tag: "Featured System"
  },
  {
    name: "smartaid",
    description: "Civic relief distribution, beneficiary verification, and duplicate-claim mitigation platform for community assistance programs.",
    language: "Python",
    html_url: "https://github.com/brets60/smartaid",
    tag: "Operations Platform"
  },
  {
    name: "Junk-Shop-Management-System",
    description: "Operational inventory, scrap material weighing records, vendor transaction logging, and daily ledger management platform.",
    language: "Python / SQLite",
    html_url: "https://github.com/brets60/Junk-Shop-Management-System",
    tag: "Management System"
  },
  {
    name: "Funeral-Service-Management-System",
    description: "Specialized service management platform organizing scheduling, package arrangements, logistics, and client records.",
    language: "Web / Database",
    html_url: "https://github.com/brets60/Funeral-Service-Management-System",
    tag: "Management System"
  }
];
