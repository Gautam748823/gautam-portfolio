export const breakpoints = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

export type BreakpointToken = keyof typeof breakpoints;
