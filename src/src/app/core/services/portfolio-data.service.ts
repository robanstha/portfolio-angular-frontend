/**
 * Portfolio Service - Core data management
 * Handles all portfolio data operations and caching
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, Skill, SkillCategory, Experience, PortfolioConfig } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private readonly portfolioConfig: PortfolioConfig = {
    name: 'Rajan Shrestha',
    title: 'Full Stack Software Engineer',
    description: 'Building elegant, scalable solutions with modern technologies',
    email: 'rajan@example.com',
    location: 'San Francisco, CA',
    profileImage: 'assets/profile.jpg',
    resumeUrl: 'assets/resume.pdf',
    socialLinks: [
      { platform: 'github', url: 'https://github.com/robanstha', label: 'GitHub' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/robanstha', label: 'LinkedIn' },
      { platform: 'twitter', url: 'https://twitter.com/robanstha', label: 'Twitter' }
    ]
  };

  private readonly projectsData: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      longDescription: 'A complete e-commerce platform built with Angular and Node.js, featuring real-time inventory tracking, payment processing, and admin dashboard.',
      image: 'assets/projects/ecommerce.jpg',
      thumbnail: 'assets/projects/ecommerce-thumb.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://ecommerce-demo.com',
      github: 'https://github.com/robanstha/ecommerce',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      longDescription: 'A React-based task management application with Firebase real-time database, supporting team collaboration and project tracking.',
      image: 'assets/projects/task-mgmt.jpg',
      thumbnail: 'assets/projects/task-mgmt-thumb.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      link: 'https://tasks-app.com',
      github: 'https://github.com/robanstha/task-app',
      featured: true,
      category: 'Frontend'
    },
    {
      id: '3',
      title: 'AI Analytics Dashboard',
      description: 'Data visualization dashboard powered by machine learning',
      image: 'assets/projects/analytics.jpg',
      thumbnail: 'assets/projects/analytics-thumb.jpg',
      technologies: ['Angular', 'Python', 'TensorFlow', 'PostgreSQL'],
      link: 'https://analytics-dashboard.com',
      github: 'https://github.com/robanstha/analytics',
      category: 'Data Science'
    },
    {
      id: '4',
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat with encryption and file sharing',
      image: 'assets/projects/chat.jpg',
      thumbnail: 'assets/projects/chat-thumb.jpg',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'Redis'],
      link: 'https://chat-app-demo.com',
      github: 'https://github.com/robanstha/chat-app',
      category: 'Full Stack'
    }
  ];

  private readonly skillsData: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { id: '1', name: 'Angular', level: 95, category: 'Frontend', icon: 'angular' },
        { id: '2', name: 'React', level: 88, category: 'Frontend', icon: 'react' },
        { id: '3', name: 'TypeScript', level: 92, category: 'Frontend', icon: 'typescript' },
        { id: '4', name: 'HTML/CSS/SCSS', level: 95, category: 'Frontend', icon: 'css' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { id: '5', name: 'Node.js', level: 88, category: 'Backend', icon: 'nodejs' },
        { id: '6', name: 'Python', level: 82, category: 'Backend', icon: 'python' },
        { id: '7', name: 'MongoDB', level: 85, category: 'Backend', icon: 'mongodb' },
        { id: '8', name: 'PostgreSQL', level: 80, category: 'Backend', icon: 'postgresql' }
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { id: '9', name: 'Docker', level: 85, category: 'DevOps', icon: 'docker' },
        { id: '10', name: 'Kubernetes', level: 75, category: 'DevOps', icon: 'kubernetes' },
        { id: '11', name: 'Git/GitHub', level: 92, category: 'Tools', icon: 'git' },
        { id: '12', name: 'CI/CD (GitHub Actions)', level: 80, category: 'DevOps', icon: 'github' }
      ]
    }
  ];

  private readonly experienceData: Experience[] = [
    {
      id: '1',
      title: 'Senior Frontend Engineer',
      company: 'TechCorp',
      description: 'Led frontend architecture and development for 50+ projects',
      startDate: new Date('2021-01-01'),
      isCurrent: true,
      technologies: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      id: '2',
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      description: 'Built full-stack features for SaaS platform',
      startDate: new Date('2019-06-01'),
      endDate: new Date('2020-12-31'),
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projectsData);
  private skillsSubject = new BehaviorSubject<SkillCategory[]>(this.skillsData);
  private experienceSubject = new BehaviorSubject<Experience[]>(this.experienceData);

  projects$ = this.projectsSubject.asObservable();
  skills$ = this.skillsSubject.asObservable();
  experience$ = this.experienceSubject.asObservable();

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    // Load data from API, localStorage, or use defaults
    // This can be extended to fetch from a real backend
  }

  getPortfolioConfig(): PortfolioConfig {
    return { ...this.portfolioConfig };
  }

  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  getFeaturedProjects(): Observable<Project[]> {
    return new BehaviorSubject(
      this.projectsData.filter(p => p.featured)
    ).asObservable();
  }

  getProjectById(id: string): Project | undefined {
    return this.projectsData.find(p => p.id === id);
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.skills$;
  }

  getExperience(): Observable<Experience[]> {
    return this.experience$;
  }

  updateProject(id: string, updates: Partial<Project>): void {
    const index = this.projectsData.findIndex(p => p.id === id);
    if (index !== -1) {
      this.projectsData[index] = { ...this.projectsData[index], ...updates };
      this.projectsSubject.next([...this.projectsData]);
    }
  }

  addProject(project: Project): void {
    this.projectsData.push(project);
    this.projectsSubject.next([...this.projectsData]);
  }
}
