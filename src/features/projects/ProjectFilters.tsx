import type { ProjectFilter } from '@/types';

const filters: readonly ProjectFilter[] = [
  'All',
  'AI',
  'Full Stack',
  'Computer Vision',
  'Research',
  'Backend',
];

interface ProjectFiltersProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div aria-label="Filter projects" className="project-filters" role="group">
      {filters.map((filter) => (
        <button
          aria-pressed={activeFilter === filter}
          className={`project-filters__button${
            activeFilter === filter ? ' project-filters__button--active' : ''
          }`}
          key={filter}
          onClick={() => onFilterChange(filter)}
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
