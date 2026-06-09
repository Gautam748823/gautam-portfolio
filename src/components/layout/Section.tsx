import type { HTMLAttributes } from 'react';
import { spacing } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacingSize?: 'sm' | 'md' | 'lg';
}

const sectionSpacing = {
  sm: spacing.xl,
  md: spacing['3xl'],
  lg: `clamp(${spacing['3xl']}, 10vw, ${spacing['5xl']})`,
} as const;

export function Section({ spacingSize = 'md', className = '', style, ...props }: SectionProps) {
  const tokenStyle: TokenStyle = {
    '--section-padding': sectionSpacing[spacingSize],
    ...style,
  };

  return <section className={`ds-section ${className}`.trim()} style={tokenStyle} {...props} />;
}
