import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../shared/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer" [@fadeIn]>
      <div class="footer-content">
        <div class="container">
          <!-- Main Footer -->
          <div class="footer-main">
            <div class="footer-section">
              <div class="footer-brand">
                <h3>&lt;Roban /&gt;</h3>
                <p>Full Stack Engineer | UI/UX Designer</p>
              </div>
              <p class="footer-description">
                Crafting beautiful digital experiences with modern technologies.
              </p>
            </div>

            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Experience</h4>
              <ul>
                <li><a href="#experience">Career</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Certifications</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Social</h4>
              <div class="social-links">
                <a href="https://github.com" target="_blank" rel="noopener" title="GitHub">
                  <span class="icon">🐙</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" title="LinkedIn">
                  <span class="icon">💼</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener" title="Twitter">
                  <span class="icon">𝕏</span>
                </a>
                <a href="mailto:hello@roban.dev" title="Email">
                  <span class="icon">✉️</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="footer-divider"></div>

          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <p>&copy; 2024 Roban Shrestha. All rights reserved.</p>
            <p>Built with <span class="heart">❤️</span> using Angular</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0A0E27;
      border-top: 1px solid rgba(58, 65, 88, 0.5);
      padding: 4rem 2rem 2rem;
    }

    .footer-content {
      max-width: 1280px;
      margin: 0 auto;
    }

    .container {
      width: 100%;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }

      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    .footer-section h4 {
      font-size: 1rem;
      color: #E8EAED;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .footer-brand h3 {
      font-size: 1.5rem;
      background: linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0 0 0.5rem 0;
    }

    .footer-brand p {
      color: #00D9FF;
      font-size: 0.875rem;
      margin: 0;
    }

    .footer-description {
      color: #9CA3AF;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-top: 0.5rem;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.75rem;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 200ms ease;
          font-size: 0.95rem;

          &:hover {
            color: #00D9FF;
          }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(0, 217, 255, 0.1);
        border: 1px solid #00D9FF;
        border-radius: 8px;
        color: #00D9FF;
        transition: all 200ms ease;
        text-decoration: none;

        .icon {
          font-size: 1.2rem;
        }

        &:hover {
          background: rgba(0, 217, 255, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
        }
      }
    }

    .footer-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(58, 65, 88, 0.5), transparent);
      margin: 2rem 0;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 0.875rem;
      color: #9CA3AF;

      p {
        margin: 0;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }
    }

    .heart {
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
  `],
  animations: [fadeIn]
})
export class FooterComponent {}
