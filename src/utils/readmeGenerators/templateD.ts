import type { readmeFormTypes } from "@/types";
import {
  generateGithubStatsDesignRow,
  generateGithubTrophies,
  generateGreeting,
  generateSocialBadges,
  generateTechnologyBadges,
  generateTopRepos,
} from "./markDownFunctions";

const generateMarkDownGreetingForTemplateD = (
  readmeContent: readmeFormTypes
): string => {
  const greeting = generateGreeting(readmeContent);
  const name = readmeContent.name;
  if (greeting) {
    return `<h1 align="center"><img src="https://slackmojis.com/emojis/13387-gokurun/download" width="35"> <b>Hello Hello! I'm ${name} </b></h1>`;
  }
  return "";
};

const generateMarkDownDescriptionForTemplateD = (
  readmeContent: readmeFormTypes
): string => {
  if (readmeContent.summary) {
    return `<div align="center"><img alt="pikachu" src="https://media.tenor.com/rbx3ph5SLRUAAAAi/pikachu-pokemon.gif" /></div> <br/><br/> <h2><img src="https://slackmojis.com/emojis/10254-pepe_naruto/download" width="20"> <b>About Me<b/></h2>
    <p>${readmeContent.summary}</p>
    `;
  }
  return "";
};

const generateTechnologyForTemplateD = (
  readmeContent: readmeFormTypes
): string => {
  const technologies = generateTechnologyBadges(readmeContent);
  if (technologies && technologies.length > 0) {
    return `<h2><img src="https://slackmojis.com/emojis/76421-anime_itachiakatsuki/download" width="30" /> <b>Tech Stack<b/></h2>\n\n${technologies.join(
      " "
    )}\n
    `;
  }
  return "";
};

const generateGithubStatsForTemplateD = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined,
  theme: string = "dracula"
): string => {
  if (!readmeContent.showGithubStats || !githubUser) return "";
  const githubStats = generateGithubStatsDesignRow(
    readmeContent,
    githubUser,
    theme
  );
  if (readmeContent.showGithubStats && githubUser) {
    return `<h2><img src="https://slackmojis.com/emojis/78855-pepe_narutoq/download" width="30" /> <b>Github Stats<b/></h2>\n\n${githubStats}\n
    `;
  }
  return "";
};

export const generateMarkDownTemplateD = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  const greeting = generateMarkDownGreetingForTemplateD(readmeContent);
  const description = generateMarkDownDescriptionForTemplateD(readmeContent);
  const socialLinks = generateSocialBadges(readmeContent);
  const technologies = generateTechnologyForTemplateD(readmeContent);
  const githubStats = generateGithubStatsForTemplateD(
    readmeContent,
    githubUser,
    "dracula"
  );
  const githubTrophies = generateGithubTrophies(
    readmeContent,
    githubUser,
    "dracula"
  );
  const topRepos = generateTopRepos(readmeContent, githubUser, "dracula");
  const sections: string[] = [];
  if (greeting) sections.push(`${greeting}\n`);
  if (description) sections.push(`${description}\n`);
  if (socialLinks && socialLinks.length > 0)
    sections.push(
      `<h2><img src="https://slackmojis.com/emojis/37554-charmander/download" width="30"> <b>Socials<b/></h2>\n\n${socialLinks.join(
        " "
      )}\n`
    );
  if (technologies && technologies.length > 0)
    sections.push(`${technologies}\n`);
  if (githubStats) sections.push(`${githubStats}\n`);
  if (githubTrophies)
    sections.push(
      `<h2><img src="https://slackmojis.com/emojis/5851-crashdance/download" width="30"> <b>Github Trophies<b/></h2> \n\n${githubTrophies}\n`
    );
  if (topRepos)
    sections.push(
      `<h2><img src="https://slackmojis.com/emojis/50155-vegeta-smile/download" width="30"> <b>Top Repositories<b/></h2> \n\n${topRepos}\n`
    );
  sections.push(
    `<!-- Proudly created with Github Readme Maker ( https://github-readme-maker-pi.vercel.app/ ) -->`
  );
  return sections.join("\n");
};
