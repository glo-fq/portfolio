export const defaultTheme = {
  colors: {
    background: 'rgba(10, 10, 10, 1)',
    foreground: 'rgba(250, 250, 250, 1)',

    card: 'rgba(10, 10, 10, 1)',
    cardForeground: 'rgba(250, 250, 250, 1)',

    popover: 'rgba(10, 10, 10, 1)',
    popoverForeground: 'rgba(250, 250, 250, 1)',

    primary: 'rgba(250, 250, 250, 1)',
    primaryForeground: 'rgba(26, 26, 26, 1)',

    secondary: 'rgba(20, 20, 20, 1)',
    secondaryForeground: 'rgba(250, 250, 250, 1)',

    muted: 'rgba(20, 20, 20, 1)',
    mutedForeground: 'rgba(166, 166, 166, 1)',

    accent: 'rgba(20, 20, 20, 1)',
    accentForeground: 'rgba(250, 250, 250, 1)',

    destructive: 'rgba(200, 0, 0, 1)',
    destructiveForeground: 'rgba(255, 230, 230, 1)',

    border: 'rgba(20, 20, 20, 1)',
    input: 'rgba(20, 20, 20, 1)',
    ring: 'rgba(100, 100, 100, 1)',

    chart1: 'rgba(60, 120, 180, 1)',
    chart2: 'rgba(40, 160, 140, 1)',
    chart3: 'rgba(120, 60, 140, 1)',
    chart4: 'rgba(200, 80, 200, 1)',
    chart5: 'rgba(160, 40, 120, 1)',

    sidebarBackground: 'rgba(26, 26, 26, 1)',
    sidebarForeground: 'rgba(244, 244, 244, 1)',
    sidebarPrimary: 'rgba(128, 0, 255, 1)',
    sidebarPrimaryForeground: 'rgba(255, 255, 255, 1)',
    sidebarAccent: 'rgba(20, 20, 20, 1)',
    sidebarAccentForeground: 'rgba(244, 244, 244, 1)',
    sidebarBorder: 'rgba(20, 20, 20, 1)',
    sidebarRing: 'rgba(100, 100, 100, 1)',

    gradientToT: 'linear-gradient(to top, var(--tw-gradient-stops))',
    gradientToTr: 'linear-gradient(to top right, var(--tw-gradient-stops))',
    gradientToR: 'linear-gradient(to right, var(--tw-gradient-stops))',
    gradientToBr: 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
    gradientToB: 'linear-gradient(to bottom, var(--tw-gradient-stops))',
    gradientToBl: 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
    gradientToL: 'linear-gradient(to left, var(--tw-gradient-stops))',
    gradientToTl: 'linear-gradient(to top left, var(--tw-gradient-stops))',
  },
  spacing: {
    padding: '1rem',
    margin: '1rem',
  },
  shadow: {
    sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0px 4px 6px rgba(0, 0, 0, 0.1)',
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
    '8xl': '6rem',
    '9xl': '8rem',
  },
  radius: {
    none: '0px',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  animations: {
    none: 'none',
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite',
  },
  aspectRatios: {
    auto: 'auto',
    square: '1 / 1',
    video: '16 / 9',
  },
};
