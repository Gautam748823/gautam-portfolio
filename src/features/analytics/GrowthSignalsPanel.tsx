import { Card } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

interface GrowthSignalsPanelProps {
  growth: AnalyticsDashboardContent['growthMetrics'];
  labels: AnalyticsDashboardContent['labels'];
  learning: AnalyticsDashboardContent['learningMetrics'];
}

export function GrowthSignalsPanel({ growth, labels, learning }: GrowthSignalsPanelProps) {
  return (
    <div className="analytics-panel">
      <div className="analytics-panel-header">
        <span>{labels.growthEyebrow}</span>
        <h3>{labels.growthTitle}</h3>
      </div>
      <div className="analytics-growth-grid">
        {growth.map((signal) => (
          <Card className="analytics-growth-card" key={signal.id} variant="glass">
            <div className="analytics-growth-card__header">
              <span>{signal.trend}</span>
              <strong aria-hidden="true">+</strong>
            </div>
            <h4>{signal.label}</h4>
            <b>{signal.value}</b>
            <p>{signal.description}</p>
          </Card>
        ))}
      </div>

      <div className="analytics-learning-list">
        {learning.map((item) => (
          <article className="analytics-learning-item" key={item.id}>
            <div className="analytics-learning-item__meta">
              <div>
                <span>{item.label}</span>
                <small>{item.detail}</small>
              </div>
              <strong>{item.value}</strong>
            </div>
            <div
              aria-label={`${item.label}: ${item.progress}% progress`}
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={item.progress}
              className="analytics-track"
              role="progressbar"
            >
              <span style={{ width: `${item.progress}%` }} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
