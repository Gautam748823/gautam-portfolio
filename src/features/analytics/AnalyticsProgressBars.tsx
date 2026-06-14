import { Card } from '@/components/ui';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

interface AnalyticsProgressBarsProps {
  labels: AnalyticsDashboardContent['labels'];
  projects: AnalyticsDashboardContent['projectMetrics'];
  technologies: AnalyticsDashboardContent['technologyMetrics'];
}

export function AnalyticsProgressBars({
  labels,
  projects,
  technologies,
}: AnalyticsProgressBarsProps) {
  return (
    <Card className="analytics-progress-panel" variant="glass">
      <div className="analytics-panel-header">
        <span>{labels.progressEyebrow}</span>
        <h3>{labels.progressTitle}</h3>
      </div>

      <div className="analytics-progress-panel__split">
        <div className="analytics-progress-group">
          <h4>{labels.technologyDistributionTitle}</h4>
          {technologies.map((technology) => (
            <div className="analytics-progress-row" key={technology.id}>
              <div className="analytics-progress-row__meta">
                <span>{technology.name}</span>
                <strong>{technology.percentage}%</strong>
              </div>
              <div
                aria-label={`${technology.name}: ${technology.percentage}%`}
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={technology.percentage}
                className="analytics-track"
                role="progressbar"
              >
                <span style={{ width: `${technology.percentage}%` }} />
              </div>
              <small>{technology.category}</small>
            </div>
          ))}
        </div>

        <div className="analytics-progress-group">
          <h4>{labels.projectDistributionTitle}</h4>
          {projects.map((project) => (
            <div className="analytics-progress-row" key={project.id}>
              <div className="analytics-progress-row__meta">
                <span>{project.label}</span>
                <strong>{project.count}</strong>
              </div>
              <div
                aria-label={`${project.label}: ${project.count} projects, ${project.percentage}% coverage`}
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={project.percentage}
                className="analytics-track analytics-track--project"
                role="progressbar"
              >
                <span style={{ width: `${project.percentage}%` }} />
              </div>
              <small>{project.description}</small>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
