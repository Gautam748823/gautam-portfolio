import type { KeyboardEvent as ReactKeyboardEvent } from 'react';

type SupportedKeyboardEvent = KeyboardEvent | ReactKeyboardEvent;

export function isActivationKey(event: SupportedKeyboardEvent): boolean {
  return event.key === 'Enter' || event.key === ' ';
}

export function isEscapeKey(event: SupportedKeyboardEvent): boolean {
  return event.key === 'Escape';
}
