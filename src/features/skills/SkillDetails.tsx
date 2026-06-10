import { Card } from '@/components/ui';
import type { SkillGraphNode } from '@/types';

interface SkillDetailsProps {
  connections: readonly SkillGraphNode[];
  skill: SkillGraphNode;
}

export function SkillDetails({ connections, skill }: SkillDetailsProps) {
  return (
    <Card
      aria-labelledby="skill-details-title"
      className="skill-details"
      role="region"
      variant="glass"
    >
      <div className="skill-details__header">
        <p>{skill.category}</p>
        <h3 id="skill-details-title">{skill.name}</h3>
      </div>

      <p className="skill-details__description">{skill.description}</p>

      <div className="skill-details__level" aria-label={`${skill.level} percent proficiency`}>
        <div className="skill-details__level-meta">
          <span>Proficiency</span>
          <strong>{skill.level}</strong>
        </div>
        <div className="skill-details__track" aria-hidden="true">
          <span style={{ width: `${skill.level}%` }} />
        </div>
      </div>

      <div className="skill-details__block">
        <h4>Technologies</h4>
        <ul className="skill-details__tags" aria-label={`${skill.name} technologies`}>
          {skill.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <div className="skill-details__block">
        <h4>Related Connections</h4>
        <p className="skill-details__count">
          {connections.length} {connections.length === 1 ? 'connection' : 'connections'}
        </p>
        <ul className="skill-details__connections" aria-label={`${skill.name} related skills`}>
          {connections.map((connection) => (
            <li key={connection.id}>{connection.name}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
