// D Mac - Futuristic High-Tech Theme
// Neon accents, cyber aesthetic, dark mode focused

export const theme = {
  colors: {
    // Primary colors - Deep cyber blue
    primary: '#0A1628',       // Deep space blue
    primaryLight: '#1E3A5F',  // Lighter blue for cards
    primaryDark: '#050D18',   // Almost black
    
    // Neon accent colors
    neonCyan: '#00F5FF',      // Primary neon cyan
    neonBlue: '#00D4FF',      // Electric blue
    neonPurple: '#A855F7',    // Neon purple
    neonPink: '#F472B6',      // Neon pink accent
    neonGreen: '#00FF88',     // Matrix green
    
    // Neutral colors
    white: '#FFFFFF',
    offWhite: '#E2E8F0',
    lightGray: '#94A3B8',
    mediumGray: '#64748B',
    darkGray: '#334155',
    charcoal: '#1E293B',
    black: '#0A0A0F',
    
    // Accent colors
    accent: '#00F5FF',        // Primary cyan accent
    accentHover: '#00D4FF',   // Hover state
    accentLight: '#67E8F9',   // Light cyan for highlights
    
    // Glow colors (with alpha)
    glowCyan: 'rgba(0, 245, 255, 0.5)',
    glowBlue: 'rgba(0, 212, 255, 0.4)',
    glowPurple: 'rgba(168, 85, 247, 0.4)',
    
    // Functional colors
    success: '#00FF88',
    error: '#FF3366',
    warning: '#FFB800',
  },
  
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
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
    neonCyan: '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3)',
    neonBlue: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)',
    neonPurple: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
  },
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
