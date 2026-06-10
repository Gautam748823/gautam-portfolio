import { useMemo, useState } from 'react';
import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import type { SkillGraphData } from '@/types';
import { SkillDetails } from './SkillDetails';
import { SkillLegend } from './SkillLegend';
import { SkillsGraph } from './SkillsGraph';

interface SkillsSectionProps {
  skillGraph: SkillGraphData | null;
}

export function SkillsSection({ skillGraph }: SkillsSectionProps) {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const selectedSkill = useMemo(() => {
    if (!skillGraph) {
      return null;
    }

    return (
      skillGraph.skills.find((skill) => skill.id === selectedSkillId) ?? skillGraph.skills[0] ?? null
    );
  }, [selectedSkillId, skillGraph]);

  const skillsById = useMemo(() => {
    if (!skillGraph) {
      return new Map();
    }

    return new Map(skillGraph.skills.map((skill) => [skill.id, skill]));
  }, [skillGraph]);

  const connectedSkills = useMemo(() => {
    if (!selectedSkill) {
      return [];
    }

    return selectedSkill.connections
      .map((connectionId) => skillsById.get(connectionId))
      .filter((skill): skill is NonNullable<typeof skill> => Boolean(skill));
  }, [selectedSkill, skillsById]);

  if (!skillGraph || !selectedSkill) {
    return null;
  }

  return (
    <Section
      aria-labelledby="skills-title"
      className="skills-section"
      id="skills"
      spacingSize="lg"
    >
      <Container>
        <div className="skills-section__layout">
          <SectionHeader
            description={skillGraph.section.description}
            eyebrow={skillGraph.section.eyebrow}
            id="skills-title"
            title={skillGraph.section.title}
          />

          <div className="skills-section__workspace">
            <div className="skills-section__graph-panel">
              <SkillsGraph
                onSelectSkill={setSelectedSkillId}
                selectedSkill={selectedSkill}
                skills={skillGraph.skills}
              />
              <SkillLegend skills={skillGraph.skills} />
            </div>

            <SkillDetails connections={connectedSkills} skill={selectedSkill} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
