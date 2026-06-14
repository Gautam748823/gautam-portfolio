import type { CSSProperties } from 'react';
import { Card } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

interface FocusAreasPanelProps {
  focusAreas: AnalyticsDashboardContent['focusMetrics'];
  labels: AnalyticsDashboardContent['labels'];
}

export function FocusAreasPanel({ focusAreas, labels }: FocusAreasPanelProps) {
  return (
    <div className="analytics-panel">
      <div className="analytics-panel-header">
        <span>{labels.focusEyebrow}</span>
        <h3>{labels.focusTitle}</h3>
      </div>
      <div className="analytics-focus-grid">
        {focusAreas.map((focus) => (
          <Card className="analytics-focus-card" key={focus.id} variant="outlined">
            <div
              aria-label={`${focus.label} priority: ${focus.priority} ${labels.scoreSuffix}`}
              className="analytics-focus-card__indicator"
              role="img"
              style={
                {
                  '--analytics-progress': `${focus.priority * 3.6}deg`,
                } as CSSProperties
              }
            >
              <span>{focus.priority}</span>
            </div>
            <div>
              <span>{focus.status}</span>
              <h4>{focus.label}</h4>
              <p>{focus.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
