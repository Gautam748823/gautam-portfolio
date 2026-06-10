import { Card } from '@/components/ui';
import type { TimelineCategoryMeta, TimelineMilestone } from '@/types';

interface TimelineCardProps {
  category: TimelineCategoryMeta;
  isExpanded: boolean;
  milestone: TimelineMilestone;
  onToggle: (id: string) => void;
  statusLabel: string;
}

export function TimelineCard({
  category,
  isExpanded,
  milestone,
  onToggle,
  statusLabel,
}: TimelineCardProps) {
  const detailsId = `${milestone.id}-details`;
  const tags = milestone.tags ?? [];

  return (
    <Card className="timeline-card" variant="glass">
      <div className="timeline-card__meta">
        <span>{category.label}</span>
        <span className={`timeline-card__status timeline-card__status--${milestone.status}`}>
          {statusLabel}
        </span>
      </div>

      <button
        aria-controls={detailsId}
        aria-expanded={isExpanded}
        className="timeline-card__button"
        onClick={() => onToggle(milestone.id)}
        type="button"
      >
        <span className="timeline-card__timeframe">{milestone.timeframe}</span>
        <span className="timeline-card__title">{milestone.title}</span>
        <span className="timeline-card__summary">{milestone.summary}</span>
        <span className="timeline-card__toggle">{isExpanded ? 'Collapse details' : 'Expand details'}</span>
      </button>

      <div className="timeline-card__details" hidden={!isExpanded} id={detailsId}>
        <p>{milestone.details}</p>
        {tags.length > 0 ? (
          <ul className="timeline-card__tags" aria-label={`${milestone.title} tags`}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Card>
  );
}
