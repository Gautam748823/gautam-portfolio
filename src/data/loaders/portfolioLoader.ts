import portfolioData from '@/data/portfolio.json';
import type { PortfolioMetadata } from '@/types';

const portfolio: PortfolioMetadata = portfolioData;

export const portfolioLoader = {
  async getAll(): Promise<PortfolioMetadata> {
    return portfolio;
  },
};
