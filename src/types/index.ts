export interface githubUserTypes {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface readmeFormTypes {
  name: string;
  summary: string;
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  techStack: string[];
  showGithubStats: boolean;
  showGithubTrophies: boolean;
  showTopRepos: boolean;
}
