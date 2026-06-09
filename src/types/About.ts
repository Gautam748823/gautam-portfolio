export interface AboutIdentityRole {
  id: string;
  label: string;
}

export interface AboutFocusArea {
  id: string;
  title: string;
  description: string;
}

export interface AboutStrength {
  id: string;
  title: string;
  description: string;
}

export interface AboutHighlight {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface AboutJourneyPreview {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
}

export interface AboutContent {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  identity: {
    eyebrow: string;
    title: string;
    description: string;
    roles: readonly AboutIdentityRole[];
  };
  summary: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  currentFocus: {
    eyebrow: string;
    title: string;
    description: string;
    areas: readonly AboutFocusArea[];
  };
  mission: {
    eyebrow: string;
    title: string;
    statement: string;
  };
  strengths: {
    eyebrow: string;
    title: string;
    items: readonly AboutStrength[];
  };
  highlights: {
    eyebrow: string;
    title: string;
    items: readonly AboutHighlight[];
  };
  journeyPreview: AboutJourneyPreview;
}
