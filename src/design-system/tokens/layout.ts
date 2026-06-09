export const layout = {
  container: {
    compact: '48rem',
    default: '72rem',
    wide: '90rem',
  },
  content: {
    readable: '42rem',
  },
  grid: {
    minimumColumn: '15rem',
  },
  overlay: {
    modal: '48rem',
    tooltip: '18rem',
  },
} as const;

export type ContainerWidthToken = keyof typeof layout.container;
