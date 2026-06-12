interface VoiceControlsProps {
  isListening: boolean;
  isSupported: boolean;
  speechEnabled: boolean;
  onStart: () => void;
  onStop: () => void;
  onToggleSpeech: () => void;
}

export function VoiceControls({
  isListening,
  isSupported,
  speechEnabled,
  onStart,
  onStop,
  onToggleSpeech,
}: VoiceControlsProps) {
  return (
    <div className="voice-controls">
      <button disabled={!isSupported || isListening} onClick={onStart} type="button">
        Start Listening
      </button>
      <button disabled={!isListening} onClick={onStop} type="button">
        Stop
      </button>
      <button aria-pressed={speechEnabled} onClick={onToggleSpeech} type="button">
        Speech {speechEnabled ? 'On' : 'Off'}
      </button>
    </div>
  );
}
