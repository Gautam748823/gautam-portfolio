import { useEffect, useMemo, useRef, useState } from 'react';
import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { fadeUp, stagger } from '@/animations';
import type { TokenStyle } from '@/design-system/styleTypes';
import type { TimelineCategory, TimelineData } from '@/types';
import { TimelineFilters } from './TimelineFilters';
import { TimelineSection } from './TimelineSection';

interface JourneyTimelineProps {
  timeline: TimelineData | null;
}

const revealStyle: TokenStyle = {
  '--timeline-reveal-from': fadeUp.initial.transform,
  '--timeline-reveal-to': fadeUp.animate.transform,
  '--timeline-reveal-duration': `${fadeUp.transition.duration}ms`,
  '--timeline-reveal-easing': fadeUp.transition.easing,
  '--timeline-stagger-delay': `${stagger.delay}ms`,
};

export function JourneyTimeline({ timeline }: JourneyTimelineProps) {
  const [activeCategory, setActiveCategory] = useState<TimelineCategory | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const layoutRef = useRef<HTMLDivElement | null>(null);

  const categoriesById = useMemo(() => {
    if (!timeline) {
      return new Map();
    }

    return new Map(timeline.categories.map((category) => [category.id, category]));
  }, [timeline]);

  const filteredMilestones = useMemo(() => {
    if (!timeline) {
      return [];
    }

    if (activeCategory === 'all') {
      return timeline.milestones;
    }

    return timeline.milestones.filter((milestone) => milestone.category === activeCategory);
  }, [activeCategory, timeline]);

  useEffect(() => {
    const layoutElement = layoutRef.current;

    if (!layoutElement) {
      return;
    }

    const revealElements = Array.from(layoutElement.querySelectorAll('.timeline-reveal'));

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('timeline-reveal--visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeCategory, filteredMilestones]);

  if (!timeline) {
    return null;
  }

  const toggleMilestone = (id: string) => {
    setExpandedId((currentId) => (currentId === id ? null : id));
  };

  const selectCategory = (category: TimelineCategory | 'all') => {
    setActiveCategory(category);
    setExpandedId(null);
  };

  return (
    <Section
      aria-labelledby="journey-title"
      className="journey-timeline"
      id="journey"
      spacingSize="lg"
      style={revealStyle}
    >
      <Container>
        <div className="journey-timeline__layout" ref={layoutRef}>
          <SectionHeader
            className="timeline-reveal"
            description={timeline.section.description}
            eyebrow={timeline.section.eyebrow}
            id="journey-title"
            title={timeline.section.title}
          />

          <TimelineFilters
            activeCategory={activeCategory}
            categories={timeline.categories}
            filters={timeline.filters}
            onSelectCategory={selectCategory}
          />

          <TimelineSection
            categoriesById={categoriesById}
            expandedId={expandedId}
            milestones={filteredMilestones}
            onToggleMilestone={toggleMilestone}
            statusLabels={timeline.statusLabels}
          />
        </div>
      </Container>
    </Section>
  );
}
