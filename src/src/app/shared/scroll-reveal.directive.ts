import { Directive, ElementRef, Input, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[appScrollReveal]', standalone: true })
export class ScrollRevealDirective implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  @Input() threshold = 0.12;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.el.nativeElement.classList.add('reveal');
      return;
    }

    // Check for IntersectionObserver support
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: this.threshold });

      io.observe(this.el.nativeElement);
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      this.el.nativeElement.classList.add('reveal');
    }
  }
}
