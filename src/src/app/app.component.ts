import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    FooterComponent
  ],
  template: `
    <app-navigation></app-navigation>
    <main>
      <app-hero></app-hero>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`
    main {
      width: 100%;
      overflow-x: hidden;
    }
  `]
})
export class AppComponent {
  title = 'Roban Shrestha - Full Stack Engineer & UI/UX Designer';
}
