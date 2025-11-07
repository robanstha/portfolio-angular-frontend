import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TimelineComponent,
    SkillsComponent,
    ContactComponent,
    ScrollRevealDirective,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
