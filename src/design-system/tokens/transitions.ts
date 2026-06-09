export const transitionDurations = {
  instant: 0,
  fast: 120,
  normal: 200,
  slow: 320,
  deliberate: 480,
} as const;

export const transitionTiming = {
  linear: 'linear',
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  enter: 'cubic-bezier(0, 0, 0.2, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;

export type TransitionDurationToken = keyof typeof transitionDurations;
export type TransitionTimingToken = keyof typeof transitionTiming;
