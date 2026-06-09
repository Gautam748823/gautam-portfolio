import { useCallback, useState } from 'react';
import { Container, Grid, PageLayout, Section, Stack } from '@/components/layout';
import { Badge, Button, Card, Loader, Modal, SectionHeader, Tooltip } from '@/components/ui';
import { colors, layout, radius, spacing, typography } from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';
import '@/design-system/showcase.css';

const spacingExamples = [
  ['xs', spacing.xs],
  ['sm', spacing.sm],
  ['md', spacing.md],
  ['lg', spacing.lg],
  ['xl', spacing.xl],
] as const;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const showcaseStyle: TokenStyle = {
    '--showcase-border': colors.border.subtle,
    '--showcase-muted': colors.muted,
    '--showcase-accent': colors.electricCyan,
    '--showcase-surface': colors.surface.subtle,
    '--showcase-radius': radius.md,
    '--showcase-space-xs': spacing.xs,
    '--showcase-space-sm': spacing.sm,
    '--showcase-space-md': spacing.md,
    '--showcase-space-lg': spacing.lg,
    '--showcase-space-xl': spacing.xl,
    '--showcase-title-size': typography.fontSize.lg,
    '--showcase-line-height': typography.lineHeight.normal,
    '--showcase-display-size': typography.fontSize.display,
    '--showcase-display-line-height': typography.lineHeight.tight,
    '--showcase-display-spacing': typography.letterSpacing.tight,
    '--showcase-heading-size': typography.fontSize['3xl'],
    '--showcase-heading-line-height': typography.lineHeight.tight,
    '--showcase-readable-width': layout.content.readable,
    '--showcase-body-line-height': typography.lineHeight.relaxed,
    '--showcase-label-width': spacing['2xl'],
    '--showcase-label-size': typography.fontSize.sm,
  };

  return (
    <PageLayout className="showcase" style={showcaseStyle}>
      <Container>
        <Stack className="showcase__intro" gap="sm">
          <Badge>Phase 0.3 Foundation</Badge>
          <h1 className="showcase__display">AI Command Center</h1>
          <p className="showcase__body">
            A temporary sandbox for visually verifying reusable design tokens, UI primitives, and
            responsive layout foundations.
          </p>
        </Stack>

        <Section>
          <Stack gap="xl">
            <SectionHeader
              description="Typed variants with accessible native button behavior."
              eyebrow="Primitives"
              title="Buttons"
            />
            <Stack direction="row" wrap>
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="ghost">Ghost action</Button>
              <Tooltip content="Keyboard and pointer accessible tooltip">
                <Button variant="secondary">Tooltip target</Button>
              </Tooltip>
              <Button onClick={() => setIsModalOpen(true)} variant="secondary">
                Open modal
              </Button>
              <Loader label="Design system loading example" />
            </Stack>
          </Stack>
        </Section>

        <hr className="showcase__divider" />

        <Section>
          <Stack gap="xl">
            <SectionHeader
              description="Composable surfaces for future command center modules."
              eyebrow="Surfaces"
              title="Cards"
            />
            <Grid>
              <Card>
                <h3 className="showcase__card-title">Default card</h3>
                <p className="showcase__card-copy">Elevated surface with a restrained shadow.</p>
              </Card>
              <Card variant="glass">
                <h3 className="showcase__card-title">Glass card</h3>
                <p className="showcase__card-copy">Translucent surface with backdrop treatment.</p>
              </Card>
              <Card variant="outlined">
                <h3 className="showcase__card-title">Outlined card</h3>
                <p className="showcase__card-copy">Transparent surface with a cyan border.</p>
              </Card>
            </Grid>
          </Stack>
        </Section>

        <hr className="showcase__divider" />

        <Section>
          <Grid>
            <Stack gap="lg">
              <SectionHeader eyebrow="Status" headingLevel={3} title="Badges" />
              <Stack direction="row" wrap>
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
              </Stack>
            </Stack>

            <Stack gap="lg">
              <SectionHeader eyebrow="Scale" headingLevel={3} title="Typography" />
              <h2 className="showcase__heading">Command center heading</h2>
              <p className="showcase__body">
                Body typography uses the typed primary font stack and relaxed reading rhythm.
              </p>
              <span style={{ color: colors.muted, fontSize: typography.fontSize.sm }}>
                Supporting metadata
              </span>
            </Stack>
          </Grid>
        </Section>

        <hr className="showcase__divider" />

        <Section>
          <Stack gap="lg">
            <SectionHeader
              description="Core spacing tokens rendered as proportional reference bars."
              eyebrow="Rhythm"
              title="Spacing"
            />
            {spacingExamples.map(([name, value]) => (
              <div className="showcase__spacing-row" key={name}>
                <span className="showcase__spacing-label">{name}</span>
                <span
                  className="showcase__spacing-bar"
                  style={{ '--spacing-example-width': value } as TokenStyle}
                />
              </div>
            ))}
          </Stack>
        </Section>
      </Container>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Accessible modal foundation">
        <Stack gap="lg">
          <p>
            This dialog demonstrates focus entry, focus trapping, Escape handling, backdrop
            dismissal, and focus restoration.
          </p>
          <Button onClick={closeModal}>Close modal</Button>
        </Stack>
      </Modal>
    </PageLayout>
  );
}

export default App;
