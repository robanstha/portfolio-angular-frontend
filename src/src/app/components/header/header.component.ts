import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="nav-wrapper">
        <div class="nav-container">
          <!-- Logo -->
          <div class="nav-brand">
            <a href="#" class="logo">
              <span class="logo-icon">{'<'}</span>
              <span class="logo-text">RS</span>
              <span class="logo-icon">{'/>'}</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <ul class="nav-menu" [class.active]="mobileMenuOpen">
            <li><a href="#home" class="nav-link" (click)="closeMobileMenu()">Home</a></li>
            <li><a href="#about" class="nav-link" (click)="closeMobileMenu()">About</a></li>
            <li><a href="#skills" class="nav-link" (click)="closeMobileMenu()">Skills</a></li>
            <li><a href="#projects" class="nav-link" (click)="closeMobileMenu()">Projects</a></li>
            <li><a href="#experience" class="nav-link" (click)="closeMobileMenu()">Experience</a></li>
            <li><a href="#contact" class="nav-link" (click)="closeMobileMenu()">Contact</a></li>
          </ul>

          <!-- Right Actions -->
          <div class="nav-actions">
            <button 
              class="theme-toggle" 
              (click)="toggleTheme()"
              [attr.aria-label]="'Toggle ' + ((isDark$ | async) ? 'light' : 'dark') + ' theme'">
              <svg *ngIf="isDark$ | async" class="icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg *ngIf="!(isDark$ | async)" class="icon" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 001.414-1.414zM5 8a1 1 0 100-2H4a1 1 0 100 2h1z" clip-rule="evenodd"></path>
              </svg>
            </button>

            <!-- Mobile Menu Toggle -->
            <button 
              class="mobile-menu-toggle"
              (click)="toggleMobileMenu()"
              [attr.aria-label]="mobileMenuOpen ? 'Close menu' : 'Open menu'">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <!-- Progress Bar -->
      <div class="progress-bar" [style.width.%]="scrollProgress"></div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDark$: Observable<boolean>;
  isScrolled = false;
  mobileMenuOpen = false;
  scrollProgress = 0;

  constructor(private themeService: ThemeService) {
    this.isDark$ = this.themeService.isDark$;
  }

  ngOnInit(): void {
    // Initialize theme
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Update scroll state
    const scrollTop = window.scrollY;
    this.isScrolled = scrollTop > 50;

    // Calculate progress
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
