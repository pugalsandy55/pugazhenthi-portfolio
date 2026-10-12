export type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'frontend' | 'systems';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  problemSolved: string;
  contribution: string;
  stack: string[];
  visualType: 'vision' | 'catering' | 'portfolio' | 'itsm' | 'monitoring' | 'powerplatform' | string;
  visualBadge: string;
  githubUrl?: string;
  liveUrl?: string;
  statusNote: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
  isCurrent?: boolean;
  needsVerification?: boolean;
  verificationNote?: string;
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  period: string;
  grade: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: string[];
}

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'instagram' | 'email';
  label: string;
  url: string;
  handle: string;
}

export interface SiteMeta {
  name: string;
  brand: string;
  location: string;
  availability: {
    status: 'available' | 'booked' | 'selective';
    label: string;
    description: string;
  };
  headline: {
    prefix: string;
    accent: string;
    suffix: string;
  };
  bio: string;
  stats: Array<{ label: string; value: string }>;
}
