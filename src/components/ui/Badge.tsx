import type { HTMLAttributes } from 'react';
import { colors, radius, spacing, typography } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export type BadgeVariant = 'default' | 'success' | 'warning';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, TokenStyle> = {
  default: {
    '--badge-background': colors.surface.subtle,
    '--badge-border': colors.border.strong,
    '--badge-color': colors.electricCyan,
  },
  success: {
    '--badge-background': colors.surface.success,
    '--badge-border': colors.border.success,
    '--badge-color': colors.success,
  },
  warning: {
    '--badge-background': colors.surface.warning,
    '--badge-border': colors.border.warning,
    '--badge-color': colors.warning,
  },
};

export function Badge({ variant = 'default', className = '', style, ...props }: BadgeProps) {
  const tokenStyle: TokenStyle = {
    '--badge-padding': `${spacing.xs} ${spacing.sm}`,
    '--badge-radius': radius.full,
    '--badge-font-size': typography.fontSize.xs,
    '--badge-font-weight': typography.fontWeight.semibold,
    '--badge-line-height': typography.lineHeight.tight,
    ...variantStyles[variant],
    ...style,
  };

  return <span className={`ds-badge ${className}`.trim()} style={tokenStyle} {...props} />;
}
