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
    x?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  techStack: string[];
  showGithubStats: boolean;
  showGithubTrophies: boolean;
  showTopRepos: boolean;
}

export type socialsTypes =
  | "github"
  | "x"
  | "linkedin"
  | "instagram"
  | "youtube";

export type templateTypes =
  | "templateA"
  | "templateB"
  | "templateC"
  | "templateD";

export interface templateOptionCardsTypes {
  title: string;
  imageSrc: string;
  template: templateTypes;
}
