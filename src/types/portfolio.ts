export interface Project {
  title: string;
  category: string;
  stack: string[];
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
