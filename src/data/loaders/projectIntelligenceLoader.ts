import projectIntelligenceData from '@/data/projectIntelligence.json';
import type { ProjectIntelligence } from '@/types';

const projects = projectIntelligenceData as ProjectIntelligence[];

export async function getAllProjects(): Promise<readonly ProjectIntelligence[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectIntelligence | undefined> {
  return projects.find((project) => project.slug === slug);
}

export async function getFeaturedProjects(): Promise<readonly ProjectIntelligence[]> {
  return projects.filter((project) => project.featured);
}

export const projectIntelligenceLoader = {
  getAllProjects,
  getProjectBySlug,
  getFeaturedProjects,
};
