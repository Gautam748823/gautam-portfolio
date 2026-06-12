import achievementDashboardData from '@/data/achievementDashboard.json';
import type { AchievementDashboardContent } from '@/types';

const achievementDashboard = achievementDashboardData as AchievementDashboardContent;

export const achievementDashboardLoader = {
  async getDashboard(): Promise<AchievementDashboardContent> {
    return achievementDashboard;
  },
};
