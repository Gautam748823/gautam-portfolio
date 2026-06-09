import { Badge, Card } from '@/components/ui';
import { Container, Section, Stack } from '@/components/layout';
import { AIOrb, HeroReveal } from '@/features/intro';

export function HeroSection() {
  return (
    <Section className="hero-section" id="home" spacingSize="lg">
      <Container>
        <div className="hero-section__grid">
          <Stack className="hero-section__content" gap="lg">
            <Badge>AI Command Center</Badge>
            <div>
              <h1 className="hero-section__title" aria-label="Gautam">
                <HeroReveal index={0}>Gautam</HeroReveal>
              </h1>
              <p className="hero-section__roles">
                <HeroReveal index={1}>
                  <span>AI Engineer</span>
                </HeroReveal>
                <span aria-hidden="true">/</span>
                <HeroReveal index={2}>
                  <span>Full Stack Developer</span>
                </HeroReveal>
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

          <Card className="assistant-core" variant="glass" aria-labelledby="assistant-core-title">
            <AIOrb />
            <p className="assistant-core__label">Digital Assistant</p>
            <h2 id="assistant-core-title">AI Core Online</h2>
            <p>Neural intelligence layer initialized for guided portfolio exploration.</p>
            <div className="assistant-placeholder__status">
              <span aria-hidden="true" />
              Assistant active
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
