export interface TerminalCommand {
  command: string;
  description: string;
  response: string;
  suggestions: readonly string[];
}

export interface TerminalCommandData {
  welcome: {
    title: string;
    subtitle: string;
    instruction: string;
  };
  unknownCommand: {
    response: string;
    suggestions: readonly string[];
  };
  commands: readonly TerminalCommand[];
}

export interface TerminalCommandResult {
  command: string;
  response: string;
  suggestions: readonly string[];
  found: boolean;
  clearHistory: boolean;
}

export interface TerminalHistoryEntry {
  id: string;
  command: string;
  response: string;
  suggestions: readonly string[];
  found: boolean;
}
