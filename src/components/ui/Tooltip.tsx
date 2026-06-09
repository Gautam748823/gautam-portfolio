import { useId, type ReactNode } from 'react';
import {
  colors,
  glows,
  layout,
  motionDistance,
  radius,
  spacing,
  transitionDurations,
  transitionTiming,
  typography,
} from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';
import { zIndex } from '@/styles/theme';

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export function Tooltip({ children, content }: TooltipProps) {
  const tooltipId = useId();
  const tokenStyle: TokenStyle = {
    '--tooltip-index': zIndex.notification,
    '--tooltip-offset': spacing.sm,
    '--tooltip-width': layout.overlay.tooltip,
    '--tooltip-padding': `${spacing.sm} ${spacing.md}`,
    '--tooltip-border': colors.border.subtle,
    '--tooltip-radius': radius.md,
    '--tooltip-background': colors.surface.elevated,
    '--tooltip-color': colors.white,
    '--tooltip-shadow': glows.subtle,
    '--tooltip-font-size': typography.fontSize.sm,
    '--tooltip-line-height': typography.lineHeight.normal,
    '--tooltip-distance': motionDistance.subtle,
    '--transition-duration': `${transitionDurations.fast}ms`,
    '--transition-timing': transitionTiming.standard,
  };

  return (
    <span aria-describedby={tooltipId} className="ds-tooltip" style={tokenStyle} tabIndex={0}>
      {children}
      <span className="ds-tooltip__content" id={tooltipId} role="tooltip">
        {content}
      </span>
    </span>
  );
}
