import projectGalaxyData from '@/data/projectGalaxy.json';
import type { ProjectGalaxyData } from '@/types/ProjectGalaxy';

const projectGalaxy = projectGalaxyData as ProjectGalaxyData;

export const projectGalaxyLoader = {
  async getGalaxy(): Promise<ProjectGalaxyData> {
    return projectGalaxy;
  },
};
