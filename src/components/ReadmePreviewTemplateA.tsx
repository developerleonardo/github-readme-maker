import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import {
  generateDescription,
  generateGreeting,
} from "@/utils/readmeGenerators/markDownFunctions";
import { SidebarSeparator } from "./ui/sidebar";
import { useReadmeStore } from "@/stores";
import {
  generateSocialBadgesPreview,
  generateTechnologies,
} from "@/utils/previewGenerators/preview";

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

  const isShowingGithubStats = readmeContent.showGithubStats;
  const isShowingGithubTrophies = readmeContent.showGithubTrophies;
  const isShowingTopRepos = readmeContent.showTopRepos;

  return (
    <div className="flex flex-col w-full max-w-[894px] h-fit">
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
            {generateSocialBadgesPreview(readmeContent)}
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
