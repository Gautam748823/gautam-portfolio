export const radius = {
  none: '0',
  sm: '0.375rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

export type RadiusToken = keyof typeof radius;
