import { Card, SectionHeader } from '@/components/ui';
import { Container, Section } from '@/components/layout';

export interface PlaceholderSectionProps {
  description: string;
  eyebrow: string;
  id: string;
  title: string;
}

export function PlaceholderSection({ description, eyebrow, id, title }: PlaceholderSectionProps) {
  return (
    <Section className="placeholder-section" id={id} spacingSize="lg">
      <Container>
        <div className="placeholder-section__grid">
          <SectionHeader description={description} eyebrow={eyebrow} title={title} />
          <Card className="placeholder-section__card" variant="outlined">
            <span className="placeholder-section__index">{eyebrow}</span>
            <p>Architecture ready for future implementation.</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
