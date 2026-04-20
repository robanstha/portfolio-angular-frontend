# 🚀 Portfolio - Angular Frontend

A modern, production-ready portfolio website built with Angular 19, TypeScript, and Docker. Features responsive design, dark mode, smooth animations, and optimized performance.

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Alpine-2496ED?style=for-the-badge&logo=docker)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Dark/Light Theme** - Toggle between themes with smooth transitions
- ✅ **Smooth Animations** - CSS animations and Angular transitions
- ✅ **Performance Optimized** - AOT compilation, lazy loading, code splitting
- ✅ **Accessibility** - WCAG compliant, semantic HTML, ARIA labels
- ✅ **SEO Ready** - Meta tags, structured data, sitemap

### Technical Features
- 🎯 **Standalone Components** - Modern Angular architecture
- 🔄 **Reactive Programming** - RxJS observables throughout
- 📦 **Modular Services** - Clean separation of concerns
- 🐳 **Docker Ready** - Dev and production Dockerfiles
- 🚀 **CI/CD Pipeline** - GitHub Actions workflow
- 🧪 **Testing Setup** - Unit and E2E test configuration

---

## 📋 Prerequisites

- **Docker** >= 20.x
- **Docker Compose** >= 2.x  
- **Git** for version control

### Verify Installation
```bash
docker --version    # Docker version 20.x or higher
docker-compose --version # Docker Compose version 2.x or higher
git --version       # Git (any recent version)
```

**Note:** No local Node.js installation needed! Everything runs inside Docker containers.

---

## 🚀 Quick Start

### Prerequisites

- **Docker** >= 20.x
- **Docker Compose** >= 2.x
- **Git** for version control

That's it! No need to install Node.js locally.

### Verify Installation
```bash
docker --version    # Docker version 20.x or higher
docker-compose --version # Docker Compose version 2.x or higher
```

### 1. Clone the Repository
```bash
git clone https://github.com/robanstha/portfolio-angular-frontend.git
cd portfolio-angular-frontend
```

### 2. Development (Everything in Docker)

#### Option A: Using Make (Recommended)
```bash
make setup                # Setup Docker images (one time)
make docker-dev         # Start development server
# Open http://localhost:4200 in your browser
```

#### Option B: Using Docker Compose Directly
```bash
# Build images
docker-compose --profile dev build

# Start development
docker-compose --profile dev up

# Access http://localhost:4200
```

#### Option C: Manual Docker
```bash
# Build dev image
docker build -f Dockerfile -t portfolio:dev .

# Run container
docker run -p 4200:4200 -v $(pwd)/src:/src portfolio:dev
```

### 3. Production Build & Deployment

#### Using Make
```bash
make docker-build        # Build production image
make docker-prod         # Run production container
# Access http://localhost
```

#### Using Docker Compose
```bash
docker-compose --profile prod build
docker-compose --profile prod up
```

#### Push to Docker Hub
```bash
docker tag portfolio:prod your-username/portfolio:latest
docker push your-username/portfolio:latest
```

---

## 📁 Project Structure

```
portfolio-angular-frontend/
├── src/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/          # UI components
│   │   │   │   ├── header/
│   │   │   │   ├── hero/
│   │   │   │   ├── projects/
│   │   │   │   ├── skills/
│   │   │   │   ├── contact/
│   │   │   │   └── footer/
│   │   │   ├── core/                # Core services & models
│   │   │   │   ├── models/
│   │   │   │   └── services/
│   │   │   ├── shared/              # Shared utilities
│   │   │   │   ├── directives/
│   │   │   │   ├── pipes/
│   │   │   │   └── services/
│   │   │   ├── app.component.ts     # Root component
│   │   │   ├── app.routes.ts        # Route configuration
│   │   │   └── app.config.ts        # App configuration
│   │   ├── styles/                  # Global styles
│   │   ├── assets/                  # Static assets
│   │   ├── main.ts                  # Entry point
│   │   └── index.html               # HTML template
│   ├── angular.json                 # Angular CLI config
│   ├── package.json                 # Dependencies
│   └── tsconfig.json                # TypeScript config
├── Dockerfile                       # Dev container
├── Dockerfile.prod                  # Production container
├── docker-compose.yml               # Docker Compose config
├── nginx.conf                       # Nginx configuration
├── .github/workflows/               # CI/CD pipelines
├── .dockerignore                    # Docker ignore patterns
├── .gitignore                       # Git ignore patterns
└── README.md                        # This file
```

---

## 🔧 Available Commands

### Development (Docker)
```bash
make docker-dev          # Start dev server
make docker-dev-build    # Build dev image
make docker-test         # Run tests in container
make docker-lint         # Lint code in container
make docker-coverage     # Generate coverage in container
```

### Production (Docker)
```bash
make docker-prod         # Start production server
make docker-build-prod   # Build production app & image
make docker-analyze      # Analyze bundle size
```

### Docker Management
```bash
make docker-build        # Build all images
make docker-down         # Stop all containers
make docker-logs         # View container logs
make docker-clean        # Remove images & volumes
make docker-ps           # List running containers
```

### Shortcuts
```bash
make help                # Show all commands
make start               # Alias for docker-dev
make dev                 # Alias for docker-dev
make prod                # Alias for docker-prod
make build               # Alias for docker-build-prod
```

---

## 🎨 Configuration

### Environment Variables
Create `.env` file in `src/` directory (optional):

```env
# API Configuration
NG_APP_API_URL=http://localhost:3000/api
NG_APP_TIMEOUT=30000

# Feature Flags
NG_APP_ANALYTICS=false
NG_APP_ERROR_REPORTING=false

# App Settings
NG_APP_VERSION=1.0.0
NG_APP_ENVIRONMENT=development
```

### Theme Configuration
The app comes with light/dark theme support. Customize in:
- `src/styles.scss` - Global CSS variables
- `src/app/shared/theme.service.ts` - Theme logic

### Portfolio Data
Update your portfolio information in Docker container:
```bash
make docker-dev-shell    # Opens shell in running container
# Edit files inside the container using nano or vi
```

Or mount the source directory and edit locally:
- Source files are at: `src/src/app/core/services/portfolio-data.service.ts`
- Images at: `src/assets/`

Changes will automatically reload in development mode.

---

## 🧪 Testing

### Running Tests in Docker
```bash
# One-time test run
make docker-test

# Watch mode (continuous testing)
make docker-test-watch

# Generate coverage report
make docker-coverage
```

Tests run inside the Docker container automatically.

---

## 📊 Performance Optimization

The application includes several optimizations:

1. **Ahead-of-Time (AOT) Compilation** - Enabled by default
2. **Code Splitting** - Lazy-loaded modules
3. **Tree Shaking** - Unused code removal
4. **CSS/JS Minification** - Production build optimization
5. **Image Optimization** - Responsive images with proper formats
6. **Lazy Loading** - Components loaded on-demand
7. **Change Detection** - OnPush strategy where applicable
8. **Docker Multi-stage Build** - Optimized production image

### Build Stats (in Docker)
```bash
make docker-analyze    # Analyze bundle size in container
```

---

## 🚀 Deployment

### Docker Deployment
```bash
# Build production image
make docker-build-prod

# Or manually
docker build -f Dockerfile.prod -t portfolio:latest .

# Push to Docker Hub
docker tag portfolio:latest your-username/portfolio:latest
docker push your-username/portfolio:latest

# Deploy using Docker
docker run -d -p 80:80 your-username/portfolio:latest
```

### GitHub Pages (Automatic)
The CI/CD pipeline automatically deploys to GitHub Pages on every push to `main` branch:

1. Commit and push to `main`
2. GitHub Actions builds your app
3. Automatically deployed to `https://yourusername.github.io/portfolio-angular-frontend`

**Enable GitHub Pages:**
1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Set "Source" to "GitHub Actions"
4. Done! It will deploy automatically

### Kubernetes Deployment
```bash
# Create deployment
kubectl apply -f k8s/deployment.yaml

# View deployment
kubectl get deployments
kubectl get pods
```

### Cloud Platforms

#### Vercel (Static Hosting)
```bash
# Build first
make docker-build-prod

# Deploy dist folder to Vercel
vercel deploy --prod src/dist/angular-frontend/browser
```

#### Netlify
```bash
# Build
make docker-build-prod

# Deploy dist folder
netlify deploy --prod --dir=src/dist/angular-frontend/browser
```

#### AWS S3 + CloudFront
```bash
# Build
make docker-build-prod

# Deploy
aws s3 sync src/dist/angular-frontend/browser s3://your-bucket-name
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

#### Docker Swarm or Kubernetes
Use the production Docker image with orchestration platforms.

---

## 🔒 Security

The application includes several security features:

- ✅ **HTTPS Ready** - Production build compatible with HTTPS
- ✅ **Security Headers** - X-Frame-Options, CSP, HSTS
- ✅ **XSS Protection** - Angular's built-in XSS protection
- ✅ **CSRF Tokens** - Support for CSRF protection
- ✅ **Dependency Auditing** - Regular security scans
- ✅ **Docker Security** - Non-root user, minimal image

---

## 📚 Component Documentation

### Available Components

#### Header Component
Navigation bar with logo and links.
- Props: `stickyMode`, `showThemeToggle`
- Events: `navigationClick`, `themeToggle`

#### Hero Component
Landing section with introduction.
- Props: `name`, `title`, `description`
- Slots: `cta-buttons`, `image`

#### Projects Component
Showcase of portfolio projects.
- Input: `projects` (Observable<Project[]>)
- Output: `projectSelected`

#### Skills Component
Display of technical skills.
- Input: `skills` (Observable<SkillCategory[]>)
- Features: Skill level visualization

#### Contact Form
Contact form with validation.
- Methods: `submit()`, `validate()`
- Validators: Email, required fields

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Use TypeScript strict mode
- Follow Angular style guide
- Write meaningful commit messages
- Add unit tests for new features

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Port 4200 already in use**
```bash
# Use a different port
ng serve --port 4201
```

**Issue: Dependencies installation fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Docker build fails**
```bash
# Build without cache
docker build --no-cache -f Dockerfile.prod -t portfolio:prod .
```

**Issue: Images not loading**
- Verify `src/assets/` folder exists
- Check image paths in components
- Ensure images are properly referenced

---

## 📈 Performance Metrics

Target performance metrics:
- **Lighthouse Score**: 95+
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Bundle Size**: < 500KB (gzipped)

Check performance:
```bash
# Generate Lighthouse report
npm install -g lighthouse
lighthouse https://your-portfolio.com --view
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Rajan Shrestha**
- GitHub: [@robanstha](https://github.com/robanstha)
- Email: [rajan@example.com](mailto:rajan@example.com)
- Portfolio: [robanstha.com](https://robanstha.com)

---

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Open source community for amazing libraries
- Contributors and reviewers

---

## 📞 Support

For support, email support@example.com or open an issue in the repository.

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
