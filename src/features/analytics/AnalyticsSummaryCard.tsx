import { Card } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

interface AnalyticsSummaryCardProps {
  summary: AnalyticsDashboardContent['summary'];
  labels: AnalyticsDashboardContent['labels'];
}

export function AnalyticsSummaryCard({ labels, summary }: AnalyticsSummaryCardProps) {
  return (
    <Card className="analytics-summary" variant="glass">
      <div className="analytics-panel-header">
        <span>{labels.summaryEyebrow}</span>
        <h3>{labels.summaryTitle}</h3>
      </div>
      <div className="analytics-summary__body">
        <div className="analytics-summary__copy">
          <h4>{summary.headline}</h4>
          <p>{summary.description}</p>
        </div>
        <dl className="analytics-summary__facts">
          <div>
            <dt>{labels.summarySpecializationLabel}</dt>
            <dd>{summary.specialization}</dd>
          </div>
          <div>
            <dt>{labels.summaryDirectionLabel}</dt>
            <dd>{summary.currentDirection}</dd>
          </div>
        </dl>
      </div>
    </Card>
  );
}
