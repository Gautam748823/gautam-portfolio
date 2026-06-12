import type { TerminalHistoryEntry } from '@/types';

interface TerminalHistoryProps {
  entries: readonly TerminalHistoryEntry[];
  onSuggestion: (command: string) => void;
}

export function TerminalHistory({ entries, onSuggestion }: TerminalHistoryProps) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <div aria-label="Terminal command history" className="terminal-history">
      {entries.map((entry) => (
        <article className="terminal-history__entry" key={entry.id}>
          <p className="terminal-history__command">
            <span aria-hidden="true">&gt;</span> {entry.command}
          </p>
          <pre className="terminal-history__response">{entry.response}</pre>
          {entry.suggestions.length > 0 ? (
            <div aria-label={`Suggestions after ${entry.command}`} className="terminal-suggestions">
              {entry.suggestions.map((suggestion) => (
                <button key={suggestion} onClick={() => onSuggestion(suggestion)} type="button">
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
