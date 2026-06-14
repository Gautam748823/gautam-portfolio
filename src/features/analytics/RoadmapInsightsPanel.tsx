import { Card } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

interface RoadmapInsightsPanelProps {
  insights: AnalyticsDashboardContent['insights'];
  labels: AnalyticsDashboardContent['labels'];
  roadmap: AnalyticsDashboardContent['roadmapMetrics'];
}

export function RoadmapInsightsPanel({ insights, labels, roadmap }: RoadmapInsightsPanelProps) {
  return (
    <div className="analytics-roadmap-layout">
      <div className="analytics-panel">
        <div className="analytics-panel-header">
          <span>{labels.roadmapEyebrow}</span>
          <h3>{labels.roadmapTitle}</h3>
        </div>
        <ol className="analytics-roadmap">
          {roadmap.map((item) => (
            <li key={item.id}>
              <Card
                className={`analytics-roadmap-card analytics-roadmap-card--${item.status}`}
                variant="outlined"
              >
                <span>{item.stage}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>

      <Card className="analytics-insights" variant="glass">
        <div className="analytics-panel-header">
          <span>{labels.insightsEyebrow}</span>
          <h3>{labels.insightsTitle}</h3>
        </div>
        <dl>
          {insights.map((insight) => (
            <div key={insight.id}>
              <dt>{insight.label}</dt>
              <dd>{insight.value}</dd>
              <p>{insight.description}</p>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}
