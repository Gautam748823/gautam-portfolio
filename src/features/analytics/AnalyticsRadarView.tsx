import { Card } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

interface AnalyticsRadarViewProps {
  capabilities: AnalyticsDashboardContent['capabilities'];
  labels: AnalyticsDashboardContent['labels'];
}

const CENTER = 120;
const RADIUS = 82;

function pointAt(index: number, total: number, radius: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return {
    x: CENTER + Math.cos(angle) * radius,
    y: CENTER + Math.sin(angle) * radius,
  };
}

function polygonPoints(total: number, radius: number) {
  return Array.from({ length: total }, (_, index) => {
    const point = pointAt(index, total, radius);
    return `${point.x},${point.y}`;
  }).join(' ');
}

export function AnalyticsRadarView({ capabilities, labels }: AnalyticsRadarViewProps) {
  const valuePoints = capabilities
    .map((capability, index) => {
      const point = pointAt(index, capabilities.length, RADIUS * (capability.score / 100));
      return `${point.x},${point.y}`;
    })
    .join(' ');

  return (
    <Card className="analytics-radar-panel" variant="glass">
      <div className="analytics-panel-header">
        <span>{labels.radarEyebrow}</span>
        <h3>{labels.radarTitle}</h3>
      </div>
      <div className="analytics-radar">
        <svg
          aria-label={labels.radarScaleLabel}
          className="analytics-radar__chart"
          role="img"
          viewBox="0 0 240 240"
        >
          {[0.25, 0.5, 0.75, 1].map((scale) => (
            <polygon
              className="analytics-radar__grid"
              key={scale}
              points={polygonPoints(capabilities.length, RADIUS * scale)}
            />
          ))}
          {capabilities.map((capability, index) => {
            const point = pointAt(index, capabilities.length, RADIUS);
            return (
              <line
                className="analytics-radar__axis"
                key={capability.id}
                x1={CENTER}
                x2={point.x}
                y1={CENTER}
                y2={point.y}
              />
            );
          })}
          <polygon className="analytics-radar__value" points={valuePoints} />
          {capabilities.map((capability, index) => {
            const point = pointAt(index, capabilities.length, RADIUS * (capability.score / 100));
            return (
              <circle
                className="analytics-radar__point"
                cx={point.x}
                cy={point.y}
                key={capability.id}
                r="3"
              />
            );
          })}
        </svg>

        <dl className="analytics-radar__legend">
          {capabilities.map((capability) => (
            <div key={capability.id}>
              <dt>{capability.label}</dt>
              <dd>{capability.score}</dd>
              <p>{capability.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </Card>
  );
}
