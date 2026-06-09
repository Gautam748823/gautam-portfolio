import { Badge, Card } from '@/components/ui';
import { Container, Section, Stack } from '@/components/layout';

export function HeroSection() {
  return (
    <Section className="hero-section" id="home" spacingSize="lg">
      <Container>
        <div className="hero-section__grid">
          <Stack className="hero-section__content" gap="lg">
            <Badge>AI Command Center</Badge>
            <div>
              <h1 className="hero-section__title">Gautam's Portfolio</h1>
              <p className="hero-section__roles">
                <span>AI Engineer</span>
                <span aria-hidden="true">/</span>
                <span>Full Stack Developer</span>
              </p>
            </div>
            <p className="hero-section__description">
              Designing dependable intelligent systems and full-stack products with a focus on
              clarity, performance, and meaningful user experiences.
            </p>
            <Stack direction="row" gap="sm" wrap>
              <a className="shell-action shell-action--primary" href="#projects">
                View Projects
              </a>
              <a className="shell-action shell-action--secondary" href="#contact">
                Contact Me
              </a>
            </Stack>
          </Stack>

          <Card className="assistant-placeholder" variant="glass">
            <div aria-hidden="true" className="assistant-placeholder__signal">
              <span />
              <span />
              <span />
            </div>
            <p className="assistant-placeholder__label">Digital Assistant</p>
            <h2>Intelligence layer reserved</h2>
            <p>Phase 2: Interactive AI Assistant Coming Soon</p>
            <div className="assistant-placeholder__status">
              <span aria-hidden="true" />
              Foundation online
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
