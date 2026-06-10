import { Card } from '@/components/ui';
import type { ContactFutureIntegration } from '@/types';

interface FutureCommunicationLayerProps {
  integrations: readonly ContactFutureIntegration[];
}

export function FutureCommunicationLayer({ integrations }: FutureCommunicationLayerProps) {
  return (
    <div className="future-contact-layer">
      <div className="future-contact-layer__header">
        <span>Future Communication Layer</span>
        <h3>Planned system modules</h3>
      </div>

      <div className="future-contact-layer__grid">
        {integrations.map((integration) => (
          <Card className="future-contact-module" key={integration.id} variant="outlined">
            <span>{integration.status}</span>
            <h4>{integration.title}</h4>
            <p>{integration.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
