import { Card, SectionHeader } from '@/components/ui';
import { Container, Section } from '@/components/layout';

export interface ContactSectionProps {
  email?: string;
}

export function ContactSection({ email }: ContactSectionProps) {
  const contactUrl = email ? `mailto:${email}` : '#contact';

  return (
    <Section className="contact-section" id="contact" spacingSize="lg">
      <Container>
        <Card className="contact-section__card" variant="glass">
          <SectionHeader
            description="The complete contact experience will arrive in a future phase. For now, start a direct conversation."
            eyebrow="Connect"
            title="Contact"
          />
          <a className="shell-action shell-action--primary" href={contactUrl}>
            Send an Email
          </a>
        </Card>
      </Container>
    </Section>
  );
}
