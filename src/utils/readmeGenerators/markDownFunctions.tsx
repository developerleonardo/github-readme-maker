import type { readmeFormTypes } from "@/types";
import { platformColors, techStackColors } from "../techStackColors";
import { technologies } from "@/data/techStack";
import { generateMarkDownTemplateA } from "./templateA";
import { generateMarkDownTemplateB } from "./templateB";
import { generateMarkDownTemplateC } from "./templateC";
import { generateMarkDownTemplateD } from "./templateD";
import { generateMarkDownTemplateE } from "./templateE";

export const generateGreeting = (readmeContent: readmeFormTypes): string => {
  if (readmeContent.name) {
    return `Hi! I'm ${readmeContent.name} 👋`;
  }
  return "";
};

export const generateDescription = (readmeContent: readmeFormTypes): string => {
  if (readmeContent.summary) {
    return readmeContent.summary as string;
  }
  return "";
};

export const generateSocialLinks = (readmeContent: readmeFormTypes) => {
  return Object.entries(readmeContent.socials).filter(([, value]) => value); // Filter out empty values
};

export const generateBadgeUrl = (
  tech: string,
  color: string,
  logo: string
): string => {
  return `https://img.shields.io/badge/${tech}-${color}?style=flat-square&logo=${logo}&logoColor=white`;
};

export const generateSocialBadges = (
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

export const generateTechnologyBadges = (
  readmeContent: readmeFormTypes
): string[] => {
  const techStack = readmeContent.techStack || [];
  return techStack.map((tech) => {
    const logo =
      technologies.find((item) => item.id.toLowerCase() === tech.toLowerCase())
        ?.label || tech;
    const color = techStackColors[tech.toLowerCase()] || "blue";
    const badgeUrl = generateBadgeUrl(tech, color, logo);
    return `![](${badgeUrl})`;
  });
};

export const generateGithubStats = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined,
  theme: string
) => {
  if (!githubUser) return "";
  if (readmeContent.showGithubStats === false) return "";
  return `![](https://github-readme-stats.vercel.app/api?username=${githubUser}&theme=${theme}&hide_border=false&include_all_commits=true&count_private=true)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&theme=${theme}&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&theme=${theme}&hide_border=false&include_all_commits=true&count_private=true&layout=compact)
  `;
};

export const generateGithubStatsDesignRow = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined,
  theme: string
) => {
  if (!githubUser) return "";
  if (readmeContent.showGithubStats === false) return "";
  return `<img src="https://github-readme-stats.vercel.app/api?username=${githubUser}&theme=${theme}&hide_border=false&include_all_commits=true&count_private=true" align="left" /> <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&theme=${theme}&hide_border=false" align="left" />\n <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&theme=${theme}&hide_border=false&include_all_commits=true&count_private=true&layout=compact" />`;
};

export const generateGithubTrophies = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined,
  theme: string
) => {
  if (!githubUser) return "";
  if (readmeContent.showGithubTrophies === false) return "";
  return `![](https://github-profile-trophy.vercel.app/?username=${githubUser}&theme=${theme}&no-frame=false&no-bg=true&margin-w=4)
    `;
};

export const generateTopRepos = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined,
  theme: string
) => {
  if (!githubUser) return "";
  if (readmeContent.showTopRepos === false) return "";
  return `![](https://github-contributor-stats.vercel.app/api?username=${githubUser}&limit=5&theme=${theme}&combine_all_yearly_contributions=true)
    `;
};

export const generateMarkDownSelectedTemplate = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined,
  selectedTemplate: string
): string => {
  if (!selectedTemplate) {
    return generateMarkDownTemplateA(readmeContent, githubUser);
  }
  switch (selectedTemplate) {
    case "templateA":
      return generateMarkDownTemplateA(readmeContent, githubUser);

    case "templateB":
      return generateMarkDownTemplateB(readmeContent, githubUser);

    case "templateC":
      return generateMarkDownTemplateC(readmeContent, githubUser);

    case "templateD":
      return generateMarkDownTemplateD(readmeContent, githubUser);

    case "templateE":
      return generateMarkDownTemplateE(readmeContent, githubUser);

    default:
      return generateMarkDownTemplateA(readmeContent, githubUser);
  }
};
