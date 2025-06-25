import type { readmeFormTypes } from "@/types";
import {
  generateBadgeUrl,
  generateDescription,
  generateGreeting,
  generateSocialLinks,
} from "./markDownFunctions";
import { platformColors, techStackColors } from "../techStackColors";
import { technologies } from "@/data/techStack";

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

const generateSocialLinksForTemplateA = (
  readmeContent: readmeFormTypes
): string[] => {
  const socialLinks = generateSocialLinks(readmeContent);
  return socialLinks.map(([platform, url]) => {
    const color = platformColors[platform.toLowerCase()] || "blue";
    return `[![${platform}](https://img.shields.io/badge/${
      platform == "x"
        ? "Twitter"
        : platform.charAt(0).toUpperCase() + platform.slice(1)
    }-${color}?style=flat-square&logo=${platform.toLowerCase()}&logoColor=white)](${url})`;
  });
};

const generateTechnologiesForTemplateA = (
  readmeContent: readmeFormTypes
): string[] => {
  const techStack = readmeContent.techStack || [];
  return techStack.map((tech) => {
    const logo =
      technologies.find((item) => item.id.toLowerCase() === tech.toLowerCase())
        ?.label || tech;
    const color = techStackColors[tech.toLowerCase()] || "blue";
    const badgeUrl = generateBadgeUrl(tech, color, logo);
    return badgeUrl;
  });
};

const generateGithubStatsForTemplateA = (githubUser: string | undefined) => {
  if (!githubUser) return "";
  return `![](https://github-readme-stats.vercel.app/api?username=${githubUser}&theme=dark&hide_border=false&include_all_commits=true&count_private=true)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&theme=dark&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact)
  `;
};

const generateGithubTrophiesForTemplateA = (githubUser: string | undefined) => {
  if (!githubUser) return "";
  return `![](https://github-profile-trophy.vercel.app/?username=${githubUser}&theme=dark&no-frame=false&no-bg=true&margin-w=4)
    `;
};

const generateTopReposForTemplateA = (githubUser: string | undefined) => {
  if (!githubUser) return "";
  return `![](https://github-contributor-stats.vercel.app/api?username=${githubUser}&limit=5&theme=dark&combine_all_yearly_contributions=true)
    `;
};

export const generateMarkDownTemplateA = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  const greeting = generateGreetingForTemplateA(readmeContent) || "";
  const description = generateDescription(readmeContent) || "";
  const socialLinks = generateSocialLinksForTemplateA(readmeContent) || [];
  const technologies = generateTechnologiesForTemplateA(readmeContent) || [];
  const githubStats = generateGithubStatsForTemplateA(githubUser) || "";
  const githubTrophies = generateGithubTrophiesForTemplateA(githubUser) || "";
  const topRepos = generateTopReposForTemplateA(githubUser) || "";

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
