import { spacing as themeSpacing } from '@/styles/theme';

export const spacing = {
  ...themeSpacing,
  '4xl': '6rem',
  '5xl': '8rem',
} as const;

export type DesignSpacingToken = keyof typeof spacing;
