export type TimelineCategory = 'education' | 'ai' | 'development' | 'projects' | 'future';

export type TimelineStatus = 'completed' | 'active' | 'planned';

export interface TimelineSectionContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface TimelineFilterContent {
  allLabel: string;
}

export interface TimelineCategoryMeta {
  id: TimelineCategory;
  description: string;
  label: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  category: TimelineCategory;
  summary: string;
  details: string;
  status: TimelineStatus;
  timeframe: string;
  startDate: string;
  endDate: string | null;
  tags?: readonly string[];
}

export interface TimelineData {
  section: TimelineSectionContent;
  filters: TimelineFilterContent;
  categories: readonly TimelineCategoryMeta[];
  statusLabels: Record<TimelineStatus, string>;
  milestones: readonly TimelineMilestone[];
}
