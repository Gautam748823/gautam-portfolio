import { typography as themeTypography } from '@/styles/theme';

export const typography = {
  ...themeTypography,
  fontSize: {
    ...themeTypography.fontSize,
    display: 'clamp(2.5rem, 7vw, 5.5rem)',
  },
  letterSpacing: {
    tight: '-0.03em',
    normal: '0',
    wide: '0.08em',
  },
} as const;

export type DesignFontSizeToken = keyof typeof typography.fontSize;
export type LetterSpacingToken = keyof typeof typography.letterSpacing;
