import { useMemo } from 'react';
import type { SkillGraphNode } from '@/types';
import { SkillNode } from './SkillNode';

interface SkillsGraphProps {
  onSelectSkill: (id: string) => void;
  selectedSkill: SkillGraphNode;
  skills: readonly SkillGraphNode[];
}

interface SkillPosition {
  id: string;
  x: number;
  y: number;
}

interface SkillConnection {
  from: SkillPosition;
  id: string;
  isActive: boolean;
  to: SkillPosition;
}

const graphCenter = { x: 50, y: 50 };
const graphRadius = { x: 36, y: 33 };

function buildPositions(skills: readonly SkillGraphNode[]): ReadonlyMap<string, SkillPosition> {
  const positions = skills.map((skill, index) => {
    const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;

    return {
      id: skill.id,
      x: graphCenter.x + Math.cos(angle) * graphRadius.x,
      y: graphCenter.y + Math.sin(angle) * graphRadius.y,
    };
  });

  return new Map(positions.map((position) => [position.id, position]));
}

function buildConnections(
  skills: readonly SkillGraphNode[],
  positionsById: ReadonlyMap<string, SkillPosition>,
  selectedSkill: SkillGraphNode,
): readonly SkillConnection[] {
  const visited = new Set<string>();
  const selectedConnections = new Set(selectedSkill.connections);
  const connections: SkillConnection[] = [];

  skills.forEach((skill) => {
    skill.connections.forEach((connectionId) => {
      const edgeId = [skill.id, connectionId].sort().join(':');
      const from = positionsById.get(skill.id);
      const to = positionsById.get(connectionId);

      if (visited.has(edgeId) || !from || !to) {
        return;
      }

      visited.add(edgeId);
      connections.push({
        from,
        id: edgeId,
        isActive:
          skill.id === selectedSkill.id ||
          connectionId === selectedSkill.id ||
          (selectedConnections.has(skill.id) && selectedConnections.has(connectionId)),
        to,
      });
    });
  });

  return connections;
}

export function SkillsGraph({ onSelectSkill, selectedSkill, skills }: SkillsGraphProps) {
  const positionsById = useMemo(() => buildPositions(skills), [skills]);
  const connections = useMemo(
    () => buildConnections(skills, positionsById, selectedSkill),
    [positionsById, selectedSkill, skills],
  );
  const selectedConnections = useMemo(
    () => new Set(selectedSkill.connections),
    [selectedSkill.connections],
  );

  return (
    <div
      aria-label="Interactive neural skills graph"
      className="skills-graph"
      role="group"
    >
      <svg
        aria-hidden="true"
        className="skills-graph__connections"
        focusable="false"
        viewBox="0 0 100 100"
      >
        {connections.map((connection) => (
          <line
            className={`skills-graph__line ${
              connection.isActive ? 'skills-graph__line--active' : ''
            }`.trim()}
            key={connection.id}
            x1={connection.from.x}
            x2={connection.to.x}
            y1={connection.from.y}
            y2={connection.to.y}
          />
        ))}
      </svg>

      <div className="skills-graph__hub" aria-hidden="true">
        <span />
      </div>

      {skills.map((skill) => {
        const position = positionsById.get(skill.id);

        if (!position) {
          return null;
        }

        return (
          <SkillNode
            isConnected={selectedConnections.has(skill.id)}
            isSelected={selectedSkill.id === skill.id}
            key={skill.id}
            node={skill}
            onSelect={onSelectSkill}
            position={position}
          />
        );
      })}
    </div>
  );
}
