// Design system constants
export const COLORS = {
  // Primary palette
  primary: '#00D9FF',        // Cyan accent
  secondary: '#7C3AED',      // Purple
  accent: '#FF006E',         // Pink
  
  // Neutral palette (Dark mode)
  dark: {
    bg: '#0A0E27',           // Very dark navy
    surface: '#1A1F3A',      // Dark surface
    surfaceAlt: '#252B45',   // Alternative surface
    border: '#3A4158',       // Border color
    text: '#E8EAED',         // Primary text
    textSecondary: '#9CA3AF', // Secondary text
  },
  
  // Light mode
  light: {
    bg: '#FFFFFF',
    surface: '#F8FAFC',
    surfaceAlt: '#F1F5F9',
    border: '#E2E8F0',
    text: '#1E293B',
    textSecondary: '#64748B',
  }
};

export const TYPOGRAPHY = {
  fontFamily: {
    display: '"Sohne", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    code: '"JetBrains Mono", "Courier New", monospace',
  },
  sizes: {
    h1: { size: '3.5rem', weight: 700, lineHeight: 1.1 },
    h2: { size: '2.5rem', weight: 600, lineHeight: 1.2 },
    h3: { size: '1.875rem', weight: 600, lineHeight: 1.3 },
    h4: { size: '1.5rem', weight: 600, lineHeight: 1.4 },
    body: { size: '1rem', weight: 400, lineHeight: 1.6 },
    small: { size: '0.875rem', weight: 400, lineHeight: 1.5 },
  }
};

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
};

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultraWide: '1536px',
};

export const ANIMATIONS = {
  duration: {
    fast: '200ms',
    base: '300ms',
    slow: '500ms',
    verySlow: '800ms',
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  }
};

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  glow: '0 0 20px rgba(0, 217, 255, 0.3)',
  glowPurple: '0 0 20px rgba(124, 58, 237, 0.3)',
};
