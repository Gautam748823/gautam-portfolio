interface AssistantLauncherProps {
  isOpen: boolean;
  onClick: () => void;
}

export function AssistantLauncher({ isOpen, onClick }: AssistantLauncherProps) {
  return (
    <button
      aria-controls="ai-assistant-panel"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close digital assistant' : 'Open digital assistant'}
      className="assistant-launcher"
      onClick={onClick}
      type="button"
    >
      <span aria-hidden="true" className="assistant-launcher__core" />
      <span>AI Core</span>
    </button>
  );
}
