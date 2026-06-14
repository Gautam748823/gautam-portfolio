import { Card } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

interface AnalyticsSignalPanelProps {
  labels: AnalyticsDashboardContent['labels'];
  signals: AnalyticsDashboardContent['signals'];
}

export function AnalyticsSignalPanel({ labels, signals }: AnalyticsSignalPanelProps) {
  return (
    <Card className="analytics-signal-panel" variant="outlined">
      <div className="analytics-panel-header">
        <span>{labels.signalEyebrow}</span>
        <h3>{labels.signalTitle}</h3>
      </div>
      <div className="analytics-signal-list">
        {signals.map((signal) => (
          <article className="analytics-signal" key={signal.id}>
            <div className="analytics-signal__meta">
              <div>
                <h4>{signal.label}</h4>
                <p>{signal.description}</p>
              </div>
              <strong>{signal.value}</strong>
            </div>
            <div
              aria-label={`${signal.label}: ${signal.strength} ${labels.scoreSuffix}`}
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={signal.strength}
              className="analytics-track"
              role="progressbar"
            >
              <span style={{ width: `${signal.strength}%` }} />
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
