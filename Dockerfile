# Multi-stage development Dockerfile with hot-reload support

# Stage 1: Base image with dependencies
FROM node:22-alpine AS base

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    git \
    curl \
    python3 \
    make \
    g++

# Copy package files
COPY src/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY src/ .

# Expose ports
EXPOSE 4200 9876

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:4200/health || exit 1 || true

# Stage 2: Development - Watch mode
FROM base AS development

# Enable file change notification
ENV CI=true

# Run Angular dev server
CMD ["npm", "start"]

# Stage 3: Testing
FROM base AS testing

RUN npm install --save-dev \
    @angular/cli@latest \
    karma \
    karma-chrome-launcher \
    karma-coverage

CMD ["npm", "test"]

# Stage 4: Production build preview
FROM base AS build-preview

RUN npm run build -- --configuration production

EXPOSE 4200

CMD ["npm", "run", "serve:ssr:angular-frontend"]
