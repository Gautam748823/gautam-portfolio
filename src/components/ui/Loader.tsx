import type { HTMLAttributes } from 'react';
import { colors, spacing } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  size?: string;
}

export function Loader({
  label = 'Loading',
  size = spacing.lg,
  className = '',
  style,
  ...props
}: LoaderProps) {
  const tokenStyle: TokenStyle = {
    '--loader-gap': spacing.sm,
    '--loader-color': colors.electricCyan,
    '--loader-track': colors.border.subtle,
    '--loader-size': size,
    '--loader-stroke': spacing.xs,
    ...style,
  };

  return (
    <div
      aria-live="polite"
      className={`ds-loader ${className}`.trim()}
      role="status"
      style={tokenStyle}
      {...props}
    >
      <span aria-hidden="true" className="ds-loader__indicator" />
      <span className="ds-visually-hidden">{label}</span>
    </div>
  );
}
