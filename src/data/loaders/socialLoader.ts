import socialData from '@/data/socials.json';
import type { SocialLink } from '@/types';

const socials: SocialLink[] = socialData;

export const socialLoader = {
  async getAll(): Promise<readonly SocialLink[]> {
    return socials;
  },

  async getById(id: string): Promise<SocialLink | undefined> {
    return socials.find((social) => social.id === id);
  },
};
