import timelineData from '@/data/timeline.json';
import type { TimelineData, TimelineMilestone } from '@/types';

const data: TimelineData = timelineData as TimelineData;

export const timelineLoader = {
  async getAll(): Promise<readonly TimelineMilestone[]> {
    return data.milestones;
  },

  async getById(id: string): Promise<TimelineMilestone | undefined> {
    return data.milestones.find((milestone) => milestone.id === id);
  },
};
