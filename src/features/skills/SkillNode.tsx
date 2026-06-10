import type { TokenStyle } from '@/design-system/styleTypes';
import type { SkillGraphNode } from '@/types';

interface SkillNodeProps {
  isConnected: boolean;
  isSelected: boolean;
  node: SkillGraphNode;
  onSelect: (id: string) => void;
  position: {
    x: number;
    y: number;
  };
}

export function SkillNode({ isConnected, isSelected, node, onSelect, position }: SkillNodeProps) {
  const nodeStyle: TokenStyle = {
    '--skill-node-x': `${position.x}%`,
    '--skill-node-y': `${position.y}%`,
    '--skill-node-level': `${node.level}%`,
  };

  const stateClass = isSelected
    ? 'skill-node--selected'
    : isConnected
      ? 'skill-node--connected'
      : '';

  return (
    <button
      aria-label={`${node.name}, ${node.level} percent proficiency, ${node.connections.length} related connections`}
      aria-pressed={isSelected}
      className={`skill-node ${stateClass}`.trim()}
      onClick={() => onSelect(node.id)}
      style={nodeStyle}
      type="button"
    >
      <span className="skill-node__ring" aria-hidden="true" />
      <span className="skill-node__core">
        <span className="skill-node__name">{node.name}</span>
        <span className="skill-node__category">{node.category}</span>
      </span>
    </button>
  );
}
