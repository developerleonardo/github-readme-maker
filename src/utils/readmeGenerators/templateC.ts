import type { readmeFormTypes } from "@/types";
import {
  generateDescription,
  generateGithubStatsDesignRow,
  generateGithubTrophies,
  generateGreeting,
  generateSocialBadges,
  generateTechnologyBadges,
  generateTopRepos,
} from "./markDownFunctions";

const generateMarkDownGreetingForTemplateC = (
  readmeContent: readmeFormTypes
): string => {
  const greeting = generateGreeting(readmeContent);
  const name = readmeContent.name;
  if (greeting) {
    return `<h1><img src="https://readme-typing-svg.herokuapp.com/?lines=Hello,+There!+👋;This+is+${name.replace(
      " ",
      "+"
    )}....;Nice+to+meet+you!&size=30" size="30"></h1>`;
  }
  return "";
};

export const generateMarkDownTemplateC = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  const greeting = generateMarkDownGreetingForTemplateC(readmeContent);
  const description = generateDescription(readmeContent);
  const socialLinks = generateSocialBadges(readmeContent);
  const technologies = generateTechnologyBadges(readmeContent);
  const githubStats = generateGithubStatsDesignRow(
    readmeContent,
    githubUser,
    "vue"
  );
  const githubTrophies = generateGithubTrophies(
    readmeContent,
    githubUser,
    "vue"
  );
  const topRepos = generateTopRepos(readmeContent, githubUser, "vue");
  const sections: string[] = [];
  if (greeting) sections.push(`${greeting}\n`);
  if (socialLinks && socialLinks.length > 0)
    sections.push(`\n\n${socialLinks.join(" ")}\n\n`);
  if (description) sections.push(`${description}\n`);
  if (technologies && technologies.length > 0)
    sections.push(`## 🔥 Tech Stack 🔥\n${technologies.join(" ")}\n`);
  if (githubStats) sections.push(`## 💻 GitHub Stats 💻\n\n${githubStats}\n`);
  if (githubTrophies)
    sections.push(`## ⚡ GitHub Trophies ⚡\n${githubTrophies}\n`);

  if (topRepos) sections.push(`## 🚀 Top Repositories 🚀\n${topRepos}\n`);

  sections.push(
    `<!-- Proudly created with Github Readme Maker ( https://github-readme-maker-pi.vercel.app/ ) -->`
  );

  return sections.join("\n");
};
