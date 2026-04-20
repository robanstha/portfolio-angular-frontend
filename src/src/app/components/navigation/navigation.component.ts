import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { fadeIn, slideInDown } from '../../shared/animations';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled" [@slideInDown]>
      <div class="navbar-container">
        <!-- Logo -->
        <a href="#" class="logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">Roban</span>
          <span class="logo-bracket">/&gt;</span>
        </a>

        <!-- Hamburger Menu -->
        <button 
          class="hamburger" 
          [class.active]="mobileMenuOpen"
          (click)="toggleMobileMenu()"
          [@fadeIn]
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Desktop Navigation -->
        <ul class="nav-links" [class.mobile-open]="mobileMenuOpen">
          <li><a href="#hero" (click)="scrollTo('hero')">Home</a></li>
          <li><a href="#about" (click)="scrollTo('about')">About</a></li>
          <li><a href="#skills" (click)="scrollTo('skills')">Skills</a></li>
          <li><a href="#projects" (click)="scrollTo('projects')">Projects</a></li>
          <li><a href="#experience" (click)="scrollTo('experience')">Experience</a></li>
          <li><a href="#contact" (click)="scrollTo('contact')">Contact</a></li>
        </ul>

        <!-- CTA Button -->
        <button class="btn btn-primary" (click)="scrollTo('contact')">
          Get In Touch
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
      border-bottom: 1px solid transparent;
      transition: all 300ms ease-out;
      padding: 1rem 0;
    }

    .navbar.scrolled {
      background: rgba(10, 14, 39, 0.8);
      border-bottom-color: rgba(58, 65, 88, 0.5);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transition: transform 200ms ease;
      text-decoration: none;

      &:hover {
        transform: scale(1.05);
      }
    }

    .logo-bracket {
      color: #00D9FF;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      align-items: center;
      margin: 0;
      padding: 0;

      li a {
        color: #E8EAED;
        font-weight: 500;
        transition: color 200ms ease;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #00D9FF;
          transition: width 200ms ease;
        }

        &:hover {
          color: #00D9FF;

          &::after {
            width: 100%;
          }
        }
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;

      span {
        width: 24px;
        height: 3px;
        background: #E8EAED;
        border-radius: 2px;
        transition: all 300ms ease;
      }

      &.active span {
        &:nth-child(1) {
          transform: rotate(45deg) translateY(12px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translateY(-12px);
        }
      }
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      .navbar-container {
        padding: 0 1rem;
      }

      .hamburger {
        display: flex;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        gap: 1rem;
        background: rgba(10, 14, 39, 0.95);
        border-bottom: 1px solid rgba(58, 65, 88, 0.5);
        padding: 2rem;
        max-height: 0;
        overflow: hidden;
        transition: max-height 300ms ease;

        &.mobile-open {
          max-height: 500px;
        }

        li a {
          display: block;
          padding: 0.75rem 0;
        }
      }

      .btn {
        display: none;
      }

      .nav-links.mobile-open + .btn {
        display: inline-flex;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
      }
    }
  `],
  animations: [fadeIn, slideInDown]
})
export class NavigationComponent implements OnInit {
  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollTo(section: string) {
    this.mobileMenuOpen = false;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
