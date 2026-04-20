/**
 * Production environment configuration
 */

export const environment = {
  production: true,
  apiBaseUrl: 'https://api.example.com/api',
  apiTimeout: 30000,
  appVersion: '1.0.0',
  features: {
    animations: true,
    analytics: true,
    errorReporting: true,
    performanceMonitoring: true
  },
  cache: {
    enabled: true,
    ttl: 7200 // 2 hours
  },
  logging: {
    enabled: true,
    level: 'error'
  }
};
