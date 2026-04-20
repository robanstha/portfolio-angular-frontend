/**
 * Core data models for portfolio application
 * Provides strong typing for components and services
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  thumbnail?: string;
  technologies: string[];
  link: string;
  github?: string;
  featured?: boolean;
  date?: Date;
  category?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  isCurrent?: boolean;
  technologies?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
}

export interface ContactFormError {
  field: string;
  message: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'codepen' | 'dribbble';
  url: string;
  icon?: string;
  label?: string;
}

export interface PortfolioConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  profileImage?: string;
  socialLinks?: SocialLink[];
  resumeUrl?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
}

export interface ScrollTarget {
  id: string;
  label: string;
  element?: HTMLElement;
}

export interface Theme {
  name: string;
  dark: boolean;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}
