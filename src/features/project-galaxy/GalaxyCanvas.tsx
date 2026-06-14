import type {
  ProjectGalaxyLabels,
  ProjectGalaxyProject,
  ProjectGalaxyRelationship,
} from '@/types/ProjectGalaxy';
import { GalaxyNode } from './GalaxyNode';

interface GalaxyCanvasProps {
  labels: ProjectGalaxyLabels;
  onSelectProject: (projectId: string) => void;
  projects: readonly ProjectGalaxyProject[];
  relationships: readonly ProjectGalaxyRelationship[];
  selectedProjectId: string;
}

function relationshipClass(type: ProjectGalaxyRelationship['type']) {
  return type.toLowerCase().replaceAll(' ', '-');
}

export function GalaxyCanvas({
  labels,
  onSelectProject,
  projects,
  relationships,
  selectedProjectId,
}: GalaxyCanvasProps) {
  const visibleProjectIds = new Set(projects.map((project) => project.id));
  const projectMap = new Map(projects.map((project) => [project.id, project]));

  return (
    <div aria-label={labels.canvasLabel} className="galaxy-canvas" role="group">
      <svg
        aria-hidden="true"
        className="galaxy-canvas__relationships"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {relationships.map((relationship) => {
          const source = projectMap.get(relationship.source);
          const target = projectMap.get(relationship.target);
          const isVisible =
            visibleProjectIds.has(relationship.source) &&
            visibleProjectIds.has(relationship.target) &&
            source &&
            target;

          if (!isVisible) {
            return null;
          }

          return (
            <line
              className={`galaxy-relationship galaxy-relationship--${relationshipClass(
                relationship.type,
              )}`}
              key={relationship.id}
              x1={source.position.x}
              x2={target.position.x}
              y1={source.position.y}
              y2={target.position.y}
            />
          );
        })}
      </svg>

      <div className="galaxy-canvas__center" aria-hidden="true">
        <span />
      </div>

      {projects.map((project) => (
        <GalaxyNode
          isSelected={project.id === selectedProjectId}
          key={project.id}
          onSelect={onSelectProject}
          project={project}
          selectLabel={labels.selectProjectLabel}
        />
      ))}

      <ul className="galaxy-canvas__relationship-list">
        {relationships.map((relationship) => {
          if (
            !visibleProjectIds.has(relationship.source) ||
            !visibleProjectIds.has(relationship.target)
          ) {
            return null;
          }

          return (
            <li key={relationship.id}>
              <span>{relationship.type}</span>
              {relationship.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
