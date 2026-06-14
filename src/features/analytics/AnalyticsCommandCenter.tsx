import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';
import { AnalyticsMetricsGrid } from './AnalyticsMetricsGrid';
import { AnalyticsProgressBars } from './AnalyticsProgressBars';
import { AnalyticsRadarView } from './AnalyticsRadarView';
import { AnalyticsSignalPanel } from './AnalyticsSignalPanel';
import { AnalyticsSummaryCard } from './AnalyticsSummaryCard';
import { FocusAreasPanel } from './FocusAreasPanel';
import { GrowthSignalsPanel } from './GrowthSignalsPanel';
import { RoadmapInsightsPanel } from './RoadmapInsightsPanel';

interface AnalyticsCommandCenterProps {
  dashboard: AnalyticsDashboardContent | null;
}

export function AnalyticsCommandCenter({ dashboard }: AnalyticsCommandCenterProps) {
  if (!dashboard) {
    return null;
  }

  return (
    <Section
      aria-labelledby="analytics-title"
      className="analytics-command-center"
      id="analytics"
      spacingSize="lg"
    >
      <Container>
        <div className="analytics-command-center__layout">
          <SectionHeader
            description={dashboard.section.description}
            eyebrow={dashboard.section.eyebrow}
            id="analytics-title"
            title={dashboard.section.title}
          />

          <AnalyticsSummaryCard labels={dashboard.labels} summary={dashboard.summary} />
          <AnalyticsMetricsGrid
            label={dashboard.labels.metricsLabel}
            metrics={dashboard.engineeringMetrics}
          />

          <div className="analytics-command-center__split">
            <AnalyticsSignalPanel labels={dashboard.labels} signals={dashboard.signals} />
            <AnalyticsRadarView capabilities={dashboard.capabilities} labels={dashboard.labels} />
          </div>

          <AnalyticsProgressBars
            labels={dashboard.labels}
            projects={dashboard.projectMetrics}
            technologies={dashboard.technologyMetrics}
          />
          <FocusAreasPanel focusAreas={dashboard.focusMetrics} labels={dashboard.labels} />
          <GrowthSignalsPanel
            growth={dashboard.growthMetrics}
            labels={dashboard.labels}
            learning={dashboard.learningMetrics}
          />
          <RoadmapInsightsPanel
            insights={dashboard.insights}
            labels={dashboard.labels}
            roadmap={dashboard.roadmapMetrics}
          />
        </div>
      </Container>
    </Section>
  );
}
