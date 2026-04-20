import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, hoverGlow } from '../shared/animations';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
  year: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Featured Projects</h2>
          <p>Handpicked projects showcasing my expertise and creative problem-solving</p>
        </div>

        <!-- Featured Project -->
        <div class="featured-project" [@fadeInUp]>
          <div class="featured-content">
            <div class="featured-image">
              <div class="image-placeholder">{{ projects[0]?.title }}</div>
            </div>
            <div class="featured-info">
              <span class="badge featured-badge">Featured</span>
              <h3>{{ projects[0]?.title }}</h3>
              <p>{{ projects[0]?.description }}</p>
              
              <div class="tech-stack">
                <span *ngFor="let tech of projects[0]?.technologies" class="tech-tag">
                  {{ tech }}
                </span>
              </div>

              <a href="{{ projects[0]?.link }}" class="btn btn-primary" target="_blank">
                View Project
                <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div 
            *ngFor="let project of projects.slice(1); let i = index"
            class="project-card"
            [@fadeInUp]
            [style.animation-delay]="((i + 1) * 100) + 'ms'"
            (mouseenter)="hoveredProject = project.id"
            (mouseleave)="hoveredProject = null"
            [class.hovered]="hoveredProject === project.id"
            [@hoverGlow]="hoveredProject === project.id ? 'hover' : 'normal'"
          >
            <div class="project-image">
              <div class="image-placeholder">{{ project.title }}</div>
              <div class="project-overlay">
                <a href="{{ project.link }}" class="btn btn-primary" target="_blank">
                  Explore
                </a>
              </div>
            </div>

            <div class="project-body">
              <div class="project-year">{{ project.year }}</div>
              <h4>{{ project.title }}</h4>
              <p>{{ project.description }}</p>

              <div class="project-techs">
                <span *ngFor="let tech of project.technologies" class="tech-mini">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- View More -->
        <div class="view-more" [@fadeInUp]>
          <a href="#" class="btn btn-secondary">
            View All Projects
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 6rem 2rem;
      background: #0A0E27;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      p {
        font-size: 1.125rem;
        color: #9CA3AF;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .featured-project {
      margin-bottom: 4rem;
      overflow: hidden;
      border-radius: 16px;
      background: rgba(26, 31, 58, 0.8);
      border: 1px solid rgba(58, 65, 88, 0.5);
      box-shadow: 0 20px 40px rgba(0, 217, 255, 0.1);
    }

    .featured-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }

    .featured-image {
      position: relative;
      overflow: hidden;
      height: 400px;

      @media (max-width: 1024px) {
        height: 300px;
      }
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(124, 58, 237, 0.1));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 700;
      color: rgba(0, 217, 255, 0.3);
    }

    .featured-info {
      padding: 2rem;

      @media (max-width: 1024px) {
        padding: 2rem 2rem;
      }
    }

    .featured-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: rgba(0, 217, 255, 0.2);
      border: 1px solid #00D9FF;
      border-radius: 20px;
      color: #00D9FF;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .featured-info h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #E8EAED;
    }

    .featured-info p {
      font-size: 1.125rem;
      color: #9CA3AF;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .tech-tag {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: rgba(0, 217, 255, 0.1);
      border: 1px solid #00D9FF;
      border-radius: 6px;
      color: #00D9FF;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .project-card {
      background: rgba(26, 31, 58, 0.8);
      border: 1px solid rgba(58, 65, 88, 0.5);
      border-radius: 12px;
      overflow: hidden;
      transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;

      &:hover, &.hovered {
        transform: translateY(-8px);
        border-color: #00D9FF;
        box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);

        .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          opacity: 1;
        }
      }
    }

    .project-image {
      position: relative;
      overflow: hidden;
      height: 250px;
      transition: transform 400ms ease;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 300ms ease;

      .btn {
        padding: 0.75rem 1.5rem;
      }
    }

    .project-body {
      padding: 1.5rem;
    }

    .project-year {
      font-size: 0.875rem;
      color: #00D9FF;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .project-card h4 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: #E8EAED;
    }

    .project-card p {
      font-size: 0.95rem;
      color: #9CA3AF;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .project-techs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-mini {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba(0, 217, 255, 0.1);
      border-radius: 4px;
      color: #00D9FF;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
      color: #0A0E27;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 200ms ease;
      text-decoration: none;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .btn-primary {
      background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
      color: #0A0E27;
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid #00D9FF;
      color: #00D9FF;

      &:hover {
        background: rgba(0, 217, 255, 0.1);
      }
    }

    .arrow {
      transition: transform 200ms ease;
    }

    .btn:hover .arrow {
      transform: translateX(4px);
    }

    .view-more {
      text-align: center;
    }
  `],
  animations: [fadeInUp, hoverGlow]
})
export class ProjectsComponent implements OnInit {
  hoveredProject: string | null = null;

  projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
      image: 'ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
      link: 'https://project1.com',
      featured: true,
      year: 2023
    },
    {
      id: 'project-2',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization and predictive insights.',
      image: 'analytics.jpg',
      technologies: ['React', 'TypeScript', 'Chart.js', 'AWS'],
      link: 'https://project2.com',
      featured: false,
      year: 2023
    },
    {
      id: 'project-3',
      title: 'Mobile App',
      description: 'Cross-platform mobile application with offline support and cloud sync.',
      image: 'mobile.jpg',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: 'https://project3.com',
      featured: false,
      year: 2022
    },
    {
      id: 'project-4',
      title: 'SaaS Platform',
      description: 'Multi-tenant SaaS platform with authentication and billing system.',
      image: 'saas.jpg',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe'],
      link: 'https://project4.com',
      featured: false,
      year: 2022
    },
    {
      id: 'project-5',
      title: 'AI Chat Application',
      description: 'Intelligent chatbot with natural language processing and learning capabilities.',
      image: 'ai-chat.jpg',
      technologies: ['Python', 'TensorFlow', 'Flask', 'WebSocket'],
      link: 'https://project5.com',
      featured: false,
      year: 2023
    }
  ];

  ngOnInit() {}
}
