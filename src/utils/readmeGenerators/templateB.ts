import type { readmeFormTypes } from "@/types";
import {
  generateGithubStats,
  generateGithubTrophies,
  generateGreeting,
  generateSocialBadges,
  generateTechnologyBadges,
  generateTopRepos,
} from "./markDownFunctions";

const generateGreetingForTemplateB = (
  readmeContent: readmeFormTypes
): string => {
  const greeting = generateGreeting(readmeContent);
  const name = readmeContent.name;
  if (greeting) {
    return `<h1 align="center"><b>Hey there! I'm ${name} </b><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
<!--  -->`;
  }
  return "";
};

const generateDescriptionForTemplateB = (
  readmeContent: readmeFormTypes
): string => {
  if (readmeContent.summary) {
    return `<img align="right" alt="Unicorn" src="https://media.tenor.com/EdiGYFaZg7sAAAAi/jaded-disappointed.gif" /> <img src="https://emojis.slackmojis.com/emojis/images/1588315024/8823/hyperkitty.gif?1588315024" width="20"> **About Me**
    \n\n${readmeContent.summary}\n
`;
  }
  return "";
};

const generateTechnologyForTemplateB = (
  readmeContent: readmeFormTypes
): string => {
  const technologies = generateTechnologyBadges(readmeContent);
  if (technologies && technologies.length > 0) {
    return `<img src="https://slackmojis.com/emojis/1972-star/download" width="20" /> **Languages and Tools**
    \n${technologies.join(" ")}\n
    `;
  }
  return "";
};

const generateGithubStatsForTemplateB = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined,
  theme: string = "react"
): string => {
  if (!readmeContent.showGithubStats || !githubUser) return "";
  const githubStats = generateGithubStats(readmeContent, githubUser, theme);
  if (readmeContent.showGithubStats && githubUser) {
    return `<img src="https://slackmojis.com/emojis/34950-winner/download" width="20" /> **GitHub Stats** <br/><br/> \n${githubStats}\n
    `;
  }
  return "";
};

export const generateMarkDownTemplateB = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  const greeting = generateGreetingForTemplateB(readmeContent);
  const socialLinks = generateSocialBadges(readmeContent);
  const description = generateDescriptionForTemplateB(readmeContent);
  const technologies = generateTechnologyForTemplateB(readmeContent);
  const githubStats = generateGithubStatsForTemplateB(
    readmeContent,
    githubUser,
    "react"
  );
  const githubTrophies = generateGithubTrophies(
    readmeContent,
    githubUser,
    "react"
  );
  const topRepos = generateTopRepos(readmeContent, githubUser, "react");

  const sections: string[] = [];
  if (greeting) sections.push(`${greeting}\n`);
  if (socialLinks && socialLinks.length > 0)
    sections.push(
      `<div align="center">\n\n${socialLinks.join(" ")}\n\n</div>\n\n`
    );
  if (description) sections.push(`${description}\n`);
  if (technologies && technologies.length > 0)
    sections.push(`${technologies}\n`);
  if (githubStats) sections.push(`${githubStats}\n`);
  if (githubTrophies)
    sections.push(
      `<img src="https://slackmojis.com/emojis/15285-trophy/download" width="20" /> **GitHub Trophies** \n\n${githubTrophies}\n`
    );
  if (topRepos)
    sections.push(
      `<img src="https://slackmojis.com/emojis/3957-winner/download" width="20" /> **Top Repositories** \n\n${topRepos}\n`
    );

  sections.push(
    `<!-- Proudly created with Github Readme Maker ( https://github-readme-maker-pi.vercel.app/ ) -->`
  );

  return sections.join("\n");
};
