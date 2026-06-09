import { colors as themeColors } from '@/styles/theme';

export const colors = {
  electricCyan: themeColors.primary,
  cyanAccent: themeColors.accent,
  white: themeColors.secondary,
  deepBlack: '#02030A',
  commandBackground: themeColors.background,
  muted: themeColors.muted,
  success: themeColors.success,
  warning: themeColors.warning,
  transparent: 'transparent',
  surface: {
    subtle: 'rgb(255 255 255 / 0.04)',
    elevated: 'rgb(9 15 35 / 0.92)',
    glass: 'rgb(8 14 32 / 0.68)',
    success: 'rgb(34 197 94 / 0.12)',
    warning: 'rgb(245 158 11 / 0.12)',
  },
  border: {
    subtle: 'rgb(255 255 255 / 0.12)',
    strong: 'rgb(0 229 255 / 0.42)',
    success: 'rgb(34 197 94 / 0.38)',
    warning: 'rgb(245 158 11 / 0.38)',
  },
  overlay: 'rgb(2 3 10 / 0.78)',
  ambientGlow: 'rgb(0 229 255 / 0.08)',
} as const;

export type DesignColorToken = keyof typeof colors;
