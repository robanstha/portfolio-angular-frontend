.PHONY: help install build start test clean docker-build docker-up docker-down lint

# Variables
DOCKER_IMAGE := portfolio
DOCKER_DEV_IMAGE := $(DOCKER_IMAGE):dev
DOCKER_PROD_IMAGE := $(DOCKER_IMAGE):prod
NODE_VERSION := 22

help: ## Show this help message
	@echo '╔════════════════════════════════════════════════════════════════╗'
	@echo '║     Portfolio Angular Frontend - Docker-Only Makefile           ║'
	@echo '╚════════════════════════════════════════════════════════════════╝'
	@echo ''
	@echo '🐳 Everything runs in Docker. No local Node.js installation needed!'
	@echo ''
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ''

# Docker-Only Development
docker-dev: ## 🚀 Start development environment (Docker)
	@echo "Starting development environment..."
	docker-compose --profile dev up

docker-dev-build: ## Build development Docker image
	@docker build -f Dockerfile -t $(DOCKER_DEV_IMAGE) .
	@echo "✓ Built $(DOCKER_DEV_IMAGE)"

docker-dev-rebuild: ## Rebuild dev Docker image (no cache)
	@docker build --no-cache -f Dockerfile -t $(DOCKER_DEV_IMAGE) .
	@echo "✓ Rebuilt $(DOCKER_DEV_IMAGE)"

docker-dev-shell: ## Open shell in running dev container
	@docker-compose exec app-dev sh

# Docker-Only Production
docker-prod: ## 🚀 Start production environment (Docker)
	@echo "Starting production environment..."
	docker-compose --profile prod up

docker-prod-build: ## Build production Docker image
	@docker build -f Dockerfile.prod -t $(DOCKER_PROD_IMAGE) .
	@echo "✓ Built $(DOCKER_PROD_IMAGE)"

docker-prod-rebuild: ## Rebuild prod Docker image (no cache)
	@docker build --no-cache -f Dockerfile.prod -t $(DOCKER_PROD_IMAGE) .
	@echo "✓ Rebuilt $(DOCKER_PROD_IMAGE)"

docker-prod-shell: ## Open shell in running prod container
	@docker-compose --profile prod exec app-prod sh

# Docker Management
docker-build: docker-dev-build docker-prod-build ## Build all Docker images

docker-build-all: docker-dev-rebuild docker-prod-rebuild ## Rebuild all Docker images (no cache)

docker-up: docker-dev ## Alias for docker-dev (start dev)

docker-down: ## Stop all Docker containers
	@docker-compose down
	@echo "✓ Stopped all containers"

docker-logs: ## View Docker Compose logs
	@docker-compose logs -f

docker-logs-dev: ## View dev container logs
	@docker-compose --profile dev logs -f app-dev

docker-logs-prod: ## View prod container logs
	@docker-compose --profile prod logs -f app-prod

docker-ps: ## List running containers
	@docker ps

docker-clean: ## Remove Docker images, containers, and volumes
	@docker-compose down -v
	@docker rmi $(DOCKER_DEV_IMAGE) $(DOCKER_PROD_IMAGE) 2>/dev/null || true
	@echo "✓ Cleaned Docker resources"

docker-prune: ## Prune unused Docker resources
	@docker system prune -f
	@echo "✓ Pruned Docker system"

# Docker Testing
docker-test: ## Run tests in Docker container
	@docker-compose --profile dev run --rm app-dev npm test -- --watch=false

docker-test-watch: ## Run tests in watch mode in Docker
	@docker-compose --profile dev run --rm app-dev npm test

docker-lint: ## Lint code in Docker
	@docker-compose --profile dev run --rm app-dev npm run lint || echo "Linting not configured"

docker-coverage: ## Generate coverage report in Docker
	@docker-compose --profile dev run --rm app-dev npm test -- --code-coverage --watch=false

# Docker Building
docker-build-prod: ## Build production app in Docker
	@docker-compose --profile dev run --rm app-dev npm run build -- --configuration production

docker-analyze: ## Analyze bundle size in Docker
	@docker-compose --profile dev run --rm app-dev npm run build -- --configuration production --stats-json

# Docker Publish
docker-publish: docker-prod-build ## Build and prepare for Docker Hub
	@echo "Image ready: $(DOCKER_PROD_IMAGE)"
	@echo "Tag with: docker tag $(DOCKER_PROD_IMAGE) your-username/portfolio:latest"
	@echo "Push with: docker push your-username/portfolio:latest"

# Setup
setup-docker: docker-dev-build docker-prod-build ## Setup Docker environment
	@echo "✓ Docker environment ready!"
	@echo "Run 'make docker-dev' to start development"

setup: setup-docker ## Alias for setup-docker

# Utility
clean: docker-clean ## Clean all Docker resources

clean-all: docker-clean ## Deep clean (same as clean)

help-docker: help ## Show Docker commands only

status: ## Show Docker status
	@echo "Docker Containers:"
	@docker ps -a
	@echo ""
	@echo "Docker Images:"
	@docker images | grep portfolio || echo "No portfolio images built yet"

# Shortcuts
start: docker-dev ## Start development (shortcut)
dev: docker-dev ## Start development (shortcut)
prod: docker-prod ## Start production (shortcut)
build: docker-build-prod ## Build production (shortcut)

.DEFAULT_GOAL := help

# Color output
.SILENT: help

