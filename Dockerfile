# Development Dockerfile
FROM node:22-alpine

WORKDIR /src

# Install development dependencies
RUN npm install -g @angular/cli@latest

# Copy package files
COPY src/package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY src/ .

# Expose dev server
EXPOSE 4200

# Run development server
CMD ["npm", "start"]
