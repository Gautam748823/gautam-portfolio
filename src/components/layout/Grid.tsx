import type { HTMLAttributes } from 'react';
import { layout, spacing } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'stretch';
  gap?: 'sm' | 'md' | 'lg';
  minimumColumnWidth?: string;
}

const gridGaps = {
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
} as const;

export function Grid({
  align = 'stretch',
  gap = 'lg',
  minimumColumnWidth = layout.grid.minimumColumn,
  className = '',
  style,
  ...props
}: GridProps) {
  const tokenStyle: TokenStyle = {
    '--grid-minimum': minimumColumnWidth,
    '--grid-gap': gridGaps[gap],
    '--grid-align': align,
    ...style,
  };

  return <div className={`ds-grid ${className}`.trim()} style={tokenStyle} {...props} />;
}
