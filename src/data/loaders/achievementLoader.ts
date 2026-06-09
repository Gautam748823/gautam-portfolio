import achievementData from '@/data/achievements.json';
import type { Achievement } from '@/types';

const achievements: Achievement[] = achievementData;

export const achievementLoader = {
  async getAll(): Promise<readonly Achievement[]> {
    return achievements;
  },

  async getById(id: string): Promise<Achievement | undefined> {
    return achievements.find((achievement) => achievement.id === id);
  },
};
