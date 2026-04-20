import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-section" id="experience" [attr.app-scroll-reveal]="true">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <h2>Experience & Journey</h2>
          <p>My professional career timeline</p>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          <div 
            class="timeline-item" 
            *ngFor="let exp of experiences; let i = index"
            [class.current]="exp.current"
            [@fadeInUp]="{ delay: i * 100 }">
            
            <!-- Timeline Dot -->
            <div class="timeline-marker">
              <div class="marker-dot" [class.active]="exp.current">
                <svg *ngIf="exp.current" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>

            <!-- Timeline Content -->
            <div class="timeline-content">
              <div class="experience-header">
                <h3>{{ exp.position }}</h3>
                <span class="company">{{ exp.company }}</span>
                <span class="duration">{{ exp.duration }}</span>
                <span class="badge" *ngIf="exp.current">Current</span>
              </div>

              <p class="description">{{ exp.description }}</p>

              <!-- Achievements -->
              <ul class="achievements">
                <li *ngFor="let achievement of exp.achievements">{{ achievement }}</li>
              </ul>

              <!-- Technologies -->
              <div class="tech-stack">
                <span class="tech" *ngFor="let tech of exp.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(2rem)' }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      id: 1,
      company: 'Tech Company Inc',
      position: 'Senior Full-Stack Engineer',
      duration: '2023 - Present',
      description: 'Leading the development of scalable web applications and mentoring junior developers in modern web technologies.',
      achievements: [
        'Architected and launched 3 major features impacting 100K+ users',
        'Improved application performance by 45% through optimization',
        'Mentored 5 junior developers, improving team productivity by 30%',
        'Established CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['Angular', 'Node.js', 'TypeScript', 'Docker', 'AWS'],
      current: true
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd',
      position: 'Full-Stack Developer',
      duration: '2021 - 2023',
      description: 'Developed and maintained multiple client-facing web applications using modern tech stack.',
      achievements: [
        'Built 8+ web applications from scratch using Angular and Node.js',
        'Reduced API response time by 40% through database optimization',
        'Implemented automated testing increasing code coverage to 85%',
        'Collaborated with UX team to improve user experience'
      ],
      technologies: ['React', 'Angular', 'Python', 'MongoDB', 'PostgreSQL'],
      current: false
    },
    {
      id: 3,
      company: 'StartUp Ventures',
      position: 'Frontend Developer',
      duration: '2019 - 2021',
      description: 'Created responsive user interfaces and interactive web experiences for various web applications.',
      achievements: [
        'Developed responsive UI components used across 10+ projects',
        'Improved page load time by 50% through code splitting',
        'Established frontend coding standards and best practices',
        'Contributed to open-source projects with 500+ GitHub stars'
      ],
      technologies: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript', 'Webpack'],
      current: false
    }
  ];

  ngOnInit(): void {
    // Experience component logic
  }
}
