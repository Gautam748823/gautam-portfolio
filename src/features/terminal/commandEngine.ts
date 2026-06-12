import type { TerminalCommandData, TerminalCommandResult } from '@/types';

export function normalizeTerminalInput(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function resolveTerminalCommand(
  commandData: TerminalCommandData,
  input: string,
): TerminalCommandResult {
  const normalizedCommand = normalizeTerminalInput(input);
  const command = commandData.commands.find((item) => item.command === normalizedCommand);

  if (!normalizedCommand) {
    return {
      command: '',
      response: commandData.unknownCommand.response,
      suggestions: commandData.unknownCommand.suggestions,
      found: false,
      clearHistory: false,
    };
  }

  if (!command) {
    return {
      command: normalizedCommand,
      response: commandData.unknownCommand.response,
      suggestions: commandData.unknownCommand.suggestions,
      found: false,
      clearHistory: false,
    };
  }

  return {
    command: command.command,
    response: command.response,
    suggestions: command.suggestions,
    found: true,
    clearHistory: command.command === 'clear',
  };
}
