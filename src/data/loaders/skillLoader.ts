import skillData from '@/data/skills.json';
import type { SkillData, SkillCategory } from '@/types';

const data: SkillData = skillData as SkillData;

export const skillLoader = {
  async getAll(): Promise<readonly SkillCategory[]> {
    return data.categories;
  },

  async getById(id: string): Promise<SkillCategory | undefined> {
    return data.categories.find((category) => category.id === id);
  },
};
