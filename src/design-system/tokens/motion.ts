export const motionDistance = {
  none: '0',
  subtle: '0.5rem',
  standard: '1rem',
  expressive: '2rem',
} as const;

export const motionScale = {
  reduced: 0.96,
  rest: 1,
  elevated: 1.02,
} as const;

export type MotionDistanceToken = keyof typeof motionDistance;
export type MotionScaleToken = keyof typeof motionScale;
