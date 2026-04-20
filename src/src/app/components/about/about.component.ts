import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

/**
 * AboutComponent
 * Displays about section with stats and biography
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title" appScrollReveal>About Me</h2>

        <div class="about-content">
          <div class="about-text" appScrollReveal>
            <p>
              I'm a passionate software engineer with 5+ years of experience in building modern web applications.
              I specialize in frontend development with Angular and React, creating performant and scalable solutions.
            </p>
            <p>
              I'm committed to writing clean, maintainable code and staying updated with the latest technologies
              and best practices. When I'm not coding, I enjoy contributing to open-source projects and sharing
              knowledge with the developer community.
            </p>
          </div>

          <div class="stats-container">
            <div class="stat" 
              *ngFor="let stat of stats" 
              appScrollReveal
              [style.animation-delay]="stat.delay">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  stats = [
    {
      number: '5+',
      label: 'Years Experience',
      delay: '0s'
    },
    {
      number: '50+',
      label: 'Projects Completed',
      delay: '0.1s'
    },
    {
      number: '20+',
      label: 'Happy Clients',
      delay: '0.2s'
    }
  ];
}
