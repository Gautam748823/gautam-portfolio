import analyticsDashboardData from '@/data/analyticsDashboard.json';
import type { AnalyticsDashboardContent } from '@/types/Analytics';

const analyticsDashboard = analyticsDashboardData as AnalyticsDashboardContent;

export const analyticsLoader = {
  async getDashboard(): Promise<AnalyticsDashboardContent> {
    return analyticsDashboard;
  },
};
