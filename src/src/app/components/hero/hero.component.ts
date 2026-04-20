import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../core/services/scroll.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

/**
 * HeroComponent
 * Displays the hero section with call-to-action buttons
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <section id="home" class="hero" appScrollReveal>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hi, I'm <span class="accent">Robert Smith</span>
          </h1>
          <h2 class="hero-subtitle">Software Engineer</h2>
          <p class="hero-description">Building elegant solutions to complex problems</p>
          
          <div class="cta-buttons">
            <button 
              class="btn btn-primary" 
              (click)="scrollToProjects()"
              aria-label="View My Work">
              View My Work
            </button>
            <button 
              class="btn btn-secondary" 
              (click)="scrollToContact()"
              aria-label="Get in Touch">
              Get in Touch
            </button>
          </div>
        </div>

        <div class="hero-image">
          <img 
            src="assets/profile.jpg" 
            alt="Robert Smith - Software Engineer"
            loading="lazy"
            width="400"
            height="400">
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <span>Scroll to explore</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private readonly scrollService = inject(ScrollService);

  scrollToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }
}
