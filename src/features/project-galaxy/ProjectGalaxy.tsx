import { useMemo, useState } from 'react';
import { Container, Section } from '@/components/layout';
import { Card, SectionHeader } from '@/components/ui';
import type {
  ProjectGalaxyData,
  ProjectGalaxyDomainFilter,
  ProjectGalaxyOverviewMetric,
} from '@/types/ProjectGalaxy';
import { GalaxyCanvas } from './GalaxyCanvas';
import { GalaxyDetailsPanel } from './GalaxyDetailsPanel';

interface ProjectGalaxyProps {
  galaxy: ProjectGalaxyData | null;
}

function getMetricValue(galaxy: ProjectGalaxyData, metric: ProjectGalaxyOverviewMetric) {
  switch (metric.kind) {
    case 'total':
      return galaxy.projects.length;
    case 'ai':
      return galaxy.projects.filter((project) => project.domains.includes('AI')).length;
    case 'research':
      return galaxy.projects.filter((project) => project.domains.includes('Research')).length;
    case 'full-stack':
      return galaxy.projects.filter((project) => project.domains.includes('Full Stack')).length;
    case 'active':
      return galaxy.projects.filter((project) => project.status === 'active').length;
  }
}

function matchesDomain(
  project: ProjectGalaxyData['projects'][number],
  filter: ProjectGalaxyDomainFilter['value'],
) {
  return filter === 'All' || project.domains.includes(filter);
}

function legendClass(label: string) {
  return label.toLowerCase().replaceAll(' ', '-');
}

export function ProjectGalaxy({ galaxy }: ProjectGalaxyProps) {
  const [activeDomain, setActiveDomain] = useState<ProjectGalaxyDomainFilter['value']>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    galaxy?.projects[0]?.id ?? null,
  );

  const visibleProjects = useMemo(
    () => galaxy?.projects.filter((project) => matchesDomain(project, activeDomain)) ?? [],
    [activeDomain, galaxy],
  );

  const selectedProject = useMemo(() => {
    if (!galaxy) {
      return null;
    }

    return (
      visibleProjects.find((project) => project.id === selectedProjectId) ??
      visibleProjects[0] ??
      galaxy.projects[0] ??
      null
    );
  }, [galaxy, selectedProjectId, visibleProjects]);

  if (!galaxy || !selectedProject) {
    return null;
  }

  const handleDomainChange = (filter: ProjectGalaxyDomainFilter['value']) => {
    setActiveDomain(filter);
    const nextProject = galaxy.projects.find((project) => matchesDomain(project, filter));
    setSelectedProjectId(nextProject?.id ?? null);
  };

  return (
    <Section
      aria-labelledby="project-galaxy-title"
      className="project-galaxy"
      id="project-galaxy"
      spacingSize="lg"
    >
      <Container>
        <div className="project-galaxy__layout">
          <SectionHeader
            description={galaxy.section.description}
            eyebrow={galaxy.section.eyebrow}
            id="project-galaxy-title"
            title={galaxy.section.title}
          />

          <div aria-label={galaxy.labels.overviewLabel} className="galaxy-overview">
            {galaxy.overview.map((metric) => (
              <Card className="galaxy-overview__metric" key={metric.id} variant="glass">
                <strong>{getMetricValue(galaxy, metric)}</strong>
                <span>{metric.label}</span>
              </Card>
            ))}
          </div>

          <div aria-label={galaxy.labels.filtersLabel} className="galaxy-filters" role="group">
            {galaxy.domains.map((domain) => (
              <button
                aria-pressed={activeDomain === domain.value}
                className={`galaxy-filters__button${
                  activeDomain === domain.value ? ' galaxy-filters__button--active' : ''
                }`}
                key={domain.id}
                onClick={() => handleDomainChange(domain.value)}
                type="button"
              >
                {domain.label}
              </button>
            ))}
          </div>

          <div className="project-galaxy__workspace">
            <GalaxyCanvas
              labels={galaxy.labels}
              onSelectProject={setSelectedProjectId}
              projects={visibleProjects}
              relationships={galaxy.relationships}
              selectedProjectId={selectedProject.id}
            />
            <GalaxyDetailsPanel labels={galaxy.labels} project={selectedProject} />
          </div>

          <Card className="galaxy-legend" variant="outlined">
            <div className="galaxy-panel-header">
              <span>{galaxy.labels.legendEyebrow}</span>
              <h3>{galaxy.labels.legendTitle}</h3>
            </div>
            <ul>
              {galaxy.legend.map((item) => (
                <li key={item.id}>
                  <span
                    aria-hidden="true"
                    className={`galaxy-legend__signal galaxy-legend__signal--${legendClass(
                      item.label,
                    )}`}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </Card>

          <div className="galaxy-evolution">
            <div className="galaxy-panel-header">
              <span>{galaxy.labels.evolutionEyebrow}</span>
              <h3>{galaxy.labels.evolutionTitle}</h3>
              <p>{galaxy.labels.evolutionDescription}</p>
            </div>
            <ol>
              {galaxy.evolution.map((step, index) => {
                const project = galaxy.projects.find((item) => item.id === step.projectId);

                if (!project) {
                  return null;
                }

                return (
                  <li key={step.id}>
                    <button
                      aria-label={`${galaxy.labels.selectProjectLabel}: ${project.name}`}
                      onClick={() => {
                        setActiveDomain('All');
                        setSelectedProjectId(project.id);
                      }}
                      type="button"
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{step.stage}</strong>
                      <b>{project.shortName}</b>
                      <p>{step.contribution}</p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
