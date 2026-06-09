export const colors = {
  primary: '#00E5FF',
  secondary: '#FFFFFF',
  background: '#050816',
  accent: '#4DF5FF',
  muted: '#A1A1AA',
  success: '#22C55E',
  warning: '#F59E0B',
} as const;

export type ColorToken = keyof typeof colors;
