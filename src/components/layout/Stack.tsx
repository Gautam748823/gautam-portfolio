import type { HTMLAttributes } from 'react';
import { spacing } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end' | 'stretch';
  direction?: 'row' | 'column';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  justify?: 'start' | 'center' | 'end' | 'between';
  wrap?: boolean;
}

const alignment = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
} as const;

const justification = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
} as const;

export function Stack({
  align = 'stretch',
  direction = 'column',
  gap = 'md',
  justify = 'start',
  wrap = false,
  className = '',
  style,
  ...props
}: StackProps) {
  const tokenStyle: TokenStyle = {
    '--stack-direction': direction,
    '--stack-wrap': wrap ? 'wrap' : 'nowrap',
    '--stack-gap': spacing[gap],
    '--stack-align': alignment[align],
    '--stack-justify': justification[justify],
    ...style,
  };

  return <div className={`ds-stack ${className}`.trim()} style={tokenStyle} {...props} />;
}
