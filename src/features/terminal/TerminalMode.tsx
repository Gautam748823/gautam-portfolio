import { useEffect, useRef, useState } from 'react';
import { terminalLoader } from '@/data';
import type { TerminalCommandData, TerminalHistoryEntry } from '@/types';
import { resolveTerminalCommand } from './commandEngine';
import { TerminalLauncher } from './TerminalLauncher';
import { TerminalWindow } from './TerminalWindow';

function createHistoryEntry(
  command: string,
  response: string,
  suggestions: readonly string[],
  found: boolean,
): TerminalHistoryEntry {
  return {
    id: `terminal-${Date.now()}-${command}`,
    command,
    response,
    suggestions,
    found,
  };
}

export function TerminalMode() {
  const [commandData, setCommandData] = useState<TerminalCommandData | null>(null);
  const [entries, setEntries] = useState<readonly TerminalHistoryEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let isActive = true;

    void terminalLoader.getCommands().then((commands) => {
      if (isActive) {
        setCommandData(commands);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  function executeCommand(input: string) {
    if (!commandData) {
      return;
    }

    const result = resolveTerminalCommand(commandData, input);

    if (result.clearHistory) {
      setEntries([]);
      return;
    }

    setEntries((currentEntries) => [
      ...currentEntries,
      createHistoryEntry(result.command || input, result.response, result.suggestions, result.found),
    ]);
  }

  function closeTerminal() {
    setIsOpen(false);
    launcherRef.current?.focus();
  }

  return (
    <aside className="terminal-mode" aria-label="Portfolio command terminal">
      <TerminalLauncher
        isOpen={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        ref={launcherRef}
      />

      {isOpen && commandData ? (
        <TerminalWindow
          commandData={commandData}
          entries={entries}
          onClose={closeTerminal}
          onCommand={executeCommand}
        />
      ) : null}
    </aside>
  );
}
