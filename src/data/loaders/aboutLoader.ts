import aboutData from '@/data/about.json';
import type { AboutContent } from '@/types';

const about: AboutContent = aboutData;

export const aboutLoader = {
  async getAll(): Promise<AboutContent> {
    return about;
  },
};
