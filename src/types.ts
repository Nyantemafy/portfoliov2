export interface Project {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
  features: string[];
  role: string;
  challenges: string;
  results: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
