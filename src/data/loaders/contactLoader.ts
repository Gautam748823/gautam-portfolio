import contactData from '@/data/contact.json';
import type { ContactContent } from '@/types';

const contact = contactData as ContactContent;

export const contactLoader = {
  async getAll(): Promise<ContactContent> {
    return contact;
  },
};
