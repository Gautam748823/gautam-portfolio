export interface RecruiterModeSection {
  eyebrow: string;
  title: string;
  description: string;
}

export interface RecruiterExecutiveSummaryItem {
  id: string;
  label: string;
  value: string;
}

export interface RecruiterExecutiveSummary {
  headline: string;
  description: string;
  items: readonly RecruiterExecutiveSummaryItem[];
}

export interface RecruiterSnapshotMetric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface RecruiterStrength {
  id: string;
  title: string;
  score: number;
  description: string;
}

export interface RecruiterProjectHighlight {
  id: string;
  title: string;
  type: string;
  impact: string;
  stack: readonly string[];
}

export interface RecruiterFocusArea {
  id: string;
  title: string;
  description: string;
}

export interface RecruiterQuickAction {
  id: string;
  label: string;
  href: string;
  external: boolean;
}

export interface RecruiterModeLabels {
  executiveSummaryEyebrow: string;
  executiveSummaryTitle: string;
  snapshotLabel: string;
  strengthsEyebrow: string;
  strengthsTitle: string;
  projectsEyebrow: string;
  projectsTitle: string;
  currentFocusEyebrow: string;
  currentFocusTitle: string;
  quickActionsEyebrow: string;
  quickActionsTitle: string;
  scoreSuffix: string;
}

export interface RecruiterModeContent {
  section: RecruiterModeSection;
  labels: RecruiterModeLabels;
  executiveSummary: RecruiterExecutiveSummary;
  hiringSnapshot: readonly RecruiterSnapshotMetric[];
  strengthMatrix: readonly RecruiterStrength[];
  topProjects: readonly RecruiterProjectHighlight[];
  currentFocus: readonly RecruiterFocusArea[];
  quickActions: readonly RecruiterQuickAction[];
}
