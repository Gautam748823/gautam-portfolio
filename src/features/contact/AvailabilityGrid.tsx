import { Card } from '@/components/ui';
import type { ContactAvailability } from '@/types';

interface AvailabilityGridProps {
  availability: readonly ContactAvailability[];
}

export function AvailabilityGrid({ availability }: AvailabilityGridProps) {
  return (
    <div className="availability-grid" aria-label="Availability system">
      {availability.map((item) => (
        <Card className="availability-card" key={item.id} variant="outlined">
          <span>{item.active ? 'Active' : 'Inactive'}</span>
          <h3>{item.label}</h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
