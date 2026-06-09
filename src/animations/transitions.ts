import { transitionDurations, transitionTiming } from '@/design-system/tokens';

export interface TransitionConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export const transitions = {
  fast: {
    duration: transitionDurations.fast,
    easing: transitionTiming.standard,
  },
  standard: {
    duration: transitionDurations.normal,
    easing: transitionTiming.standard,
  },
  entrance: {
    duration: transitionDurations.slow,
    easing: transitionTiming.enter,
  },
  exit: {
    duration: transitionDurations.normal,
    easing: transitionTiming.exit,
  },
} as const satisfies Record<string, TransitionConfig>;
