import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollProgressService {
  private readonly platformId = inject(PLATFORM_ID);
  scrollProgress$ = new BehaviorSubject<number>(0);

  constructor(private ngZone: NgZone) {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', this.onScroll, { passive: true });
      });
    }
  }

  private onScroll = () => {
    if (!isPlatformBrowser(this.platformId)) return;

    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
    this.ngZone.run(() => this.scrollProgress$.next(progress));
  };
}
