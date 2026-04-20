import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/portfolio.models';

/**
 * ProjectCardComponent
 * Reusable card component for displaying individual projects
 */
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card" [class.featured]="project.featured">
      <div class="project-image-wrapper">
        <img
          [src]="project.image"
          [alt]="project.title"
          loading="lazy"
          class="project-image">
        <div class="project-overlay">
          <a [href]="project.link" 
            target="_blank" 
            rel="noopener noreferrer"
            class="project-link"
            [attr.aria-label]="'View ' + project.title">
            View Project
          </a>
          <a *ngIf="project.github"
            [href]="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link github"
            aria-label="View GitHub repository">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>

        <div class="tech-stack">
          <span *ngFor="let tech of project.technologies" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
