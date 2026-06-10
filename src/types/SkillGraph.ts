export interface SkillGraphSection {
  eyebrow: string;
  title: string;
  description: string;
}

export interface SkillGraphNode {
  id: string;
  name: string;
  category: string;
  level: number;
  description: string;
  technologies: readonly string[];
  connections: readonly string[];
}

export interface SkillGraphData {
  section: SkillGraphSection;
  skills: readonly SkillGraphNode[];
}
