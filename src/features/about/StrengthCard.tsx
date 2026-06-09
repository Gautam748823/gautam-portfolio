import { Card } from '@/components/ui';
import type { AboutStrength } from '@/types';

interface StrengthCardProps {
  strength: AboutStrength;
}

export function StrengthCard({ strength }: StrengthCardProps) {
  return (
    <Card className="about-strength-card about-reveal">
      <span className="about-strength-card__signal" aria-hidden="true" />
      <h4>{strength.title}</h4>
      <p>{strength.description}</p>
    </Card>
  );
}
