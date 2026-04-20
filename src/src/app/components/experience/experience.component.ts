import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../shared/animations';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Experience</h2>
          <p>My professional journey and career highlights</p>
        </div>

        <div class="timeline">
          <div 
            *ngFor="let exp of experiences; let i = index"
            class="timeline-item"
            [@fadeInUp]
            [style.animation-delay]="(i * 100) + 'ms'"
            [class.alternate]="i % 2 === 1"
          >
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>

            <div class="timeline-content">
              <div class="content-header">
                <h3>{{ exp.title }}</h3>
                <span class="company">{{ exp.company }}</span>
              </div>

              <span class="period">{{ exp.period }}</span>
              <p class="description">{{ exp.description }}</p>

              <div class="achievements">
                <h4>Key Achievements</h4>
                <ul>
                  <li *ngFor="let achievement of exp.achievements">
                    {{ achievement }}
                  </li>
                </ul>
              </div>

              <div class="tech-list">
                <span *ngFor="let tech of exp.technologies" class="tech-item">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
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

    .timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, #00D9FF 0%, #7C3AED 100%);
        transform: translateX(-50%);

        @media (max-width: 768px) {
          left: 30px;
        }
      }
    }

    .timeline-item {
      margin-bottom: 3rem;
      position: relative;

      @media (max-width: 768px) {
        margin-left: 0;
        padding-left: 80px;

        &::before {
          display: none;
        }
      }
    }

    .timeline-item:nth-child(odd) {
      padding-right: 52%;

      @media (max-width: 768px) {
        padding-right: 0;
      }
    }

    .timeline-item:nth-child(even) {
      padding-left: 52%;

      @media (max-width: 768px) {
        padding-left: 80px;
        padding-right: 0;
      }
    }

    .timeline-marker {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      z-index: 10;

      @media (max-width: 768px) {
        left: 30px;
      }
    }

    .marker-dot {
      width: 20px;
      height: 20px;
      background: #0A0E27;
      border: 3px solid #00D9FF;
      border-radius: 50%;
      cursor: pointer;
      transition: all 300ms ease;

      &:hover {
        width: 30px;
        height: 30px;
        transform: translateX(-5px);
        box-shadow: 0 0 20px rgba(0, 217, 255, 0.6);
      }
    }

    .timeline-content {
      background: rgba(26, 31, 58, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(58, 65, 88, 0.5);
      border-radius: 12px;
      padding: 2rem;
      transition: all 300ms ease;

      &:hover {
        border-color: #00D9FF;
        box-shadow: 0 0 30px rgba(0, 217, 255, 0.2);
      }
    }

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 1rem;
      margin-bottom: 0.5rem;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
      }
    }

    .timeline-content h3 {
      font-size: 1.5rem;
      margin: 0;
      color: #E8EAED;
    }

    .company {
      padding: 0.5rem 1rem;
      background: rgba(0, 217, 255, 0.1);
      border: 1px solid #00D9FF;
      border-radius: 6px;
      color: #00D9FF;
      font-size: 0.875rem;
      font-weight: 600;
      white-space: nowrap;
    }

    .period {
      display: block;
      color: #9CA3AF;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .description {
      color: #9CA3AF;
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }

    .achievements {
      margin-bottom: 1.5rem;

      h4 {
        font-size: 1rem;
        color: #E8EAED;
        margin-bottom: 0.75rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          color: #9CA3AF;
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;

          &::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: #00D9FF;
          }
        }
      }
    }

    .tech-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .tech-item {
      display: inline-block;
      padding: 0.4rem 0.8rem;
      background: rgba(0, 217, 255, 0.1);
      border-radius: 4px;
      color: #00D9FF;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }
  `],
  animations: [fadeInUp]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      id: 'exp-1',
      title: 'Senior Full Stack Engineer',
      company: 'Tech Startup XYZ',
      period: '2022 - Present',
      description: 'Leading development of scalable microservices architecture and mentoring junior developers. Architected and deployed multiple high-traffic applications.',
      achievements: [
        'Led team of 5 engineers in building microservices platform',
        'Reduced deployment time by 70% through CI/CD optimization',
        'Implemented real-time data synchronization reducing latency by 40%',
        'Mentored 3 junior developers to senior roles'
      ],
      technologies: ['Angular', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL']
    },
    {
      id: 'exp-2',
      title: 'Full Stack Developer',
      company: 'Digital Agency ABC',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications. Collaborated with designers and product managers.',
      achievements: [
        'Delivered 15+ projects on time and within budget',
        'Improved application performance by 60% through optimization',
        'Established frontend best practices and coding standards',
        'Built reusable component library used across 10+ projects'
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'AWS', 'MongoDB']
    },
    {
      id: 'exp-3',
      title: 'Junior Developer',
      company: 'Web Solutions Corp',
      period: '2019 - 2020',
      description: 'Started my professional journey building web applications and learning industry best practices. Contributed to various features and bug fixes.',
      achievements: [
        'Built 5 responsive web applications',
        'Improved code quality through peer reviews and testing',
        'Learned and adopted modern development practices',
        'Contributed to open source projects'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'PHP', 'MySQL']
    }
  ];

  ngOnInit() {}
}
