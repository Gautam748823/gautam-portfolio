import { createElement, type HTMLAttributes } from 'react';
import { colors, layout, spacing, typography } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  eyebrow?: string;
  headingLevel?: 2 | 3 | 4;
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  headingLevel = 2,
  className = '',
  style,
  ...props
}: SectionHeaderProps) {
  const tokenStyle: TokenStyle = {
    '--section-header-gap': spacing.sm,
    '--section-header-width': layout.content.readable,
    '--section-header-accent': colors.electricCyan,
    '--section-header-color': colors.white,
    '--section-header-muted': colors.muted,
    '--section-header-eyebrow-size': typography.fontSize.xs,
    '--section-header-eyebrow-weight': typography.fontWeight.bold,
    '--section-header-letter-spacing': typography.letterSpacing.wide,
    '--section-header-title-size': typography.fontSize['3xl'],
    '--section-header-title-line-height': typography.lineHeight.tight,
    '--section-header-title-spacing': typography.letterSpacing.tight,
    '--section-header-description-size': typography.fontSize.base,
    '--section-header-description-line-height': typography.lineHeight.relaxed,
    ...style,
  };

  return (
    <header className={`ds-section-header ${className}`.trim()} style={tokenStyle} {...props}>
      {eyebrow ? <span className="ds-section-header__eyebrow">{eyebrow}</span> : null}
      {createElement(`h${headingLevel}`, { className: 'ds-section-header__title' }, title)}
      {description ? <p className="ds-section-header__description">{description}</p> : null}
    </header>
  );
}
