import type { CSSProperties } from 'react';

export type TokenStyle = CSSProperties & {
  [key: `--${string}`]: string | number | undefined;
};
