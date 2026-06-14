export type ProjectGalaxyDomain = 'AI' | 'Research' | 'Computer Vision' | 'Full Stack' | 'Backend';

export type ProjectGalaxyStatus = 'active' | 'prototype' | 'concept';

export type ProjectGalaxyRelationshipType =
  | 'AI Systems'
  | 'Computer Vision'
  | 'Full Stack'
  | 'Research'
  | 'Analytics'
  | 'Monitoring';

export interface ProjectGalaxySection {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ProjectGalaxyLabels {
  overviewLabel: string;
  filtersLabel: string;
  canvasLabel: string;
  detailsEyebrow: string;
  statusLabel: string;
  domainLabel: string;
  technologiesLabel: string;
  achievementsLabel: string;
  architectureLabel: string;
  roadmapLabel: string;
  legendEyebrow: string;
  legendTitle: string;
  evolutionEyebrow: string;
  evolutionTitle: string;
  evolutionDescription: string;
  relationshipLabel: string;
  selectProjectLabel: string;
}

export interface ProjectGalaxyOverviewMetric {
  id: string;
  label: string;
  kind: 'total' | 'ai' | 'research' | 'full-stack' | 'active';
}

export interface ProjectGalaxyDomainFilter {
  id: string;
  label: string;
  value: 'All' | ProjectGalaxyDomain;
}

export interface ProjectGalaxyNodePosition {
  x: number;
  y: number;
}

export interface ProjectGalaxyProject {
  id: string;
  name: string;
  shortName: string;
  status: ProjectGalaxyStatus;
  description: string;
  primaryDomain: ProjectGalaxyDomain;
  domains: readonly ProjectGalaxyDomain[];
  relationshipTypes: readonly ProjectGalaxyRelationshipType[];
  technologies: readonly string[];
  achievements: readonly string[];
  architecture: string;
  roadmap: string;
  position: ProjectGalaxyNodePosition;
}

export interface ProjectGalaxyRelationship {
  id: string;
  source: string;
  target: string;
  type: ProjectGalaxyRelationshipType;
  label: string;
}

export interface ProjectGalaxyLegendItem {
  id: string;
  label: ProjectGalaxyRelationshipType;
}

export interface ProjectGalaxyEvolutionStep {
  id: string;
  projectId: string;
  stage: string;
  contribution: string;
}

export interface ProjectGalaxyData {
  section: ProjectGalaxySection;
  labels: ProjectGalaxyLabels;
  overview: readonly ProjectGalaxyOverviewMetric[];
  domains: readonly ProjectGalaxyDomainFilter[];
  projects: readonly ProjectGalaxyProject[];
  relationships: readonly ProjectGalaxyRelationship[];
  legend: readonly ProjectGalaxyLegendItem[];
  evolution: readonly ProjectGalaxyEvolutionStep[];
}
