import githubDashboardData from '@/data/githubDashboard.json';
import type { GitHubDashboardContent } from '@/types';

const githubDashboard = githubDashboardData as GitHubDashboardContent;

export const githubLoader = {
  async getDashboard(): Promise<GitHubDashboardContent> {
    return githubDashboard;
  },
};
