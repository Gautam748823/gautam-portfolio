import type { HTMLAttributes } from 'react';
import { colors, radius, shadows, spacing } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export type CardVariant = 'default' | 'glass' | 'outlined';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, TokenStyle> = {
  default: {
    '--card-background': colors.surface.elevated,
    '--card-border': colors.border.subtle,
    '--card-shadow': shadows.panel,
    '--card-backdrop': 'none',
  },
  glass: {
    '--card-background': colors.surface.glass,
    '--card-border': colors.border.subtle,
    '--card-shadow': shadows.floating,
    '--card-backdrop': 'blur(1rem)',
  },
  outlined: {
    '--card-background': colors.transparent,
    '--card-border': colors.border.strong,
    '--card-shadow': shadows.none,
    '--card-backdrop': 'none',
  },
};

export function Card({ variant = 'default', className = '', style, ...props }: CardProps) {
  const tokenStyle: TokenStyle = {
    '--card-padding': spacing.xl,
    '--card-radius': radius.lg,
    ...variantStyles[variant],
    ...style,
  };

  return <div className={`ds-card ${className}`.trim()} style={tokenStyle} {...props} />;
}
