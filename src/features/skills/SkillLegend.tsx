import type { SkillGraphNode } from '@/types';

interface SkillLegendProps {
  skills: readonly SkillGraphNode[];
}

function formatCategory(category: string) {
  return category
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ');
}

export function SkillLegend({ skills }: SkillLegendProps) {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <ul className="skill-legend" aria-label="Skill graph categories">
      {categories.map((category) => (
        <li key={category}>
          <span aria-hidden="true" />
          {formatCategory(category)}
        </li>
      ))}
    </ul>
  );
}
