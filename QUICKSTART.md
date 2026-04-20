# 🎯 Quick Reference Guide - Docker Only

## Essential Commands

### Development
```bash
make help              # Show all available commands
make docker-dev       # Start dev server (http://localhost:4200)
make docker-test      # Run tests in container
make docker-lint      # Lint code in container
```

### Production
```bash
make docker-prod      # Start production server (http://localhost)
make docker-build-prod # Build production app & Docker image
```

### Docker Management
```bash
make docker-up        # Start containers (shortcut for dev)
make docker-down      # Stop containers
make docker-logs      # View logs
make docker-clean     # Remove images & volumes
make docker-ps        # List running containers
```

---

## Quick Setup

```bash
# 1. Setup (one-time, builds Docker images)
make setup

# 2. Start development
make docker-dev

# 3. Access at http://localhost:4200
```

---

## Common Tasks

### Add a New Project
Without leaving Docker:
```bash
make docker-dev-shell
# Inside container:
cd src/src/app/core/services
nano portfolio-data.service.ts
# Add your project, save (Ctrl+O, Enter, Ctrl+X)
```

Or edit locally (changes auto-reload):
- Edit: `src/src/app/core/services/portfolio-data.service.ts`

### Run Tests
```bash
make docker-test            # One-time test
make docker-test-watch      # Continuous testing
make docker-coverage        # Coverage report
```

### Update Contact Info
```bash
make docker-dev-shell
nano src/src/app/core/services/portfolio-data.service.ts
# Edit portfolioConfig section
```

### Build Production
```bash
make docker-build-prod      # Builds app & Docker image
make docker-prod            # Runs production container
```

---

## Docker Commands Reference

### With Docker Compose
```bash
# Development
docker-compose --profile dev up
docker-compose --profile dev down

# Production
docker-compose --profile prod up
docker-compose --profile prod down
```

### Manual Docker Commands
```bash
# Build images
docker build -f Dockerfile -t portfolio:dev .
docker build -f Dockerfile.prod -t portfolio:prod .

# Run containers
docker run -p 4200:4200 portfolio:dev
docker run -p 80:80 portfolio:prod

# View logs
docker logs <container-id>

# List containers
docker ps -a

# Remove images
docker rmi portfolio:dev portfolio:prod
```

---

## Deployment Quick Start

### GitHub Pages (Automatic ✨)
1. Commit and push to `main`
2. GitHub Actions builds automatically
3. Deploys to GitHub Pages automatically
4. Check: Settings → Pages to enable

### Docker Hub
```bash
docker build -f Dockerfile.prod -t your-username/portfolio:latest .
docker push your-username/portfolio:latest
docker run -p 80:80 your-username/portfolio:latest
```

### Vercel / Netlify
```bash
make docker-build-prod
# Deploy src/dist/angular-frontend/browser folder
```

---

## Troubleshooting

### Port 4200 in use
```bash
# Kill process
lsof -ti :4200 | xargs kill -9

# Or use different port (modify docker-compose.yml)
```

### Container won't start
```bash
# Check logs
make docker-logs

# Rebuild without cache
docker build --no-cache -f Dockerfile -t portfolio:dev .
```

### Slow performance
```bash
# Allocate more resources in Docker Desktop
# Settings → Resources → increase CPU/Memory
```

### Changes not reflecting
```bash
# Make sure volume is mounted in docker-compose.yml:
# - ./src:/src

# Rebuild if still not working
make docker-dev-rebuild
```

---

## File Locations

| What | Where | How to Edit |
|------|-------|------------|
| Projects | `src/src/app/core/services/portfolio-data.service.ts` | `make docker-dev-shell` + `nano` or local editor |
| Skills | Same file | Same as above |
| Images | `src/assets/` | Local file editor |
| Contact info | Same service file | Same as above |
| Styling | `src/styles.scss` | Local file editor |
| Colors | `src/styles.scss` | Change CSS variables |

---

## Performance & Size

| Item | Size |
|------|------|
| Dev image | ~900MB |
| Prod image | ~150MB |
| Built app | <500KB (gzipped) |
| Dev build time | ~30-45s |
| Prod build time | ~60-90s |
| Container startup | ~2-5s |

---

## Workflow Example

```bash
# 1. Setup (first time only)
make setup

# 2. Development
make docker-dev              # Start dev server
# Open http://localhost:4200
# Make changes, auto-reload

# 3. Test
make docker-test             # Run tests

# 4. Production build
make docker-build-prod       # Build app & image

# 5. Deploy
docker push your-registry/portfolio:latest
# Or use GitHub Pages (automatic)
```

---

## Useful Links

- [Docker Docs](https://docs.docker.com)
- [Docker Compose Docs](https://docs.docker.com/compose)
- [Angular Docs](https://angular.io)
- [GitHub Pages Docs](https://pages.github.com)

---

**Remember:** Everything runs in Docker! No local Node.js installation needed. 🐳

**Version**: 2.0 | **Last Updated**: April 19, 2026
