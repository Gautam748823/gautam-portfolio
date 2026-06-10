export interface ContactIdentity {
  fullName: string;
  roles: readonly string[];
  tagline: string;
  location: string;
  status: string;
}

export type ContactChannelType = 'email' | 'github' | 'linkedin';

export interface ContactChannel {
  id: string;
  type: ContactChannelType;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export interface ContactAvailability {
  id: string;
  label: string;
  description: string;
  active: boolean;
}

export interface ResumeIntelligence {
  cgpa: string;
  degree: string;
  graduationYear: string;
  projectCount: string;
  coreTechnologiesCount: string;
  focusAreas: readonly string[];
  resumeUrl: string;
}

export interface RecruiterCta {
  headline: string;
  supportingMessage: string;
}

export interface ContactFutureIntegration {
  id: string;
  title: string;
  description: string;
  status: 'planned';
}

export interface ContactContent {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  identity: ContactIdentity;
  channels: readonly ContactChannel[];
  availability: readonly ContactAvailability[];
  resumeIntelligence: ResumeIntelligence;
  recruiterCta: RecruiterCta;
  futureIntegrations: readonly ContactFutureIntegration[];
}
