import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { fadeInUp, textReveal } from '../../shared/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <!-- Animated background -->
      <div class="hero-background">
        <div class="gradient-orb grad-1"></div>
        <div class="gradient-orb grad-2"></div>
        <div class="gradient-orb grad-3"></div>
        <div class="grid"></div>
      </div>

      <!-- Content -->
      <div class="hero-content">
        <div class="hero-text" [@fadeInUp]>
          <div class="badge">👋 Welcome to my portfolio</div>
          
          <h1 class="hero-title">
            <span class="title-line" [@textReveal]>
              Full Stack Software
            </span>
            <span class="title-line gradient" [@textReveal]>
              Engineer & UI/UX Designer
            </span>
          </h1>

          <p class="hero-subtitle">
            I craft beautiful, performant digital experiences. Specializing in modern web technologies,
            scalable architectures, and delightful user interfaces.
          </p>

          <div class="hero-cta">
            <button class="btn btn-primary" (click)="scrollToSection('contact')">
              Start a Project
              <span class="arrow">→</span>
            </button>
            <button class="btn btn-secondary" (click)="scrollToSection('projects')">
              View My Work
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>

        <!-- Floating code card -->
        <div class="hero-visual" [@fadeInUp]>
          <div class="code-card">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre><code>{{ codeSnippet }}</code></pre>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <span>Scroll to explore</span>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 6rem 2rem 2rem;
      overflow: hidden;
      margin-top: 60px;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      overflow: hidden;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      animation: float 20s infinite ease-in-out;
    }

    .grad-1 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, #00D9FF 0%, transparent 70%);
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .grad-2 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, #7C3AED 0%, transparent 70%);
      top: 50%;
      right: 5%;
      animation-delay: 2s;
    }

    .grad-3 {
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, #FF006E 0%, transparent 70%);
      bottom: 10%;
      left: 30%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(30px, -30px); }
      50% { transform: translate(-20px, 20px); }
      75% { transform: translate(20px, 30px); }
    }

    .grid {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image:
        linear-gradient(rgba(58, 65, 88, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(58, 65, 88, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.5;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      max-width: 1280px;
      margin: 0 auto;
      z-index: 1;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .hero-text {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .badge {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: rgba(0, 217, 255, 0.1);
      border: 1px solid #00D9FF;
      border-radius: 50px;
      color: #00D9FF;
      font-size: 0.875rem;
      font-weight: 600;
      width: fit-content;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: #E8EAED;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 2.25rem;
      }
    }

    .title-line {
      display: block;
      overflow: hidden;

      &.gradient {
        background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .hero-subtitle {
      font-size: 1.125rem;
      color: #9CA3AF;
      line-height: 1.8;
      max-width: 500px;
      margin: 0;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 300ms ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
      color: #0A0E27;
      box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba(0, 217, 255, 0.6);
      }
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid #00D9FF;
      color: #00D9FF;

      &:hover {
        background: rgba(0, 217, 255, 0.1);
      }
    }

    .arrow {
      transition: transform 200ms ease;
    }

    .btn-primary:hover .arrow {
      transform: translateX(4px);
    }

    .hero-stats {
      display: flex;
      gap: 3rem;
      margin-top: 2rem;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
      }
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 0.875rem;
      color: #9CA3AF;
    }

    .hero-visual {
      position: relative;
    }

    .code-card {
      background: rgba(26, 31, 58, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(58, 65, 88, 0.5);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      animation: float-card 6s ease-in-out infinite;

      @media (max-width: 1024px) {
        display: none;
      }
    }

    @keyframes float-card {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    .code-header {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;

      &.red { background: #FF5F56; }
      &.yellow { background: #FFBD2E; }
      &.green { background: #27C93F; }
    }

    pre {
      margin: 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
      color: #00D9FF;
      overflow-x: auto;
      line-height: 1.6;
    }

    code {
      background: none;
      padding: 0;
      border-radius: 0;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      color: #9CA3AF;
      animation: bounce 2s ease-in-out infinite;
    }

    .mouse {
      width: 24px;
      height: 40px;
      border: 2px solid #00D9FF;
      border-radius: 12px;
      position: relative;
    }

    .wheel {
      width: 3px;
      height: 8px;
      background: #00D9FF;
      border-radius: 2px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll-wheel 2s ease-in-out infinite;
    }

    @keyframes scroll-wheel {
      0%, 100% { opacity: 0; transform: translateX(-50%) translateY(0); }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { opacity: 0; transform: translateX(-50%) translateY(12px); }
    }

    @keyframes bounce {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `],
  animations: [fadeInUp, textReveal]
})
export class HeroComponent implements OnInit {
  codeSnippet = `const buildMagic = () => {
  return {
    design: "world-class",
    performance: "blazing-fast",
    experience: "delightful"
  }
}`;

  ngOnInit() {}

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
