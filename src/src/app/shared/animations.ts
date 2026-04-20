import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { ANIMATIONS } from './design-system';

const { duration, easing } = ANIMATIONS;

// ===== FADE ANIMATIONS =====
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(`${duration.base} ${easing.easeOut}`, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(`${duration.base} ${easing.easeIn}`, style({ opacity: 0 }))
  ])
]);

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(`${duration.base} ${easing.easeOut}`, style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeInDown = trigger('fadeInDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate(`${duration.base} ${easing.easeOut}`, style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

// ===== SCALE ANIMATIONS =====
export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95)' }),
    animate(`${duration.base} ${easing.spring}`, style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

// ===== STAGGER ANIMATIONS =====
export const staggerChildren = trigger('staggerChildren', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      stagger(50, [
        animate(`${duration.base} ${easing.easeOut}`, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

// ===== SLIDE ANIMATIONS =====
export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30px)' }),
    animate(`${duration.base} ${easing.easeOut}`, style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(30px)' }),
    animate(`${duration.base} ${easing.easeOut}`, style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

// ===== HOVER ANIMATIONS =====
export const hoverScale = trigger('hoverScale', [
  state('hover', style({ transform: 'scale(1.05)' })),
  state('normal', style({ transform: 'scale(1)' })),
  transition('normal <=> hover', animate(`${duration.fast} ${easing.easeOut}`))
]);

export const hoverGlow = trigger('hoverGlow', [
  state('hover', style({ 
    boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
    transform: 'translateY(-5px)'
  })),
  state('normal', style({ 
    boxShadow: '0 0 15px rgba(0, 217, 255, 0.2)',
    transform: 'translateY(0)'
  })),
  transition('normal <=> hover', animate(`${duration.fast} ${easing.easeOut}`))
]);

// ===== LOADING ANIMATION =====
export const loadingPulse = trigger('loadingPulse', [
  state('loading', style({ opacity: 0.6 })),
  state('loaded', style({ opacity: 1 })),
  transition('loading => loaded', animate(`${duration.slow}`))
]);

// ===== EXPAND ANIMATION =====
export const expandCollapse = trigger('expandCollapse', [
  state('collapsed', style({
    height: '0',
    opacity: '0',
    overflow: 'hidden'
  })),
  state('expanded', style({
    height: '*',
    opacity: '1',
    overflow: 'visible'
  })),
  transition('collapsed <=> expanded', [
    animate(`${duration.base} ${easing.easeOut}`)
  ])
]);

// ===== ROTATE ANIMATION =====
export const rotateIn = trigger('rotateIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'rotate(-10deg) scale(0.9)' }),
    animate(`${duration.base} ${easing.spring}`, style({ opacity: 1, transform: 'rotate(0deg) scale(1)' }))
  ])
]);

// ===== TEXT REVEAL =====
export const textReveal = trigger('textReveal', [
  transition(':enter', [
    style({ clipPath: 'inset(0 100% 0 0)' }),
    animate(`${duration.slow} ${easing.easeOut}`, style({ clipPath: 'inset(0 0 0 0)' }))
  ])
]);

// ===== NUMBER COUNTER =====
export const countUp = trigger('countUp', [
  transition(':enter', [
    animate(`${duration.verySlow}`, keyframes([
      style({ opacity: 0 }),
      style({ opacity: 1 })
    ]))
  ])
]);
