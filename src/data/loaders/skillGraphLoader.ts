import skillGraphData from '@/data/skillsGraph.json';
import type { SkillGraphData, SkillGraphNode } from '@/types';

const data: SkillGraphData = skillGraphData as SkillGraphData;

export const skillGraphLoader = {
  async getAllSkills(): Promise<readonly SkillGraphNode[]> {
    return data.skills;
  },

  async getSkillById(id: string): Promise<SkillGraphNode | undefined> {
    return data.skills.find((skill) => skill.id === id);
  },

  async getAll(): Promise<SkillGraphData> {
    return data;
  },

  async getById(id: string): Promise<SkillGraphNode | undefined> {
    return this.getSkillById(id);
  },
};
