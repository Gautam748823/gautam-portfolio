import type { ContactChannel, ResumeIntelligence } from '@/types';

interface ContactActionsProps {
  channels: readonly ContactChannel[];
  resumeIntelligence: ResumeIntelligence;
}

function findChannel(channels: readonly ContactChannel[], id: string) {
  return channels.find((channel) => channel.id === id);
}

export function ContactActions({ channels, resumeIntelligence }: ContactActionsProps) {
  const email = findChannel(channels, 'email');
  const github = findChannel(channels, 'github');
  const linkedin = findChannel(channels, 'linkedin');

  const actions = [
    {
      href: resumeIntelligence.resumeUrl,
      label: 'Download Resume',
      external: true,
      download: true,
    },
    {
      href: github?.href ?? '#contact',
      label: 'Open GitHub',
      external: true,
      download: false,
    },
    {
      href: linkedin?.href ?? '#contact',
      label: 'Open LinkedIn',
      external: true,
      download: false,
    },
    {
      href: email?.href ?? '#contact',
      label: 'Send Email',
      external: false,
      download: false,
    },
  ];

  return (
    <div aria-label="Contact action center" className="contact-actions">
      {actions.map((action) => (
        <a
          className="contact-actions__link"
          download={action.download ? true : undefined}
          href={action.href}
          key={action.label}
          rel={action.external ? 'noreferrer' : undefined}
          target={action.external ? '_blank' : undefined}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}
