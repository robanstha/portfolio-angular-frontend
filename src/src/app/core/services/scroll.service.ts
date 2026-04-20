import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScrollTarget } from '../models/portfolio.models';

/**
 * ScrollService
 * Manages scroll behavior, navigation, and scroll progress tracking
 */
@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly scrollProgressSubject = new BehaviorSubject<number>(0);
  private readonly activeScrollTargetSubject = new BehaviorSubject<string>('home');
  private readonly scrollTargetsSubject = new BehaviorSubject<ScrollTarget[]>([
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]);

  readonly scrollProgress$ = this.scrollProgressSubject.asObservable();
  readonly activeScrollTarget$ = this.activeScrollTargetSubject.asObservable();
  readonly scrollTargets$ = this.scrollTargetsSubject.asObservable();

  constructor() {
    this.initializeScrollListener();
  }

  /**
   * Initialize scroll event listener
   */
  private initializeScrollListener(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.updateScrollProgress());
    }
  }

  /**
   * Update scroll progress percentage
   */
  private updateScrollProgress(): void {
    if (typeof window === 'undefined') return;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const scrollPercent = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;

    this.scrollProgressSubject.next(scrollPercent);
    this.updateActiveTarget();
  }

  /**
   * Update active scroll target based on viewport position
   */
  private updateActiveTarget(): void {
    const scrollTargets = this.scrollTargetsSubject.value;
    const threshold = 150;

    for (const target of scrollTargets) {
      const element = document.getElementById(target.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          this.activeScrollTargetSubject.next(target.id);
          break;
        }
      }
    }
  }

  /**
   * Scroll to section smoothly
   */
  scrollToSection(sectionId: string, offset: number = 80): void {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const top = element.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });

    // Update URL hash
    history.pushState({}, '', `#${sectionId}`);
    this.activeScrollTargetSubject.next(sectionId);
  }

  /**
   * Get scroll progress
   */
  getScrollProgress(): Observable<number> {
    return this.scrollProgress$;
  }

  /**
   * Get active scroll target
   */
  getActiveScrollTarget(): Observable<string> {
    return this.activeScrollTarget$;
  }

  /**
   * Get all scroll targets
   */
  getScrollTargets(): Observable<ScrollTarget[]> {
    return this.scrollTargets$;
  }

  /**
   * Add new scroll target
   */
  addScrollTarget(target: ScrollTarget): void {
    const current = this.scrollTargetsSubject.value;
    if (!current.find(t => t.id === target.id)) {
      this.scrollTargetsSubject.next([...current, target]);
    }
  }

  /**
   * Check if element is in viewport
   */
  isElementInViewport(element: HTMLElement): boolean {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
