import type { TimelineStatus } from '@/types';

interface TimelineNodeProps {
  status: TimelineStatus;
}

export function TimelineNode({ status }: TimelineNodeProps) {
  return (
    <span
      aria-hidden="true"
      className={`timeline-node timeline-node--${status}`}
    >
      <span />
    </span>
  );
}
