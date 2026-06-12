export interface AchievementMetric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface AcademicSignal {
  id: string;
  label: string;
  value: string;
  description: string;
}

export type AchievementMilestoneStatus = 'completed' | 'active' | 'planned';

export interface EngineeringMilestone {
  id: string;
  title: string;
  description: string;
  status: AchievementMilestoneStatus;
  impact: string;
  technologies: readonly string[];
}

export interface LearningSignal {
  id: string;
  title: string;
  level: string;
  description: string;
  evidence: string;
}

export interface AchievementRoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'planned';
}

export interface AchievementDashboardContent {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  labels: {
    metrics: string;
    academicPanelEyebrow: string;
    academicPanelTitle: string;
    milestonesPanelEyebrow: string;
    milestonesPanelTitle: string;
    learningPanelEyebrow: string;
    learningPanelTitle: string;
    roadmapPanelEyebrow: string;
    roadmapPanelTitle: string;
    statusLabel: string;
    impactLabel: string;
    technologiesLabel: string;
  };
  metrics: readonly AchievementMetric[];
  academicSignals: readonly AcademicSignal[];
  engineeringMilestones: readonly EngineeringMilestone[];
  learningSignals: readonly LearningSignal[];
  futureRoadmap: readonly AchievementRoadmapItem[];
}
