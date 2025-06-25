import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import {
  generateDescription,
  generateGreeting,
  generateSocialLinks,
  generateTechnologies,
} from "@/utils/readmeGenerators/markDownFunctions";
import { SidebarSeparator } from "./ui/sidebar";
import type { readmeFormTypes } from "@/types";
import { useReadmeStore } from "@/stores";

export const ReadmePreviewTemplateA = () => {
  const { readmeContent } = useReadmeFormStore((state) => state);
  const githubUser = useReadmeStore((state) => state.githubUser);

  if (!readmeContent) {
    return (
      <div className="text-red-500">
        No readme content available. Please login again
      </div>
    );
  }

  const generateSocialBadges = (readmeContent: readmeFormTypes) => {
    const socialLinks = generateSocialLinks(readmeContent);

    const platformColors: Record<string, string> = {
      linkedin: "0077B5",
      youtube: "FF0000",
      instagram: "E4405F",
      x: "000000",
      github: "181717",
    };
    return socialLinks.map(([platform, url]) => {
      const color = platformColors[platform.toLowerCase()] || "blue";
      return (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mr-2 mb-2"
        >
          <img
            src={`https://img.shields.io/badge/${
              platform == "x"
                ? "Twitter"
                : platform.charAt(0).toUpperCase() + platform.slice(1)
            }-${color}?style=flat-square&logo=${platform.toLowerCase()}&logoColor=white`}
            alt={`${platform} badge`}
            className="h-6"
          />
        </a>
      );
    });
  };

  const isShowingGithubStats = readmeContent.showGithubStats;
  const isShowingGithubTrophies = readmeContent.showGithubTrophies;
  const isShowingTopRepos = readmeContent.showTopRepos;

  return (
    <div className="flex flex-col w-full h-full max-w-[894px]">
      {readmeContent.name && (
        <>
          <h1 className="text-3xl font-bold mb-2 text-center">
            {generateGreeting(readmeContent)}
          </h1>
          <SidebarSeparator className="mb-8" />
        </>
      )}
      {readmeContent.summary && (
        <>
          <h2 className="text-2xl font-semibold mb-1">💫 About Me</h2>
          <SidebarSeparator className="mb-4" />
          <p className="text-base mb-6">{generateDescription(readmeContent)}</p>
        </>
      )}
      {Object.values(readmeContent.socials).some((value) => value !== "") && (
        <>
          <h2 className="text-2xl font-semibold mb-1">🌐 Socials</h2>
          <SidebarSeparator className="mb-4" />
          <div className="flex flex-wrap mb-6">
            {generateSocialBadges(readmeContent)}
          </div>
        </>
      )}
      {readmeContent.techStack && readmeContent.techStack.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-1">🛠️ Tech Stack</h2>
          <SidebarSeparator className="mb-4" />
          <div className="flex flex-wrap mb-6">
            {generateTechnologies(readmeContent)}
          </div>
        </>
      )}
      {isShowingGithubStats && (
        <>
          <h2 className="text-2xl font-semibold mb-1">📊 GitHub Stats</h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUser?.login}&show_icons=true&theme=dark`}
            alt="GitHub Stats"
            className="mb-6"
            loading="lazy"
            width={450}
            height={195}
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser?.login}&theme=dark&hide_border=false`}
            alt="GitHub Streak Stats"
            className="mb-6"
            loading="lazy"
            width={450}
            height={195}
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser?.login}&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
            alt="GitHub Top Languages"
            className="mb-6"
            loading="lazy"
            width={300}
            height={165}
          />
        </>
      )}
      {isShowingGithubTrophies && (
        <>
          <h2 className="text-2xl font-semibold mb-1">🏆 GitHub Trophies</h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${githubUser?.login}&theme=dark&no-frame=false&no-bg=true&margin-w=4`}
            alt="GitHub Trophies"
            className="mb-6"
            loading="lazy"
          />
        </>
      )}
      {isShowingTopRepos && (
        <>
          <h2 className="text-2xl font-semibold mb-1">📈 Top Repositories</h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-contributor-stats.vercel.app/api?username=${githubUser?.login}&limit=5&theme=dark&combine_all_yearly_contributions=true`}
            alt="Top Repositories"
            className="mb-6"
            loading="lazy"
            width={495}
            height={273}
          />
        </>
      )}
    </div>
  );
};
