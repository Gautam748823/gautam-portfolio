import { Card } from '@/components/ui';
import type { ProjectGalaxyLabels, ProjectGalaxyProject } from '@/types/ProjectGalaxy';

interface GalaxyDetailsPanelProps {
  labels: ProjectGalaxyLabels;
  project: ProjectGalaxyProject;
}

export function GalaxyDetailsPanel({ labels, project }: GalaxyDetailsPanelProps) {
  return (
    <Card aria-live="polite" className="galaxy-details" key={project.id} variant="glass">
      <header className="galaxy-details__header">
        <span>{labels.detailsEyebrow}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </header>

      <dl className="galaxy-details__facts">
        <div>
          <dt>{labels.statusLabel}</dt>
          <dd>{project.status}</dd>
        </div>
        <div>
          <dt>{labels.domainLabel}</dt>
          <dd>{project.primaryDomain}</dd>
        </div>
      </dl>

      <section className="galaxy-details__section">
        <h4>{labels.technologiesLabel}</h4>
        <ul className="galaxy-details__tags">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      <section className="galaxy-details__section">
        <h4>{labels.achievementsLabel}</h4>
        <ul className="galaxy-details__list">
          {project.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section className="galaxy-details__section">
        <h4>{labels.architectureLabel}</h4>
        <p>{project.architecture}</p>
      </section>

      <section className="galaxy-details__section">
        <h4>{labels.roadmapLabel}</h4>
        <p>{project.roadmap}</p>
      </section>
    </Card>
  );
}
