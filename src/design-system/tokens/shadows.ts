import { shadows as themeShadows } from '@/styles/theme';

export const shadows = {
  ...themeShadows,
  floating: '0 24px 64px rgb(0 0 0 / 0.42)',
  inset: 'inset 0 1px 0 rgb(255 255 255 / 0.08)',
} as const;

export type DesignShadowToken = keyof typeof shadows;
