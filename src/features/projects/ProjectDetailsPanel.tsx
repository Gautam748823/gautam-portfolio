import { Badge, Card } from '@/components/ui';
import type { ProjectIntelligence } from '@/types';

interface ProjectDetailsPanelProps {
  project: ProjectIntelligence | null;
}

export function ProjectDetailsPanel({ project }: ProjectDetailsPanelProps) {
  if (!project) {
    return null;
  }

  const links = [
    { href: project.githubUrl, label: 'GitHub' },
    { href: project.demoUrl, label: 'Demo' },
  ].filter((link): link is { href: string; label: string } => Boolean(link.href));

  return (
    <Card
      aria-live="polite"
      className="project-details"
      id="project-details-panel"
      variant="glass"
    >
      <div className="project-details__header">
        <span>{project.category} intelligence</span>
        <h3>{project.title}</h3>
        <p>{project.tagline}</p>
      </div>

      <div className="project-details__section">
        <h4>Problem</h4>
        <p>{project.problem}</p>
      </div>

      <div className="project-details__section">
        <h4>Solution</h4>
        <p>{project.solution}</p>
      </div>

      <div className="project-details__section">
        <h4>Architecture Summary</h4>
        <ol className="project-details__architecture">
          {project.architecture.map((layer) => (
            <li key={layer}>{layer}</li>
          ))}
        </ol>
      </div>

      <div className="project-details__section">
        <h4>Tech Stack</h4>
        <div className="project-details__tags">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>

      <div className="project-details__split">
        <div className="project-details__section">
          <h4>Challenges</h4>
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="project-details__section">
          <h4>Outcomes</h4>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-details__links" aria-label={`${project.title} links`}>
        {links.length > 0 ? (
          links.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ))
        ) : (
          <span>Repository analytics prepared for future integration.</span>
        )}
      </div>
    </Card>
  );
}
