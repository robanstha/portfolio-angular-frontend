import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.models';
import { Observable } from 'rxjs';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

/**
 * ProjectsComponent
 * Displays grid of project cards fetched from PortfolioService
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ScrollRevealDirective],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title" appScrollReveal>Featured Projects</h2>

        <div class="project-grid">
          <app-project-card
            *ngFor="let project of projects$ | async; let i = index"
            [project]="project"
            [appScrollReveal]="true"
            [style.animation-delay]="(i * 0.1) + 's'">
          </app-project-card>
        </div>

        <div class="projects-footer">
          <p>Interested in seeing more?</p>
          <a href="#" class="btn btn-secondary" title="View all projects">View All Projects →</a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  projects$!: Observable<Project[]>;

  ngOnInit(): void {
    this.projects$ = this.portfolioService.getProjects();
  }
}
