import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>(this.getPreferredTheme());
  theme$ = this.themeSubject.asObservable();

  private getPreferredTheme(): Theme {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  toggleTheme() {
    const current = this.themeSubject.value;
    const next = current === 'light' ? 'dark' : 'light';
    this.themeSubject.next(next);
    document.documentElement.setAttribute('data-theme', next);
  }

  setTheme(theme: Theme) {
    this.themeSubject.next(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}