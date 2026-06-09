import { Container, Stack } from '@/components/layout';
import type { PortfolioMetadata, SocialLink } from '@/types';

export interface FooterProps {
  portfolio: PortfolioMetadata | null;
  socials: readonly SocialLink[];
}

function getSocialUrl(socials: readonly SocialLink[], platform: string, fallback: string): string {
  return (
    socials.find((social) => social.platform.toLowerCase() === platform.toLowerCase())?.url ??
    fallback
  );
}

export function Footer({ portfolio, socials }: FooterProps) {
  const email = portfolio?.email ?? '';
  const github = getSocialUrl(socials, 'GitHub', portfolio?.github ?? '#home');
  const linkedin = getSocialUrl(socials, 'LinkedIn', portfolio?.linkedin ?? '#home');
  const emailUrl = email ? `mailto:${email}` : '#contact';
  const resumeUrl = email
    ? `mailto:${email}?subject=${encodeURIComponent('Resume request')}`
    : '#contact';

  return (
    <footer className="shell-footer">
      <Container>
        <Stack
          align="center"
          className="shell-footer__inner"
          direction="row"
          justify="between"
          wrap
        >
          <div>
            <p className="shell-footer__brand">Gautam's Portfolio</p>
            <p className="shell-footer__caption">AI Command Center shell</p>
          </div>

          <nav aria-label="Footer navigation" className="shell-footer__links">
            <a href={github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a href={linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href={emailUrl}>Email</a>
            <a href={resumeUrl}>Resume</a>
          </nav>
        </Stack>
      </Container>
    </footer>
  );
}
