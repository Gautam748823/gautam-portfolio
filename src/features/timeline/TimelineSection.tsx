import type { TokenStyle } from '@/design-system/styleTypes';
import type { TimelineCategoryMeta, TimelineMilestone, TimelineStatus } from '@/types';
import { TimelineCard } from './TimelineCard';
import { TimelineNode } from './TimelineNode';

interface TimelineSectionProps {
  categoriesById: ReadonlyMap<string, TimelineCategoryMeta>;
  expandedId: string | null;
  milestones: readonly TimelineMilestone[];
  onToggleMilestone: (id: string) => void;
  statusLabels: Record<TimelineStatus, string>;
}

export function TimelineSection({
  categoriesById,
  expandedId,
  milestones,
  onToggleMilestone,
  statusLabels,
}: TimelineSectionProps) {
  return (
    <ol className="timeline-list" aria-label="Chronological engineering journey">
      {milestones.map((milestone, index) => {
        const category = categoriesById.get(milestone.category);

        if (!category) {
          return null;
        }

        return (
          <li
            className="timeline-list__item timeline-reveal"
            key={milestone.id}
            style={{ '--timeline-index': index } as TokenStyle}
          >
            <TimelineNode status={milestone.status} />
            <TimelineCard
              category={category}
              isExpanded={expandedId === milestone.id}
              milestone={milestone}
              onToggle={onToggleMilestone}
              statusLabel={statusLabels[milestone.status]}
            />
          </li>
        );
      })}
    </ol>
  );
}
