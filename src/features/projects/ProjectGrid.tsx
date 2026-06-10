import type { ProjectIntelligence } from '@/types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  onSelectProject: (project: ProjectIntelligence) => void;
  projects: readonly ProjectIntelligence[];
  selectedProject: ProjectIntelligence | null;
}

export function ProjectGrid({ onSelectProject, projects, selectedProject }: ProjectGridProps) {
  return (
    <div className="project-grid" role="list">
      {projects.map((project) => (
        <div key={project.id} role="listitem">
          <ProjectCard
            isSelected={selectedProject?.id === project.id}
            onSelect={onSelectProject}
            project={project}
          />
        </div>
      ))}
    </div>
  );
}
