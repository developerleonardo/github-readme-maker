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
  const greeting = generateGreetingForTemplateA(readmeContent);
  const description = generateDescription(readmeContent);
  const socialLinks = generateSocialBadges(readmeContent);
  const technologies = generateTechnologyBadges(readmeContent);
  const githubStats = generateGithubStats(readmeContent, githubUser, "dark");
  const githubTrophies = generateGithubTrophies(
    readmeContent,
    githubUser,
    "dark"
  );
  const topRepos = generateTopRepos(readmeContent, githubUser, "dark");

  const sections: string[] = [];

  if (greeting) sections.push(`${greeting}\n`);

  if (description) sections.push(`## 💫 About Me\n${description}\n`);

  if (socialLinks && socialLinks.length > 0)
    sections.push(`## 🌐 Socials\n${socialLinks.join(" ")}\n`);

  if (technologies && technologies.length > 0)
    sections.push(`## 🛠️ Tech Stack\n${technologies.join(" ")}\n`);

  if (githubStats) sections.push(`## 📊 GitHub Stats\n${githubStats}\n`);

  if (githubTrophies)
    sections.push(`## 🏆 GitHub Trophies\n${githubTrophies}\n`);

  if (topRepos) sections.push(`## 📈 Top Repositories\n${topRepos}\n`);

  sections.push(
    `<!-- Proudly created with Github Readme Maker ( https://github-readme-maker-pi.vercel.app/ ) -->`
  );

  return sections.join("\n");
};
