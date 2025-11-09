import { Injectable, Signal, computed, effect, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(this.getInitialThemeValue());
  isDark$ = this.darkMode.asObservable();

  constructor() {
    // Apply initial theme
    this.setTheme(this.darkMode.value);

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
          this.setTheme(true);
        } else {
          this.setTheme(false);
        }
      });
    }
  }

  private getInitialThemeValue(): boolean {
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
    const newValue = !this.darkMode.value;
    this.setTheme(newValue);
  }

  private setTheme(isDark: boolean): void {
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