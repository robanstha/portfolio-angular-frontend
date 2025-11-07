import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({ selector: '[appScrollReveal]', standalone: true })
export class ScrollRevealDirective implements AfterViewInit {
  @Input() threshold = 0.12;
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      this.el.nativeElement.classList.add('reveal');
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: this.threshold });

    io.observe(this.el.nativeElement);
  }
}
