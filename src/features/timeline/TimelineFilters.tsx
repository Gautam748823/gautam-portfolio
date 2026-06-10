import type { TimelineCategory, TimelineData } from '@/types';

interface TimelineFiltersProps {
  activeCategory: TimelineCategory | 'all';
  categories: TimelineData['categories'];
  filters: TimelineData['filters'];
  onSelectCategory: (category: TimelineCategory | 'all') => void;
}

export function TimelineFilters({
  activeCategory,
  categories,
  filters,
  onSelectCategory,
}: TimelineFiltersProps) {
  return (
    <div className="timeline-filters" aria-label="Timeline category filters" role="toolbar">
      <button
        aria-pressed={activeCategory === 'all'}
        className={activeCategory === 'all' ? 'timeline-filter timeline-filter--active' : 'timeline-filter'}
        onClick={() => onSelectCategory('all')}
        type="button"
      >
        {filters.allLabel}
      </button>
      {categories.map((category) => (
        <button
          aria-pressed={activeCategory === category.id}
          className={
            activeCategory === category.id ? 'timeline-filter timeline-filter--active' : 'timeline-filter'
          }
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          title={category.description}
          type="button"
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
