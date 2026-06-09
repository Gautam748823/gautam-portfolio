import {
  motionDistance,
  motionScale,
  transitionDurations,
  transitionTiming,
} from '@/design-system/tokens';

export const animationConstants = {
  duration: transitionDurations,
  easing: transitionTiming,
  distance: motionDistance,
  scale: motionScale,
} as const;
