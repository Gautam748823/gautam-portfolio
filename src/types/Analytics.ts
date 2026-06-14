export interface AnalyticsSectionMetadata {
  eyebrow: string;
  title: string;
  description: string;
}

export interface AnalyticsLabels {
  summaryEyebrow: string;
  summaryTitle: string;
  summarySpecializationLabel: string;
  summaryDirectionLabel: string;
  metricsLabel: string;
  signalEyebrow: string;
  signalTitle: string;
  progressEyebrow: string;
  progressTitle: string;
  technologyDistributionTitle: string;
  projectDistributionTitle: string;
  radarEyebrow: string;
  radarTitle: string;
  radarScaleLabel: string;
  focusEyebrow: string;
  focusTitle: string;
  growthEyebrow: string;
  growthTitle: string;
  roadmapEyebrow: string;
  roadmapTitle: string;
  insightsEyebrow: string;
  insightsTitle: string;
  scoreSuffix: string;
}

export interface AnalyticsSummary {
  headline: string;
  description: string;
  specialization: string;
  currentDirection: string;
}

export type AnalyticsMetricTone = 'cyan' | 'white' | 'positive';

export interface AnalyticsMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  tone: AnalyticsMetricTone;
}

export interface AnalyticsCapability {
  id: string;
  label: string;
  score: number;
  description: string;
}

export interface AnalyticsTechnologyMetric {
  id: string;
  name: string;
  percentage: number;
  category: string;
}

export interface AnalyticsProjectMetric {
  id: string;
  label: string;
  count: number;
  percentage: number;
  description: string;
}

export interface AnalyticsLearningMetric {
  id: string;
  label: string;
  value: string;
  detail: string;
  progress: number;
}

export type AnalyticsTrend = 'upward' | 'steady' | 'accelerating';

export interface AnalyticsGrowthMetric {
  id: string;
  label: string;
  value: string;
  trend: AnalyticsTrend;
  description: string;
}

export interface AnalyticsFocusMetric {
  id: string;
  label: string;
  priority: number;
  status: string;
  description: string;
}

export type AnalyticsRoadmapStatus = 'current' | 'next' | 'long-term';

export interface AnalyticsRoadmapMetric {
  id: string;
  stage: string;
  title: string;
  description: string;
  status: AnalyticsRoadmapStatus;
}

export interface AnalyticsSignal {
  id: string;
  label: string;
  value: string;
  strength: number;
  description: string;
}

export interface AnalyticsInsight {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface AnalyticsDashboardContent {
  section: AnalyticsSectionMetadata;
  labels: AnalyticsLabels;
  summary: AnalyticsSummary;
  engineeringMetrics: readonly AnalyticsMetric[];
  capabilities: readonly AnalyticsCapability[];
  technologyMetrics: readonly AnalyticsTechnologyMetric[];
  projectMetrics: readonly AnalyticsProjectMetric[];
  learningMetrics: readonly AnalyticsLearningMetric[];
  growthMetrics: readonly AnalyticsGrowthMetric[];
  focusMetrics: readonly AnalyticsFocusMetric[];
  roadmapMetrics: readonly AnalyticsRoadmapMetric[];
  signals: readonly AnalyticsSignal[];
  insights: readonly AnalyticsInsight[];
}
