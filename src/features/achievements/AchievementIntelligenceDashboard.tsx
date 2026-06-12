import { Container, Section } from '@/components/layout';
import { Badge, Card, SectionHeader } from '@/components/ui';
import type { AchievementDashboardContent } from '@/types';

interface AchievementIntelligenceDashboardProps {
  dashboard: AchievementDashboardContent | null;
}

export function AchievementIntelligenceDashboard({
  dashboard,
}: AchievementIntelligenceDashboardProps) {
  if (!dashboard) {
    return null;
  }

  return (
    <Section
      aria-labelledby="achievements-title"
      className="achievement-dashboard"
      id="achievements"
      spacingSize="lg"
    >
      <Container>
        <div className="achievement-dashboard__layout">
          <SectionHeader
            description={dashboard.section.description}
            eyebrow={dashboard.section.eyebrow}
            id="achievements-title"
            title={dashboard.section.title}
          />

          <div aria-label={dashboard.labels.metrics} className="achievement-metrics">
            {dashboard.metrics.map((metric) => (
              <Card className="achievement-metric-card" key={metric.id} variant="glass">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.description}</p>
              </Card>
            ))}
          </div>

          <Card className="achievement-academic-panel" variant="glass">
            <div className="achievement-panel-header">
              <span>{dashboard.labels.academicPanelEyebrow}</span>
              <h3>{dashboard.labels.academicPanelTitle}</h3>
            </div>

            <dl className="achievement-academic-grid">
              {dashboard.academicSignals.map((signal) => (
                <div key={signal.id}>
                  <dt>{signal.label}</dt>
                  <dd>{signal.value}</dd>
                  <p>{signal.description}</p>
                </div>
              ))}
            </dl>
          </Card>

          <div className="achievement-panel">
            <div className="achievement-panel-header">
              <span>{dashboard.labels.milestonesPanelEyebrow}</span>
              <h3>{dashboard.labels.milestonesPanelTitle}</h3>
            </div>

            <ol className="achievement-timeline">
              {dashboard.engineeringMilestones.map((milestone) => (
                <li className="achievement-timeline__item" key={milestone.id}>
                  <Card className="achievement-milestone-card" variant="glass">
                    <div className="achievement-milestone-card__header">
                      <h4>{milestone.title}</h4>
                      <Badge variant={milestone.status === 'completed' ? 'success' : 'warning'}>
                        {milestone.status}
                      </Badge>
                    </div>
                    <p>{milestone.description}</p>
                    <dl className="achievement-milestone-card__details">
                      <div>
                        <dt>{dashboard.labels.impactLabel}</dt>
                        <dd>{milestone.impact}</dd>
                      </div>
                      <div>
                        <dt>{dashboard.labels.technologiesLabel}</dt>
                        <dd>
                          <span className="achievement-tags">
                            {milestone.technologies.map((technology) => (
                              <span key={technology}>{technology}</span>
                            ))}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </Card>
                </li>
              ))}
            </ol>
          </div>

          <div className="achievement-dashboard__split">
            <div className="achievement-panel">
              <div className="achievement-panel-header">
                <span>{dashboard.labels.learningPanelEyebrow}</span>
                <h3>{dashboard.labels.learningPanelTitle}</h3>
              </div>
              <div className="achievement-learning-grid">
                {dashboard.learningSignals.map((signal) => (
                  <Card className="achievement-learning-card" key={signal.id} variant="outlined">
                    <span>{signal.level}</span>
                    <h4>{signal.title}</h4>
                    <p>{signal.description}</p>
                    <strong>{signal.evidence}</strong>
                  </Card>
                ))}
              </div>
            </div>

            <div className="achievement-panel">
              <div className="achievement-panel-header">
                <span>{dashboard.labels.roadmapPanelEyebrow}</span>
                <h3>{dashboard.labels.roadmapPanelTitle}</h3>
              </div>
              <ol className="achievement-roadmap">
                {dashboard.futureRoadmap.map((item) => (
                  <li key={item.id}>
                    <Card className="achievement-roadmap-card" variant="outlined">
                      <span>{item.status}</span>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </Card>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
