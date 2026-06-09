import { Card } from '@/components/ui';
import type { AboutFocusArea } from '@/types';

interface FocusAreaCardProps {
  area: AboutFocusArea;
  index: number;
}

export function FocusAreaCard({ area, index }: FocusAreaCardProps) {
  return (
    <Card className="about-focus-card about-reveal">
      <span className="about-card-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h4>{area.title}</h4>
      <p>{area.description}</p>
    </Card>
  );
}
