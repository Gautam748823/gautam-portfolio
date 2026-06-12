import voiceCommandsData from '@/data/voiceCommands.json';
import type { VoiceCommandData } from '@/types';

const voiceCommands = voiceCommandsData as VoiceCommandData;

export const voiceLoader = {
  async getCommands(): Promise<VoiceCommandData> {
    return voiceCommands;
  },
};
