import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './shared/theme.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="app-container" [class.dark-theme]="isDark$ | async">
      <!-- Navigation -->
      <nav class="nav-container">
        <div class="nav-content">
          <div class="logo">RS</div>
          <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="'Toggle ' + ((isDark$ | async) ? 'light' : 'dark') + ' theme'">
              <i class="fas" [class.fa-sun]="isDark$ | async" [class.fa-moon]="!(isDark$ | async)"></i>
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Hi, I'm <span class="accent">Robert Smith</span></h1>
            <h2>Software Engineer</h2>
            <p>Building elegant solutions to complex problems</p>
            <div class="cta-buttons">
              <a href="#projects" class="btn primary">View My Work</a>
              <a href="#contact" class="btn secondary">Get in Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="assets/profile.jpg" alt="Profile photo">
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about">
        <h2>About Me</h2>
        <div class="about-content">
          <p>
            I'm a passionate software engineer with 5+ years of experience in building modern web applications.
            I specialize in frontend development with Angular and React, creating performant and scalable solutions.
          </p>
          <div class="stats">
            <div class="stat">
              <span class="number">5+</span>
              <span class="label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="number">50+</span>
              <span class="label">Projects Completed</span>
            </div>
            <div class="stat">
              <span class="number">20+</span>
              <span class="label">Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="projects">
        <h2>Featured Projects</h2>
        <div class="project-grid">
          <div class="project-card" *ngFor="let project of projects">
            <img [src]="project.image" [alt]="project.title">
            <div class="project-info">
              <h3>{{project.title}}</h3>
              <p>{{project.description}}</p>
              <div class="tech-stack">
                <span *ngFor="let tech of project.technologies">{{tech}}</span>
              </div>
              <a [href]="project.link" class="btn secondary" target="_blank">View Project</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="skills">
        <h2>Skills & Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <h3>{{category.name}}</h3>
            <div class="skill-list">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <span class="skill-name">{{skill.name}}</span>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact">
        <h2>Get in Touch</h2>
        <div class="contact-container">
          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input type="text" [(ngModel)]="contactForm.name" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" [(ngModel)]="contactForm.email" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <textarea [(ngModel)]="contactForm.message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn primary">Send Message</button>
          </form>
          <div class="social-links">
            <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDark$: Observable<boolean>;
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: 'assets/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Angular and animations',
      image: 'assets/project3.jpg',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with interactive maps',
      image: 'assets/project4.jpg',
      technologies: ['Vue.js', 'OpenWeather API', 'Leaflet'],
      link: '#'
    }
  ];

  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 }
      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  ];

  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private themeService: ThemeService) {
    this.isDark$ = this.themeService.isDark$;
  }

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onSubmit(): void {
    console.log('Form submitted:', this.contactForm);
    // Implement form submission logic
  }
}
