import type { HTMLAttributes } from 'react';
import { colors, glows, typography } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export type PageLayoutProps = HTMLAttributes<HTMLDivElement>;

export function PageLayout({ className = '', style, ...props }: PageLayoutProps) {
  const tokenStyle: TokenStyle = {
    '--page-background': colors.commandBackground,
    '--page-color': colors.white,
    '--page-glow': colors.ambientGlow,
    '--page-font-family': typography.fontFamily.primary,
    '--focus-glow': glows.focus,
    ...style,
  };

  return <div className={`ds-page-layout ${className}`.trim()} style={tokenStyle} {...props} />;
}
