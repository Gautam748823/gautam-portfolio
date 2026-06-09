import type { ButtonHTMLAttributes } from 'react';
import {
  colors,
  glows,
  radius,
  shadows,
  spacing,
  transitionDurations,
  transitionTiming,
  typography,
} from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, TokenStyle> = {
  primary: {
    '--button-background': colors.electricCyan,
    '--button-color': colors.deepBlack,
    '--button-border': colors.electricCyan,
    '--button-shadow': glows.subtle,
    '--button-hover-background': colors.cyanAccent,
    '--button-hover-border': colors.cyanAccent,
    '--button-hover-shadow': glows.medium,
  },
  secondary: {
    '--button-background': colors.surface.subtle,
    '--button-color': colors.white,
    '--button-border': colors.border.strong,
    '--button-shadow': shadows.none,
    '--button-hover-background': colors.surface.glass,
    '--button-hover-border': colors.electricCyan,
    '--button-hover-shadow': glows.subtle,
  },
  ghost: {
    '--button-background': colors.transparent,
    '--button-color': colors.electricCyan,
    '--button-border': colors.transparent,
    '--button-shadow': shadows.none,
    '--button-hover-background': colors.surface.subtle,
    '--button-hover-border': colors.border.subtle,
    '--button-hover-shadow': shadows.none,
  },
};

export function Button({
  variant = 'primary',
  className = '',
  style,
  type = 'button',
  ...props
}: ButtonProps) {
  const tokenStyle: TokenStyle = {
    '--button-gap': spacing.sm,
    '--button-padding': `${spacing.sm} ${spacing.lg}`,
    '--button-radius': radius.md,
    '--button-font-weight': typography.fontWeight.semibold,
    '--transition-duration': `${transitionDurations.normal}ms`,
    '--transition-timing': transitionTiming.standard,
    ...variantStyles[variant],
    ...style,
  };

  return (
    <button className={`ds-button ${className}`.trim()} style={tokenStyle} type={type} {...props} />
  );
}
