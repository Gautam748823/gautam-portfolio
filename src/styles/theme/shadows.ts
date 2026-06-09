export const shadows = {
  none: 'none',
  subtle: '0 4px 16px rgb(0 229 255 / 0.08)',
  panel: '0 12px 32px rgb(0 0 0 / 0.3)',
  glow: '0 0 24px rgb(0 229 255 / 0.25)',
} as const;

export type ShadowToken = keyof typeof shadows;
