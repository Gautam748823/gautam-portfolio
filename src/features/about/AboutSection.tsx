import { Container, Section } from '@/components/layout';
import { Card, SectionHeader } from '@/components/ui';
import { fadeUp, stagger } from '@/animations';
import type { TokenStyle } from '@/design-system/styleTypes';
import type { AboutContent } from '@/types';
import { FocusAreaCard } from './FocusAreaCard';
import { IdentityCard } from './IdentityCard';
import { MissionPanel } from './MissionPanel';
import { StrengthCard } from './StrengthCard';

interface AboutSectionProps {
  about: AboutContent | null;
}

function revealStyle(index: number): TokenStyle {
  return {
    '--about-reveal-from': fadeUp.initial.transform,
    '--about-reveal-to': fadeUp.animate.transform,
    '--about-reveal-duration': `${fadeUp.transition.duration}ms`,
    '--about-reveal-easing': fadeUp.transition.easing,
    '--about-reveal-delay': `${index * stagger.delay}ms`,
  };
}

export function AboutSection({ about }: AboutSectionProps) {
  if (!about) {
    return null;
  }

  return (
    <Section className="about-section" id="about" spacingSize="lg" aria-labelledby="about-title">
      <Container>
        <div className="about-section__layout">
          <SectionHeader
            className="about-reveal"
            description={about.section.description}
            eyebrow={about.section.eyebrow}
            id="about-title"
            style={revealStyle(0)}
            title={about.section.title}
          />

          <div className="about-section__briefing">
            <div style={revealStyle(1)}>
              <IdentityCard identity={about.identity} />
            </div>

            <article className="about-story about-reveal" style={revealStyle(2)}>
              <p className="about-kicker">{about.summary.eyebrow}</p>
              <h3>{about.summary.title}</h3>
              {about.summary.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </div>

          <section className="about-block" aria-labelledby="about-focus-title">
            <div className="about-block__header about-reveal" style={revealStyle(3)}>
              <p className="about-kicker">{about.currentFocus.eyebrow}</p>
              <h3 id="about-focus-title">{about.currentFocus.title}</h3>
              <p>{about.currentFocus.description}</p>
            </div>
            <div className="about-focus-grid">
              {about.currentFocus.areas.map((area, index) => (
                <div key={area.id} style={revealStyle(index + 4)}>
                  <FocusAreaCard area={area} index={index} />
                </div>
              ))}
            </div>
          </section>

          <MissionPanel mission={about.mission} />

          <section className="about-block" aria-labelledby="about-strengths-title">
            <div className="about-block__header about-reveal" style={revealStyle(5)}>
              <p className="about-kicker">{about.strengths.eyebrow}</p>
              <h3 id="about-strengths-title">{about.strengths.title}</h3>
            </div>
            <div className="about-strength-grid">
              {about.strengths.items.map((strength, index) => (
                <div key={strength.id} style={revealStyle(index + 6)}>
                  <StrengthCard strength={strength} />
                </div>
              ))}
            </div>
          </section>

          <section className="about-block" aria-labelledby="about-stats-title">
            <div className="about-block__header about-reveal" style={revealStyle(7)}>
              <p className="about-kicker">{about.highlights.eyebrow}</p>
              <h3 id="about-stats-title">{about.highlights.title}</h3>
            </div>
            <div className="about-stats-grid">
              {about.highlights.items.map((highlight) => (
                <Card className="about-stat about-reveal" key={highlight.id} variant="outlined">
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                  <p>{highlight.description}</p>
                </Card>
              ))}
            </div>
          </section>

          <Card className="about-journey about-reveal" style={revealStyle(8)} variant="glass">
            <div>
              <p className="about-kicker">{about.journeyPreview.eyebrow}</p>
              <h3>{about.journeyPreview.title}</h3>
              <p>{about.journeyPreview.description}</p>
            </div>
            <a className="shell-action shell-action--secondary" href={about.journeyPreview.href}>
              {about.journeyPreview.actionLabel}
            </a>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
