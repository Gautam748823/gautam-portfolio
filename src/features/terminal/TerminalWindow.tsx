import type { TerminalCommandData, TerminalHistoryEntry } from '@/types';
import { TerminalHistory } from './TerminalHistory';
import { TerminalInput } from './TerminalInput';

interface TerminalWindowProps {
  commandData: TerminalCommandData;
  entries: readonly TerminalHistoryEntry[];
  onClose: () => void;
  onCommand: (command: string) => void;
}

export function TerminalWindow({ commandData, entries, onClose, onCommand }: TerminalWindowProps) {
  return (
    <section
      aria-labelledby="portfolio-terminal-title"
      className="terminal-window"
      id="portfolio-terminal-window"
    >
      <header className="terminal-window__header">
        <div>
          <span>{commandData.welcome.subtitle}</span>
          <h2 id="portfolio-terminal-title">{commandData.welcome.title}</h2>
          <p>{commandData.welcome.instruction}</p>
        </div>
        <button aria-label="Close portfolio terminal" onClick={onClose} type="button">
          Close
        </button>
      </header>

      <div className="terminal-window__body" aria-live="polite">
        {entries.length === 0 ? (
          <div className="terminal-welcome" role="status">
            <strong>{commandData.welcome.title}</strong>
            <span>{commandData.welcome.subtitle}</span>
            <p>{commandData.welcome.instruction}</p>
          </div>
        ) : (
          <TerminalHistory entries={entries} onSuggestion={onCommand} />
        )}
      </div>

      <TerminalInput disabled={false} onSubmit={onCommand} />
    </section>
  );
}
