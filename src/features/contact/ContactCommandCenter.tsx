import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import type { ContactContent } from '@/types';
import { AvailabilityGrid } from './AvailabilityGrid';
import { ContactActions } from './ContactActions';
import { ContactCard } from './ContactCard';
import { FutureCommunicationLayer } from './FutureCommunicationLayer';
import { RecruiterIntelligenceCard } from './RecruiterIntelligenceCard';

interface ContactCommandCenterProps {
  contact: ContactContent | null;
}

export function ContactCommandCenter({ contact }: ContactCommandCenterProps) {
  if (!contact) {
    return null;
  }

  return (
    <Section
      aria-labelledby="contact-title"
      className="contact-command"
      id="contact"
      spacingSize="lg"
    >
      <Container>
        <div className="contact-command__layout">
          <SectionHeader
            description={contact.section.description}
            eyebrow={contact.section.eyebrow}
            id="contact-title"
            title={contact.section.title}
          />

          <div className="contact-command__intelligence">
            <ContactCard channels={contact.channels} identity={contact.identity} />
            <RecruiterIntelligenceCard
              recruiterCta={contact.recruiterCta}
              resumeIntelligence={contact.resumeIntelligence}
            />
          </div>

          <ContactActions
            channels={contact.channels}
            resumeIntelligence={contact.resumeIntelligence}
          />

          <AvailabilityGrid availability={contact.availability} />
          <FutureCommunicationLayer integrations={contact.futureIntegrations} />
        </div>
      </Container>
    </Section>
  );
}
