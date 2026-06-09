export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  status: 'planned' | 'in-progress' | 'completed';
}
