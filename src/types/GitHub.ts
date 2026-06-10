export interface GitHubProfile {
  username: string;
  profileUrl: string;
  publicRepositories: number;
  followers: number;
  following: number;
  accountStatus: string;
}

export interface GitHubMetric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface GitHubRepository {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  githubUrl: string;
  status: string;
}

export interface GitHubLanguage {
  id: string;
  name: string;
  percentage: number;
  signal: string;
}

export interface GitHubInsight {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface GitHubActivitySignal {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface GitHubDashboardContent {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  labels: {
    profileStats: {
      publicRepositories: string;
      followers: string;
      following: string;
    };
    engineeringSummary: string;
    metrics: string;
    languagePanelEyebrow: string;
    languagePanelTitle: string;
    repositoriesPanelEyebrow: string;
    repositoriesPanelTitle: string;
    repositoryLink: string;
    insightsPanelEyebrow: string;
    insightsPanelTitle: string;
    activityPanelEyebrow: string;
    activityPanelTitle: string;
  };
  profile: GitHubProfile;
  metrics: readonly GitHubMetric[];
  repositories: readonly GitHubRepository[];
  languages: readonly GitHubLanguage[];
  insights: readonly GitHubInsight[];
  activity: readonly GitHubActivitySignal[];
  engineeringSummary: {
    headline: string;
    description: string;
  };
}
