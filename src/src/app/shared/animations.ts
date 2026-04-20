/**
 * Animation utilities for reusable Angular animations
 * Provides common fade, slide, and scale animations
 */

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

/**
 * Fade in animation
 */
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease-out', style({ opacity: 1 }))
  ])
]);

/**
 * Fade in up animation (commonly used for entrance)
 */
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('600ms 0.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

/**
 * Fade out animation
 */
export const fadeOut = trigger('fadeOut', [
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0 }))
  ])
]);

/**
 * Slide in from left
 */
export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-40px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

/**
 * Slide in from right
 */
export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(40px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

/**
 * Slide in from top
 */
export const slideInDown = trigger('slideInDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-40px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

/**
 * Text reveal animation
 */
export const textReveal = trigger('textReveal', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('800ms 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

/**
 * Scale up animation
 */
export const scaleUp = trigger('scaleUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

/**
 * Hover scale animation
 */
export const hoverScale = trigger('hoverScale', [
  state('normal', style({ transform: 'scale(1)' })),
  state('hover', style({ transform: 'scale(1.05)' })),
  transition('normal <=> hover', animate('300ms ease-in-out'))
]);

/**
 * Hover glow animation (typically for cards)
 */
export const hoverGlow = trigger('hoverGlow', [
  state('normal', style({ 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
  })),
  state('hover', style({ 
    boxShadow: '0 12px 24px rgba(255, 107, 53, 0.3)' 
  })),
  transition('normal <=> hover', animate('300ms ease-in-out'))
]);

/**
 * Pulse animation
 */
export const pulse = trigger('pulse', [
  transition(':enter', [
    animate('2s infinite', keyframes([
      style({ opacity: 1, offset: 0 }),
      style({ opacity: 0.5, offset: 0.5 }),
      style({ opacity: 1, offset: 1 })
    ]))
  ])
]);

/**
 * Stagger animation for lists
 */
export const staggerAnimation = trigger('stagger', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('50ms', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

/**
 * Rotate animation
 */
export const rotate = trigger('rotate', [
  state('normal', style({ transform: 'rotate(0deg)' })),
  state('rotate', style({ transform: 'rotate(360deg)' })),
  transition('normal => rotate', animate('1s linear'))
]);

/**
 * Bounce animation
 */
export const bounce = trigger('bounce', [
  transition(':enter', [
    animate('0.6s', keyframes([
      style({ transform: 'translateY(0)', offset: 0 }),
      style({ transform: 'translateY(-20px)', offset: 0.5 }),
      style({ transform: 'translateY(0)', offset: 1 })
    ]))
  ])
]);
