import projectData from '@/data/projects.json';
import type { Project } from '@/types';

const projects: Project[] = projectData as Project[];

export const projectLoader = {
  async getAll(): Promise<readonly Project[]> {
    return projects;
  },

  async getById(id: string): Promise<Project | undefined> {
    return projects.find((project) => project.id === id);
  },
};
