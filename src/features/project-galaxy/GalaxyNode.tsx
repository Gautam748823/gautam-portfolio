import type { CSSProperties } from 'react';
import type { ProjectGalaxyProject } from '@/types/ProjectGalaxy';

interface GalaxyNodeProps {
  isSelected: boolean;
  onSelect: (projectId: string) => void;
  project: ProjectGalaxyProject;
  selectLabel: string;
}

export function GalaxyNode({ isSelected, onSelect, project, selectLabel }: GalaxyNodeProps) {
  const nodeStyle = {
    '--galaxy-node-x': `${project.position.x}%`,
    '--galaxy-node-y': `${project.position.y}%`,
  } as CSSProperties;

  return (
    <button
      aria-label={`${selectLabel}: ${project.name}`}
      aria-pressed={isSelected}
      className={`galaxy-node${isSelected ? ' galaxy-node--selected' : ''}`}
      onClick={() => onSelect(project.id)}
      style={nodeStyle}
      type="button"
    >
      <span className="galaxy-node__orbit" aria-hidden="true" />
      <span className="galaxy-node__core">
        <strong>{project.shortName}</strong>
        <small>{project.primaryDomain}</small>
      </span>
    </button>
  );
}
