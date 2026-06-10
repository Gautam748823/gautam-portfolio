import { Container, Section } from '@/components/layout';
import { Badge, Card, SectionHeader } from '@/components/ui';
import type { GitHubDashboardContent } from '@/types';

interface GitHubIntelligenceDashboardProps {
  dashboard: GitHubDashboardContent | null;
}

export function GitHubIntelligenceDashboard({ dashboard }: GitHubIntelligenceDashboardProps) {
  if (!dashboard) {
    return null;
  }

  return (
    <Section
      aria-labelledby="github-title"
      className="github-dashboard"
      id="github"
      spacingSize="lg"
    >
      <Container>
        <div className="github-dashboard__layout">
          <SectionHeader
            description={dashboard.section.description}
            eyebrow={dashboard.section.eyebrow}
            id="github-title"
            title={dashboard.section.title}
          />

          <div className="github-dashboard__top">
            <Card className="github-profile-card" variant="glass">
              <div className="github-profile-card__header">
                <span>{dashboard.profile.accountStatus}</span>
                <h3>{dashboard.profile.username}</h3>
                <a href={dashboard.profile.profileUrl} rel="noreferrer" target="_blank">
                  {dashboard.profile.profileUrl}
                </a>
              </div>

              <dl className="github-profile-card__stats">
                <div>
                  <dt>{dashboard.labels.profileStats.publicRepositories}</dt>
                  <dd>{dashboard.profile.publicRepositories}</dd>
                </div>
                <div>
                  <dt>{dashboard.labels.profileStats.followers}</dt>
                  <dd>{dashboard.profile.followers}</dd>
                </div>
                <div>
                  <dt>{dashboard.labels.profileStats.following}</dt>
                  <dd>{dashboard.profile.following}</dd>
                </div>
              </dl>
            </Card>

            <Card className="github-summary-card" variant="glass">
              <span>{dashboard.labels.engineeringSummary}</span>
              <h3>{dashboard.engineeringSummary.headline}</h3>
              <p>{dashboard.engineeringSummary.description}</p>
            </Card>
          </div>

          <div aria-label={dashboard.labels.metrics} className="github-metrics">
            {dashboard.metrics.map((metric) => (
              <Card className="github-metric-card" key={metric.id} variant="glass">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.description}</p>
              </Card>
            ))}
          </div>

          <div className="github-dashboard__panel">
            <div className="github-dashboard__panel-header">
              <span>{dashboard.labels.languagePanelEyebrow}</span>
              <h3>{dashboard.labels.languagePanelTitle}</h3>
            </div>

            <div className="github-language-list">
              {dashboard.languages.map((language) => (
                <Card className="github-language-card" key={language.id} variant="outlined">
                  <div className="github-language-card__meta">
                    <h4>{language.name}</h4>
                    <strong>{language.percentage}%</strong>
                  </div>
                  <div
                    aria-label={`${language.name} distribution ${language.percentage} percent`}
                    className="github-language-card__track"
                  >
                    <span style={{ width: `${language.percentage}%` }} />
                  </div>
                  <p>{language.signal}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="github-dashboard__panel">
            <div className="github-dashboard__panel-header">
              <span>{dashboard.labels.repositoriesPanelEyebrow}</span>
              <h3>{dashboard.labels.repositoriesPanelTitle}</h3>
            </div>

            <div className="github-repository-grid">
              {dashboard.repositories.map((repository) => (
                <Card className="github-repository-card" key={repository.id} variant="glass">
                  <div className="github-repository-card__header">
                    <Badge>{repository.category}</Badge>
                    <span>{repository.status}</span>
                  </div>
                  <h4>{repository.name}</h4>
                  <p>{repository.description}</p>
                  <div className="github-repository-card__tags">
                    {repository.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <a href={repository.githubUrl} rel="noreferrer" target="_blank">
                    {dashboard.labels.repositoryLink}
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <div className="github-dashboard__split">
            <div className="github-dashboard__panel">
              <div className="github-dashboard__panel-header">
                <span>{dashboard.labels.insightsPanelEyebrow}</span>
                <h3>{dashboard.labels.insightsPanelTitle}</h3>
              </div>
              <div className="github-insight-grid">
                {dashboard.insights.map((insight) => (
                  <Card className="github-insight-card" key={insight.id} variant="outlined">
                    <span>{insight.label}</span>
                    <h4>{insight.value}</h4>
                    <p>{insight.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="github-dashboard__panel">
              <div className="github-dashboard__panel-header">
                <span>{dashboard.labels.activityPanelEyebrow}</span>
                <h3>{dashboard.labels.activityPanelTitle}</h3>
              </div>
              <div className="github-activity-list">
                {dashboard.activity.map((signal) => (
                  <Card className="github-activity-card" key={signal.id} variant="outlined">
                    <span>{signal.label}</span>
                    <h4>{signal.value}</h4>
                    <p>{signal.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
