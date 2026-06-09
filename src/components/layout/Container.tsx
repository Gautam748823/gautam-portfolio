import type { HTMLAttributes } from 'react';
import { layout, spacing, type ContainerWidthToken } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidthToken;
}

export function Container({ width = 'default', className = '', style, ...props }: ContainerProps) {
  const tokenStyle: TokenStyle = {
    '--container-width': layout.container[width],
    '--container-padding': `clamp(${spacing.md}, 4vw, ${spacing.xl})`,
    ...style,
  };

  return <div className={`ds-container ${className}`.trim()} style={tokenStyle} {...props} />;
}
