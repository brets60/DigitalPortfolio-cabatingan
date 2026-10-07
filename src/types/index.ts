export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'IoT & Hardware' | 'Web Application' | 'AI & Language' | 'Academic System' | 'Network Infrastructure';
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  featured: boolean;
  
  // Detailed case study fields
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStackDetails: {
    category: string;
    items: string[];
  }[];
  myContribution: string[];
  challenges: string[];
  result: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Practical Experience", "Academic & Field"
    iconName: string;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  type: 'Capstones & Systems' | 'Field & Infrastructure' | 'Education & Growth';
  description: string;
  bullets?: string[];
  technologies?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
  references: {
    name: string;
    title: string;
    institution: string;
    location: string;
    contact?: string;
  }[];
}
