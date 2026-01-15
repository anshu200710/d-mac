// D Mac - Corporate Color Theme
// Based on blue/white logo with accent colors

export const theme = {
  colors: {
    // Primary colors (from logo)
    primary: '#1E3A8A',      // Deep corporate blue
    primaryLight: '#3B82F6', // Lighter blue for hovers
    primaryDark: '#1E2756',  // Darker blue for depth
    
    // Neutral colors
    white: '#FFFFFF',
    offWhite: '#F8FAFC',
    lightGray: '#E2E8F0',
    mediumGray: '#94A3B8',
    darkGray: '#475569',
    charcoal: '#1E293B',
    black: '#0F172A',
    
    // Accent colors
    accent: '#06B6D4',       // Cyan accent for CTAs
    accentHover: '#0891B2',  // Darker cyan for hover states
    accentLight: '#67E8F9',  // Light cyan for highlights
    
    // Secondary accent
    gold: '#F59E0B',         // Gold for premium highlights
    goldLight: '#FCD34D',
    
    // Functional colors
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
  },
  
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
    spring: '500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    behind: -1,
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    overlay: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
  },
};

export default theme;
