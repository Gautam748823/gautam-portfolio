import { forwardRef } from 'react';

interface TerminalLauncherProps {
  isOpen: boolean;
  onClick: () => void;
}

export const TerminalLauncher = forwardRef<HTMLButtonElement, TerminalLauncherProps>(
  function TerminalLauncher({ isOpen, onClick }, ref) {
  return (
    <button
      aria-controls="portfolio-terminal-window"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close portfolio terminal' : 'Open portfolio terminal'}
      className="terminal-launcher"
      ref={ref}
      onClick={onClick}
      type="button"
    >
      <span aria-hidden="true">&gt;_</span>
      <span>Terminal</span>
    </button>
  );
  },
);
