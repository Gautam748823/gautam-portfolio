import { Badge } from '@/components/ui';
import type { ProjectIntelligence } from '@/types';

interface ProjectCardProps {
  isSelected: boolean;
  onSelect: (project: ProjectIntelligence) => void;
  project: ProjectIntelligence;
}

export function ProjectCard({ isSelected, onSelect, project }: ProjectCardProps) {
  return (
    <button
      aria-label={`Open project intelligence for ${project.title}`}
      aria-pressed={isSelected}
      className={`project-card${project.featured ? ' project-card--featured' : ''}${
        isSelected ? ' project-card--selected' : ''
      }`}
      onClick={() => onSelect(project)}
      type="button"
    >
      <div className="project-card__topline">
        <Badge>{project.category}</Badge>
        <span className="project-card__status">{project.status}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-card__footer">
        <span>{project.technologies.length} technologies</span>
        {project.aiRelated ? <span className="project-card__ai">AI</span> : null}
      </div>
    </button>
  );
}
