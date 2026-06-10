import { useEffect, useState } from 'react';
import { PageLayout } from '@/components/layout';
import {
  aboutLoader,
  contactLoader,
  githubLoader,
  portfolioLoader,
  projectIntelligenceLoader,
  skillGraphLoader,
  socialLoader,
  timelineLoader,
} from '@/data';
import {
  colors,
  glows,
  layout,
  radius,
  shadows,
  spacing,
  transitionDurations,
  transitionTiming,
  typography,
} from '@/design-system/tokens';
import type { TokenStyle } from '@/design-system/styleTypes';
import { AboutSection } from '@/features/about';
import { ContactCommandCenter } from '@/features/contact';
import { GitHubIntelligenceDashboard } from '@/features/github';
import { BootSequence, useIntroExperience } from '@/features/intro';
import { ProjectsSection } from '@/features/projects';
import { SkillsSection } from '@/features/skills';
import { JourneyTimeline } from '@/features/timeline';
import { HeroSection } from '@/sections/HeroSection';
import type {
  AboutContent,
  ContactContent,
  GitHubDashboardContent,
  PortfolioMetadata,
  ProjectIntelligence,
  SkillGraphData,
  SocialLink,
  TimelineData,
} from '@/types';
import { BackgroundLayers } from './BackgroundLayers';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import './shell.css';

export function AppShell() {
  const [about, setAbout] = useState<AboutContent | null>(null);
  const [contact, setContact] = useState<ContactContent | null>(null);
  const [githubDashboard, setGithubDashboard] = useState<GitHubDashboardContent | null>(null);
  const [portfolio, setPortfolio] = useState<PortfolioMetadata | null>(null);
  const [projects, setProjects] = useState<readonly ProjectIntelligence[]>([]);
  const [skillGraph, setSkillGraph] = useState<SkillGraphData | null>(null);
  const [socials, setSocials] = useState<readonly SocialLink[]>([]);
  const [timeline, setTimeline] = useState<TimelineData | null>(null);
  const { completeIntro, isBooting } = useIntroExperience();

  useEffect(() => {
    let isActive = true;

    void Promise.all([
      aboutLoader.getAll(),
      contactLoader.getAll(),
      githubLoader.getDashboard(),
      portfolioLoader.getAll(),
      projectIntelligenceLoader.getAllProjects(),
      skillGraphLoader.getAll(),
      socialLoader.getAll(),
      timelineLoader.getTimeline(),
    ]).then(
      ([
        aboutData,
        contactData,
        githubDashboardData,
        portfolioData,
        projectData,
        skillGraphData,
        socialData,
        timelineData,
      ]) => {
        if (isActive) {
          setAbout(aboutData);
          setContact(contactData);
          setGithubDashboard(githubDashboardData);
          setPortfolio(portfolioData);
          setProjects(projectData);
          setSkillGraph(skillGraphData);
          setSocials(socialData);
          setTimeline(timelineData);
        }
      },
    );

    return () => {
      isActive = false;
    };
  }, []);

  const shellStyle: TokenStyle = {
    '--shell-background': colors.commandBackground,
    '--shell-deep-black': colors.deepBlack,
    '--shell-surface': colors.surface.elevated,
    '--shell-glass': colors.surface.glass,
    '--shell-subtle': colors.surface.subtle,
    '--shell-white': colors.white,
    '--shell-cyan': colors.electricCyan,
    '--shell-cyan-accent': colors.cyanAccent,
    '--shell-muted': colors.muted,
    '--shell-border': colors.border.subtle,
    '--shell-border-strong': colors.border.strong,
    '--shell-glow': glows.medium,
    '--shell-glow-subtle': glows.subtle,
    '--shell-shadow': shadows.floating,
    '--shell-radius-sm': radius.sm,
    '--shell-radius-md': radius.md,
    '--shell-radius-lg': radius.lg,
    '--shell-radius-xl': radius.xl,
    '--shell-radius-full': radius.full,
    '--shell-space-xs': spacing.xs,
    '--shell-space-sm': spacing.sm,
    '--shell-space-md': spacing.md,
    '--shell-space-lg': spacing.lg,
    '--shell-space-xl': spacing.xl,
    '--shell-space-2xl': spacing['2xl'],
    '--shell-space-3xl': spacing['3xl'],
    '--shell-space-4xl': spacing['4xl'],
    '--shell-content-width': layout.content.readable,
    '--shell-font-xs': typography.fontSize.xs,
    '--shell-font-sm': typography.fontSize.sm,
    '--shell-font-base': typography.fontSize.base,
    '--shell-font-lg': typography.fontSize.lg,
    '--shell-font-xl': typography.fontSize.xl,
    '--shell-font-2xl': typography.fontSize['2xl'],
    '--shell-font-3xl': typography.fontSize['3xl'],
    '--shell-font-4xl': typography.fontSize['4xl'],
    '--shell-font-display': typography.fontSize.display,
    '--shell-weight-medium': typography.fontWeight.medium,
    '--shell-weight-semibold': typography.fontWeight.semibold,
    '--shell-weight-bold': typography.fontWeight.bold,
    '--shell-line-tight': typography.lineHeight.tight,
    '--shell-line-normal': typography.lineHeight.normal,
    '--shell-line-relaxed': typography.lineHeight.relaxed,
    '--shell-tracking-tight': typography.letterSpacing.tight,
    '--shell-tracking-wide': typography.letterSpacing.wide,
    '--shell-transition': `${transitionDurations.normal}ms ${transitionTiming.standard}`,
    '--shell-transition-slow': `${transitionDurations.slow}ms ${transitionTiming.standard}`,
  };

  return (
    <PageLayout
      aria-busy={isBooting}
      className={`app-shell${isBooting ? ' app-shell--booting' : ''}`}
      style={shellStyle}
    >
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <BackgroundLayers />
      {isBooting ? <BootSequence onComplete={completeIntro} /> : null}
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection about={about} />
        <JourneyTimeline timeline={timeline} />
        <SkillsSection skillGraph={skillGraph} />
        <ProjectsSection projects={projects} />
        <GitHubIntelligenceDashboard dashboard={githubDashboard} />
        <ContactCommandCenter contact={contact} />
      </main>

      <Footer portfolio={portfolio} socials={socials} />
    </PageLayout>
  );
}
