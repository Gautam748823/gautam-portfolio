import { Card } from '@/components/ui';
import type { ContactChannel, ContactIdentity } from '@/types';

interface ContactCardProps {
  channels: readonly ContactChannel[];
  identity: ContactIdentity;
}

export function ContactCard({ channels, identity }: ContactCardProps) {
  return (
    <Card className="contact-card" variant="glass">
      <div className="contact-card__header">
        <span className="contact-card__status">
          <span aria-hidden="true" />
          {identity.status}
        </span>
        <h3>{identity.fullName}</h3>
        <p>{identity.roles.join(' | ')}</p>
      </div>

      <dl className="contact-card__details">
        <div>
          <dt>Location</dt>
          <dd>{identity.location}</dd>
        </div>
        {channels.map((channel) => (
          <div key={channel.id}>
            <dt>{channel.label}</dt>
            <dd>
              <a
                href={channel.href}
                rel={channel.external ? 'noreferrer' : undefined}
                target={channel.external ? '_blank' : undefined}
              >
                {channel.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
