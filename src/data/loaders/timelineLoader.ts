import timelineData from '@/data/timeline.json';
import type { TimelineCategory, TimelineData, TimelineMilestone } from '@/types';

const data: TimelineData = timelineData as TimelineData;

export const timelineLoader = {
  async getTimeline(): Promise<TimelineData> {
    return data;
  },

  async getAll(): Promise<TimelineData> {
    return data;
  },

  async getMilestones(): Promise<readonly TimelineMilestone[]> {
    return data.milestones;
  },

  async getMilestoneById(id: string): Promise<TimelineMilestone | undefined> {
    return data.milestones.find((milestone) => milestone.id === id);
  },

  async getByCategory(category: TimelineCategory): Promise<readonly TimelineMilestone[]> {
    return data.milestones.filter((milestone) => milestone.category === category);
  },

  async getById(id: string): Promise<TimelineMilestone | undefined> {
    return this.getMilestoneById(id);
  },
};
