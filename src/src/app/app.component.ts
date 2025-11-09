import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScrollProgressService } from './shared/scroll-progress.service';
import { ThemeService } from './shared/theme.service';
import { ScrollRevealDirective } from './shared/scroll-reveal.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, RouterOutlet, ScrollRevealDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  scrollProgress$: Observable<number>;
  isDark$: Observable<boolean>;

  constructor(
    private scrollProgressService: ScrollProgressService,
    private themeService: ThemeService
  ) {
    this.scrollProgress$ = this.scrollProgressService.scrollProgress$;
    this.isDark$ = this.themeService.isDark$;
  }

  ngOnInit(): void {
    // Scroll progress is initialized in the service constructor
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
