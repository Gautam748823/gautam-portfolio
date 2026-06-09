export const zIndex = {
  base: 0,
  content: 10,
  navigation: 100,
  overlay: 1000,
  modal: 1100,
  notification: 1200,
} as const;

export type ZIndexToken = keyof typeof zIndex;
