import { Card } from '@/components/ui';
import type { ProjectIntelligence } from '@/types';

interface ProjectMetricsProps {
  projects: readonly ProjectIntelligence[];
}

export function ProjectMetrics({ projects }: ProjectMetricsProps) {
  const technologyCount = new Set(projects.flatMap((project) => project.technologies)).size;
  const aiProjectCount = projects.filter((project) => project.aiRelated).length;
  const activeSystemCount = projects.filter((project) => project.status === 'active').length;

  const metrics = [
    { id: 'total-projects', label: 'Total Projects', value: projects.length },
    { id: 'ai-projects', label: 'AI Projects', value: aiProjectCount },
    { id: 'technologies-used', label: 'Technologies Used', value: technologyCount },
    { id: 'active-systems', label: 'Active Systems', value: activeSystemCount },
  ];

  return (
    <div aria-label="Project intelligence metrics" className="project-metrics">
      {metrics.map((metric) => (
        <Card className="project-metric" key={metric.id} variant="glass">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </Card>
      ))}
    </div>
  );
}
