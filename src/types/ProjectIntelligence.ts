export type ProjectCategory =
  | 'AI'
  | 'Full Stack'
  | 'Computer Vision'
  | 'Research'
  | 'Backend';

export type ProjectStatus = 'concept' | 'prototype' | 'active' | 'completed';

export type ProjectComplexity = 'moderate' | 'advanced' | 'expert';

export interface ProjectIntelligence {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  description: string;
  problem: string;
  solution: string;
  architecture: readonly string[];
  technologies: readonly string[];
  highlights: readonly string[];
  challenges: readonly string[];
  outcomes: readonly string[];
  githubUrl: string | null;
  demoUrl: string | null;
  image: string;
  aiRelated: boolean;
  complexity: ProjectComplexity;
  year: number;
  repository: string | null;
  stars: number | null;
  commits: number | null;
  lastUpdated: string | null;
}

export type ProjectFilter = 'All' | ProjectCategory;
