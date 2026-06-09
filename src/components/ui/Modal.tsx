import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { colors, layout, radius, shadows, spacing, typography } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';
import { zIndex } from '@/styles/theme';
import { focusFirstElement, isEscapeKey, trapTabKey } from '@/utils/accessibility';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) {
      return;
    }

    const dialog = dialogRef.current;
    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    focusFirstElement(dialog);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEscapeKey(event)) {
        onClose();
        return;
      }

      trapTabKey(event, dialog);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const tokenStyle: TokenStyle = {
    '--modal-backdrop-index': zIndex.overlay,
    '--modal-page-padding': spacing.md,
    '--modal-overlay': colors.overlay,
    '--modal-width': layout.overlay.modal,
    '--modal-border': colors.border.strong,
    '--modal-radius': radius.xl,
    '--modal-background': colors.surface.elevated,
    '--modal-shadow': shadows.floating,
    '--modal-gap': spacing.md,
    '--modal-padding': spacing.xl,
    '--modal-divider': colors.border.subtle,
    '--modal-title-size': typography.fontSize.xl,
    '--modal-close-size': spacing['2xl'],
    '--modal-close-radius': radius.md,
    '--modal-color': colors.white,
    '--modal-muted': colors.muted,
    '--modal-line-height': typography.lineHeight.relaxed,
  };

  return createPortal(
    <div
      className="ds-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      style={tokenStyle}
    >
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className="ds-modal"
        ref={dialogRef}
        role="dialog"
        tabIndex={-1}
      >
        <div className="ds-modal__header">
          <h2 className="ds-modal__title" id={titleId}>
            {title}
          </h2>
          <button
            aria-label="Close dialog"
            className="ds-modal__close"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        </div>
        <div className="ds-modal__body">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
