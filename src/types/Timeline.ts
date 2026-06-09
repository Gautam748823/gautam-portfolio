export interface TimelineMilestone {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
  type: 'education' | 'experience' | 'project' | 'milestone';
}

export interface TimelineData {
  milestones: TimelineMilestone[];
}
