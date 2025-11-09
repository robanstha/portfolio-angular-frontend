import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private darkMode = new BehaviorSubject<boolean>(this.getInitialThemeValue());
  isDark$ = this.darkMode.asObservable();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Apply initial theme
      this.setTheme(this.darkMode.value);

      // Listen for system theme changes
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          this.setTheme(e.matches);
        });
      }
    }
  }

  private getInitialThemeValue(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false; // Default to light theme for SSR
    }

    // Check local storage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }

    // Fallback to system preference
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Default to light theme
    return false;
  }

  toggleTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const newValue = !this.darkMode.value;
    this.setTheme(newValue);
  }

  private setTheme(isDark: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.darkMode.next(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Apply theme class to document
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }
}