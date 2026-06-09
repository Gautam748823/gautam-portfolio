export interface Skill {
  id: string;
  name: string;
  level: 'learning' | 'working' | 'proficient';
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface SkillData {
  categories: SkillCategory[];
}
