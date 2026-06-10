import { useMemo, useState } from 'react';
import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import type { ProjectFilter, ProjectIntelligence } from '@/types';
import { ProjectDetailsPanel } from './ProjectDetailsPanel';
import { ProjectFilters } from './ProjectFilters';
import { ProjectGrid } from './ProjectGrid';
import { ProjectMetrics } from './ProjectMetrics';

interface ProjectsSectionProps {
  projects: readonly ProjectIntelligence[];
}

function projectMatchesFilter(project: ProjectIntelligence, filter: ProjectFilter) {
  if (filter === 'All') {
    return true;
  }

  if (filter === 'AI') {
    return project.aiRelated || project.category === 'AI';
  }

  if (filter === 'Full Stack') {
    return (
      project.category === 'Full Stack' ||
      (project.technologies.includes('React') &&
        (project.technologies.includes('FastAPI') || project.technologies.includes('Node.js')))
    );
  }

  if (filter === 'Computer Vision') {
    return (
      project.category === 'Computer Vision' ||
      project.technologies.includes('OpenCV') ||
      project.technologies.includes('YOLOv8')
    );
  }

  return project.category === filter;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(projects[0]?.id ?? null);

  const filteredProjects = useMemo(
    () => projects.filter((project) => projectMatchesFilter(project, activeFilter)),
    [activeFilter, projects],
  );

  const selectedProject = useMemo(() => {
    const selectedFromFiltered = filteredProjects.find((project) => project.id === selectedProjectId);

    return selectedFromFiltered ?? filteredProjects[0] ?? projects[0] ?? null;
  }, [filteredProjects, projects, selectedProjectId]);

  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    const nextProject = projects.find((project) => projectMatchesFilter(project, filter));
    setSelectedProjectId(nextProject?.id ?? null);
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <Section
      aria-labelledby="projects-title"
      className="projects-section"
      id="projects"
      spacingSize="lg"
    >
      <Container>
        <div className="projects-section__layout">
          <SectionHeader
            description="A recruiter-facing intelligence layer for inspecting project context, architecture, tradeoffs, and delivery signal."
            eyebrow="Project Intelligence"
            id="projects-title"
            title="Projects"
          />

          <ProjectMetrics projects={projects} />
          <ProjectFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />

          <div className="projects-section__workspace">
            <ProjectGrid
              onSelectProject={(project) => setSelectedProjectId(project.id)}
              projects={filteredProjects}
              selectedProject={selectedProject}
            />
            <ProjectDetailsPanel project={selectedProject} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
