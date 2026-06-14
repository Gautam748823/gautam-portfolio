import { Card } from '@/components/ui';
import type { AnalyticsMetric } from '@/types/Analytics';

interface AnalyticsMetricsGridProps {
  label: string;
  metrics: readonly AnalyticsMetric[];
}

export function AnalyticsMetricsGrid({ label, metrics }: AnalyticsMetricsGridProps) {
  return (
    <div aria-label={label} className="analytics-metrics">
      {metrics.map((metric) => (
        <Card
          className={`analytics-metric analytics-metric--${metric.tone}`}
          key={metric.id}
          variant="glass"
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <p>{metric.description}</p>
        </Card>
      ))}
    </div>
  );
}
