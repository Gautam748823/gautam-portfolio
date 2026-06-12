import type { VoiceCommandData, VoiceStatus as VoiceStatusValue } from '@/types';
import { VoiceCommandSuggestions } from './VoiceCommandSuggestions';
import { VoiceControls } from './VoiceControls';
import { VoiceStatus } from './VoiceStatus';
import { VoiceTranscript } from './VoiceTranscript';

interface VoicePanelProps {
  commandData: VoiceCommandData;
  isListening: boolean;
  isSupported: boolean;
  lastCommand: string;
  onClose: () => void;
  onSuggestion: (phrase: string) => void;
  onStart: () => void;
  onStop: () => void;
  onToggleSpeech: () => void;
  response: string;
  speechEnabled: boolean;
  status: VoiceStatusValue;
  transcript: string;
}

export function VoicePanel({
  commandData,
  isListening,
  isSupported,
  lastCommand,
  onClose,
  onSuggestion,
  onStart,
  onStop,
  onToggleSpeech,
  response,
  speechEnabled,
  status,
  transcript,
}: VoicePanelProps) {
  return (
    <section
      aria-labelledby="voice-portfolio-title"
      className="voice-panel"
      id="voice-portfolio-panel"
    >
      <header className="voice-panel__header">
        <div>
          <span>{commandData.system.subtitle}</span>
          <h2 id="voice-portfolio-title">{commandData.system.title}</h2>
          <p>{isSupported ? commandData.system.idleMessage : commandData.system.unsupportedMessage}</p>
        </div>
        <button aria-label="Close voice portfolio system" onClick={onClose} type="button">
          Close
        </button>
      </header>

      <div className="voice-panel__body">
        <VoiceStatus isSupported={isSupported} status={status} />
        <VoiceTranscript lastCommand={lastCommand} response={response} transcript={transcript} />
        <VoiceControls
          isListening={isListening}
          isSupported={isSupported}
          onStart={onStart}
          onStop={onStop}
          onToggleSpeech={onToggleSpeech}
          speechEnabled={speechEnabled}
        />
        <VoiceCommandSuggestions commands={commandData.commands} onCommand={onSuggestion} />
      </div>
    </section>
  );
}
