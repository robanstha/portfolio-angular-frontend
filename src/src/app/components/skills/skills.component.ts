import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { fadeInUp, hoverScale } from '../../shared/animations';

interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Design';
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Skills & Expertise</h2>
          <p>Proficient in modern technologies and best practices across the full stack</p>
        </div>

        <div class="skills-grid">
          <div 
            *ngFor="let skill of skills; let i = index"
            class="skill-card"
            [@fadeInUp]
            [style.animation-delay]="(i * 50) + 'ms'"
            (mouseenter)="selectedSkill = skill.id"
            (mouseleave)="selectedSkill = null"
            [class.active]="selectedSkill === skill.id"
          >
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <p class="skill-category">{{ skill.category }}</p>
            
            <div class="skill-bar">
              <div class="skill-fill" [style.width.%]="skill.level"></div>
            </div>
            <span class="skill-percent">{{ skill.level }}%</span>
          </div>
        </div>

        <!-- Categories summary -->
        <div class="categories-summary">
          <div *ngFor="let category of categories" class="category-group">
            <h4>{{ category.name }}</h4>
            <div class="category-badges">
              <span *ngFor="let tech of category.techs" class="tech-badge">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding: 6rem 2rem;
      background: linear-gradient(180deg, #0A0E27 0%, #1A1F3A 100%);
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;

      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
      }
    }

    .skill-card {
      background: rgba(26, 31, 58, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(58, 65, 88, 0.5);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 300ms ease;
      }

      &:hover, &.active {
        transform: translateY(-8px);
        border-color: #00D9FF;
        box-shadow: 0 0 30px rgba(0, 217, 255, 0.3);
        background: rgba(26, 31, 58, 0.95);

        &::before {
          opacity: 1;
        }

        .skill-fill {
          animation: shimmer 600ms ease-in-out;
        }
      }

      @keyframes shimmer {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
    }

    .skill-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .skill-card h3 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
      color: #E8EAED;
    }

    .skill-category {
      font-size: 0.875rem;
      color: #00D9FF;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .skill-bar {
      width: 100%;
      height: 8px;
      background: rgba(58, 65, 88, 0.5);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 0.75rem;
    }

    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, #00D9FF 0%, #7C3AED 100%);
      border-radius: 4px;
      transition: width 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .skill-percent {
      font-size: 0.875rem;
      color: #00D9FF;
      font-weight: 600;
    }

    .categories-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 4rem;
      padding-top: 4rem;
      border-top: 1px solid rgba(58, 65, 88, 0.5);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .category-group h4 {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: #E8EAED;
    }

    .category-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .tech-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: rgba(0, 217, 255, 0.1);
      border: 1px solid #00D9FF;
      border-radius: 20px;
      color: #00D9FF;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 200ms ease;

      &:hover {
        background: rgba(0, 217, 255, 0.2);
        transform: translateY(-2px);
      }
    }
  `],
  animations: [fadeInUp, hoverScale]
})
export class SkillsComponent implements OnInit {
  selectedSkill: string | null = null;

  skills: Skill[] = [
    { id: 'angular', name: 'Angular', level: 95, category: 'Frontend', icon: '🅰️' },
    { id: 'typescript', name: 'TypeScript', level: 95, category: 'Frontend', icon: '📘' },
    { id: 'react', name: 'React', level: 85, category: 'Frontend', icon: '⚛️' },
    { id: 'nodejs', name: 'Node.js', level: 90, category: 'Backend', icon: '🟢' },
    { id: 'python', name: 'Python', level: 85, category: 'Backend', icon: '🐍' },
    { id: 'docker', name: 'Docker', level: 90, category: 'DevOps', icon: '🐳' },
    { id: 'kubernetes', name: 'Kubernetes', level: 80, category: 'DevOps', icon: '☸️' },
    { id: 'aws', name: 'AWS', level: 85, category: 'DevOps', icon: '☁️' },
    { id: 'figma', name: 'Figma', level: 88, category: 'Design', icon: '🎨' },
    { id: 'uxui', name: 'UX/UI Design', level: 90, category: 'Design', icon: '✨' },
  ];

  categories = [
    {
      name: 'Frontend',
      techs: ['HTML5', 'CSS3', 'SCSS', 'Vue.js', 'Tailwind', 'Material', 'Responsive Design']
    },
    {
      name: 'Backend',
      techs: ['Express.js', 'NestJS', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      name: 'DevOps & Cloud',
      techs: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Linux', 'Nginx', 'Terraform', 'Microservices']
    },
    {
      name: 'Tools & Methods',
      techs: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'JIRA', 'Agile', 'TDD']
    }
  ];

  ngOnInit() {}
}
