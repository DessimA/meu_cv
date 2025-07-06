export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  cloudDevOps: string[];
  methodologies: string[];
  tools: string[];
  operatingSystems: string[];
}

export interface Project {
  name: string;
  type: string;
  technologies: string[];
  github: string;
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  activities: string[];
}

export interface Certification {
  name: string;
  institution: string;
  date: string;
  duration?: string;
  details?: string;
  id?: string;
}

export interface Language {
  language: string;
  level: string;
  details?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education;
  summary: string;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  languages: Language[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

