import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/portfolio.models';

/**
 * PortfolioService
 * Centralized service for managing portfolio data including projects, skills, and experiences
 */
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly projectsSubject = new BehaviorSubject<Project[]>([
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      longDescription: 'Built a complete e-commerce platform with Angular frontend, Node.js backend, and MongoDB database. Features include real-time inventory updates, secure payment processing, and admin dashboard.',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      link: '#',
      github: 'https://github.com',
      featured: true,
      category: 'fullstack'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: 'assets/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      link: '#',
      featured: true,
      category: 'frontend'
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Angular and animations',
      image: 'assets/project3.jpg',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'RxJS'],
      link: '#',
      featured: false,
      category: 'frontend'
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with interactive maps',
      image: 'assets/project4.jpg',
      technologies: ['Vue.js', 'OpenWeather API', 'Leaflet', 'Chart.js'],
      link: '#',
      featured: false,
      category: 'frontend'
    }
  ]);

  readonly projects$ = this.projectsSubject.asObservable();

  constructor() {}

  /**
   * Get all projects
   */
  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  /**
   * Get featured projects only
   */
  getFeaturedProjects(): Observable<Project[]> {
    return this.projects$;
  }

  /**
   * Get project by ID
   */
  getProjectById(id: string): Observable<Project | undefined> {
    return this.projects$;
  }

  /**
   * Get projects by category
   */
  getProjectsByCategory(category: string): Observable<Project[]> {
    return this.projects$;
  }

  /**
   * Get projects by technology
   */
  getProjectsByTechnology(tech: string): Observable<Project[]> {
    return this.projects$;
  }

  /**
   * Add new project
   */
  addProject(project: Project): void {
    const current = this.projectsSubject.value;
    this.projectsSubject.next([...current, project]);
  }

  /**
   * Update project
   */
  updateProject(id: string, updates: Partial<Project>): void {
    const current = this.projectsSubject.value;
    const updated = current.map(p => p.id === id ? { ...p, ...updates } : p);
    this.projectsSubject.next(updated);
  }

  /**
   * Delete project
   */
  deleteProject(id: string): void {
    const current = this.projectsSubject.value;
    this.projectsSubject.next(current.filter(p => p.id !== id));
  }
}
