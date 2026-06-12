import { Container, Section } from '@/components/layout';
import { Card, SectionHeader } from '@/components/ui';
import type { RecruiterModeContent } from '@/types';

interface RecruiterModeSectionProps {
  recruiterMode: RecruiterModeContent | null;
}

export function RecruiterModeSection({ recruiterMode }: RecruiterModeSectionProps) {
  if (!recruiterMode) {
    return null;
  }

  return (
    <Section
      aria-labelledby="recruiter-mode-title"
      className="recruiter-mode"
      id="recruiter"
      spacingSize="lg"
    >
      <Container>
        <div className="recruiter-mode__layout">
          <SectionHeader
            description={recruiterMode.section.description}
            eyebrow={recruiterMode.section.eyebrow}
            id="recruiter-mode-title"
            title={recruiterMode.section.title}
          />

          <Card className="recruiter-summary-card" variant="glass">
            <div className="recruiter-panel-header">
              <span>{recruiterMode.labels.executiveSummaryEyebrow}</span>
              <h3>{recruiterMode.labels.executiveSummaryTitle}</h3>
            </div>
            <div className="recruiter-summary-card__body">
              <div>
                <h4>{recruiterMode.executiveSummary.headline}</h4>
                <p>{recruiterMode.executiveSummary.description}</p>
              </div>
              <dl className="recruiter-summary-card__facts">
                {recruiterMode.executiveSummary.items.map((item) => (
                  <div key={item.id}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Card>

          <div aria-label={recruiterMode.labels.snapshotLabel} className="recruiter-snapshot">
            {recruiterMode.hiringSnapshot.map((metric) => (
              <Card className="recruiter-snapshot-card" key={metric.id} variant="glass">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.description}</p>
              </Card>
            ))}
          </div>

          <div className="recruiter-mode__split">
            <div className="recruiter-panel">
              <div className="recruiter-panel-header">
                <span>{recruiterMode.labels.strengthsEyebrow}</span>
                <h3>{recruiterMode.labels.strengthsTitle}</h3>
              </div>
              <div className="recruiter-strength-list">
                {recruiterMode.strengthMatrix.map((strength) => (
                  <Card className="recruiter-strength-card" key={strength.id} variant="outlined">
                    <div className="recruiter-strength-card__meta">
                      <h4>{strength.title}</h4>
                      <strong>
                        {strength.score}
                        <span> / 100 {recruiterMode.labels.scoreSuffix}</span>
                      </strong>
                    </div>
                    <div
                      aria-label={`${strength.title} ${strength.score} out of 100 ${recruiterMode.labels.scoreSuffix}`}
                      className="recruiter-strength-card__track"
                    >
                      <span style={{ width: `${strength.score}%` }} />
                    </div>
                    <p>{strength.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="recruiter-focus-panel" variant="glass">
              <div className="recruiter-panel-header">
                <span>{recruiterMode.labels.currentFocusEyebrow}</span>
                <h3>{recruiterMode.labels.currentFocusTitle}</h3>
              </div>
              <div className="recruiter-focus-panel__list">
                {recruiterMode.currentFocus.map((focus) => (
                  <article className="recruiter-focus-item" key={focus.id}>
                    <h4>{focus.title}</h4>
                    <p>{focus.description}</p>
                  </article>
                ))}
              </div>
            </Card>
          </div>

          <div className="recruiter-panel">
            <div className="recruiter-panel-header">
              <span>{recruiterMode.labels.projectsEyebrow}</span>
              <h3>{recruiterMode.labels.projectsTitle}</h3>
            </div>
            <div className="recruiter-project-grid">
              {recruiterMode.topProjects.map((project) => (
                <Card className="recruiter-project-card" key={project.id} variant="glass">
                  <span>{project.type}</span>
                  <h4>{project.title}</h4>
                  <p>{project.impact}</p>
                  <div className="recruiter-tags">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="recruiter-actions-panel" variant="outlined">
            <div className="recruiter-panel-header">
              <span>{recruiterMode.labels.quickActionsEyebrow}</span>
              <h3>{recruiterMode.labels.quickActionsTitle}</h3>
            </div>
            <div className="recruiter-actions">
              {recruiterMode.quickActions.map((action) => (
                <a
                  className="recruiter-actions__link"
                  href={action.href}
                  key={action.id}
                  rel={action.external ? 'noreferrer' : undefined}
                  target={action.external ? '_blank' : undefined}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
