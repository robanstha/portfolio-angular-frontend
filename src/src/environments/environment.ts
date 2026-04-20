/**
 * Environment configuration
 * Dynamically loaded based on NODE_ENV
 */

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api',
  apiTimeout: 30000,
  appVersion: '1.0.0',
  features: {
    animations: true,
    analytics: false,
    errorReporting: false,
    performanceMonitoring: false
  },
  cache: {
    enabled: true,
    ttl: 3600 // 1 hour
  },
  logging: {
    enabled: true,
    level: 'debug'
  }
};
