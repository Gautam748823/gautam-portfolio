export const glows = {
  none: 'none',
  subtle: '0 0 18px rgb(0 229 255 / 0.18)',
  medium: '0 0 32px rgb(0 229 255 / 0.28)',
  strong: '0 0 48px rgb(77 245 255 / 0.4)',
  focus: '0 0 0 3px rgb(0 229 255 / 0.28)',
} as const;

export type GlowToken = keyof typeof glows;
