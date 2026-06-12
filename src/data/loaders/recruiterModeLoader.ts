import recruiterModeData from '@/data/recruiterMode.json';
import type { RecruiterModeContent, RecruiterProjectHighlight } from '@/types';

const recruiterMode = recruiterModeData as RecruiterModeContent;

export const recruiterModeLoader = {
  async getRecruiterMode(): Promise<RecruiterModeContent> {
    return recruiterMode;
  },

  async getTopProjects(): Promise<readonly RecruiterProjectHighlight[]> {
    return recruiterMode.topProjects;
  },
};
