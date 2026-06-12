import type { VoiceCommand } from '@/types';

interface VoiceCommandSuggestionsProps {
  commands: readonly VoiceCommand[];
  onCommand: (phrase: string) => void;
}

export function VoiceCommandSuggestions({ commands, onCommand }: VoiceCommandSuggestionsProps) {
  return (
    <div className="voice-suggestions">
      <span>Available commands</span>
      <div aria-label="Voice command suggestions">
        {commands.map((command) => (
          <button
            key={command.id}
            onClick={() => onCommand(command.spokenPhrases[0] ?? command.label)}
            type="button"
          >
            {command.label}
          </button>
        ))}
      </div>
    </div>
  );
}
