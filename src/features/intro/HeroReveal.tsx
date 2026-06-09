import type { ReactNode } from 'react';
import { fadeUp, stagger } from '@/animations';
import type { TokenStyle } from '@/design-system/styleTypes';

interface HeroRevealProps {
  children: ReactNode;
  delayStep?: number;
  index: number;
}

export function HeroReveal({ children, delayStep = stagger.delay, index }: HeroRevealProps) {
  const revealStyle: TokenStyle = {
    '--hero-reveal-initial-transform': fadeUp.initial.transform,
    '--hero-reveal-final-transform': fadeUp.animate.transform,
    '--hero-reveal-duration': `${fadeUp.transition.duration}ms`,
    '--hero-reveal-easing': fadeUp.transition.easing,
    '--hero-reveal-delay': `${index * delayStep}ms`,
  };

  return (
    <span className="hero-reveal" style={revealStyle}>
      {children}
    </span>
  );
}
