import { Card } from '@/components/ui';
import type { RecruiterCta, ResumeIntelligence } from '@/types';

interface RecruiterIntelligenceCardProps {
  recruiterCta: RecruiterCta;
  resumeIntelligence: ResumeIntelligence;
}

export function RecruiterIntelligenceCard({
  recruiterCta,
  resumeIntelligence,
}: RecruiterIntelligenceCardProps) {
  const metrics = [
    { label: 'Education', value: resumeIntelligence.degree },
    { label: 'CGPA', value: resumeIntelligence.cgpa },
    { label: 'Projects', value: resumeIntelligence.projectCount },
    { label: 'Technologies', value: resumeIntelligence.coreTechnologiesCount },
    { label: 'Graduation', value: resumeIntelligence.graduationYear },
    { label: 'Focus Areas', value: resumeIntelligence.focusAreas.join(' + ') },
  ];

  return (
    <Card className="recruiter-card" variant="glass">
      <div className="recruiter-card__header">
        <span>Recruiter Intelligence</span>
        <h3>{recruiterCta.headline}</h3>
        <p>{recruiterCta.supportingMessage}</p>
      </div>

      <dl className="recruiter-card__metrics">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
