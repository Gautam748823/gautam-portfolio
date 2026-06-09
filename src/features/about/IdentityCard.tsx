import { Card } from '@/components/ui';
import type { AboutContent } from '@/types';

interface IdentityCardProps {
  identity: AboutContent['identity'];
}

export function IdentityCard({ identity }: IdentityCardProps) {
  return (
    <Card className="about-identity-card about-reveal" variant="glass">
      <p className="about-kicker">{identity.eyebrow}</p>
      <h3>{identity.title}</h3>
      <p>{identity.description}</p>
      <ul className="about-identity-card__roles" aria-label={identity.eyebrow}>
        {identity.roles.map((role) => (
          <li key={role.id}>{role.label}</li>
        ))}
      </ul>
    </Card>
  );
}
