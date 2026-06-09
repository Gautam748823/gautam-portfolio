import { Card } from '@/components/ui';
import type { AboutContent } from '@/types';

interface MissionPanelProps {
  mission: AboutContent['mission'];
}

export function MissionPanel({ mission }: MissionPanelProps) {
  return (
    <Card className="about-mission about-reveal" variant="glass">
      <p className="about-kicker">{mission.eyebrow}</p>
      <h3>{mission.title}</h3>
      <p>{mission.statement}</p>
    </Card>
  );
}
