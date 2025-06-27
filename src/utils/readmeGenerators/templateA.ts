import type { readmeFormTypes } from "@/types";
import {
  generateDescription,
  generateGithubStats,
  generateGithubTrophies,
  generateGreeting,
  generateSocialBadges,
  generateTechnologyBadges,
  generateTopRepos,
} from "./markDownFunctions";

const generateGreetingForTemplateA = (
  readmeContent: readmeFormTypes
): string => {
  const greeting = generateGreeting(readmeContent);
  const name = readmeContent.name;
  if (greeting) {
    return `<h1 align="center"><b>Hi , I'm ${name} </b>👋</h1>
<!--  -->`;
  }
  return "";
};

export const generateMarkDownTemplateA = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  const greeting = generateGreetingForTemplateA(readmeContent) || "";
  const description = generateDescription(readmeContent) || "";
  const socialLinks = generateSocialBadges(readmeContent) || [];
  const technologies = generateTechnologyBadges(readmeContent) || [];
  const githubStats = generateGithubStats(githubUser, "dark") || "";
  const githubTrophies = generateGithubTrophies(githubUser, "dark") || "";
  const topRepos = generateTopRepos(githubUser, "dark") || "";

  return `
${greeting}

## 💫 About Me
${description}

## 🌐 Socials
${socialLinks.join(" ")}

## 🛠️ Tech Stack
${technologies.join(" ")}

## 📊 GitHub Stats
${githubStats}

## 🏆 GitHub Trophies
${githubTrophies}

## 📈 Top Repositories
${topRepos}

<!-- Proudly created with Github Readme Maker ( https://github-readme-maker-pi.vercel.app/ ) -->
  `;
};
