import terminalCommandsData from '@/data/terminalCommands.json';
import type { TerminalCommandData } from '@/types';

const terminalCommands = terminalCommandsData as TerminalCommandData;

export const terminalLoader = {
  async getCommands(): Promise<TerminalCommandData> {
    return terminalCommands;
  },
};
