import { forwardRef } from 'react';

interface VoiceLauncherProps {
  isOpen: boolean;
  onClick: () => void;
}

export const VoiceLauncher = forwardRef<HTMLButtonElement, VoiceLauncherProps>(
  function VoiceLauncher({ isOpen, onClick }, ref) {
    return (
      <button
        aria-controls="voice-portfolio-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close voice portfolio system' : 'Open voice portfolio system'}
        className="voice-launcher"
        onClick={onClick}
        ref={ref}
        type="button"
      >
        <span aria-hidden="true" className="voice-launcher__pulse" />
        <span>Voice</span>
      </button>
    );
  },
);
