import { useReadmeStore } from "@/stores";
import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import {
  generateSocialBadgesPreview,
  generateTechnologies,
} from "@/utils/previewGenerators/preview";
import { generateDescription } from "@/utils/readmeGenerators/markDownFunctions";
import { SidebarSeparator } from "./ui/sidebar";

export const ReadmePreviewTemplateC = () => {
  const readmeContent = useReadmeFormStore((state) => state.readmeContent);
  const githubUser = useReadmeStore((state) => state.githubUser);

  if (!readmeContent) {
    return (
      <div className="text-red-500">
        No readme content available. Please login again.
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
          <h1>
            <img
              src={`https://readme-typing-svg.herokuapp.com/?lines=Hello,+There!+👋;This+is+${readmeContent.name}....;Nice+to+meet+you!&size=30`}
              alt=""
            />
          </h1>
          <SidebarSeparator className="mb-4" />
        </>
      )}
      {Object.values(readmeContent.socials).some((value) => value !== "") && (
        <div className="flex flex-wrap mb-6 align-center">
          {generateSocialBadgesPreview(readmeContent)}
        </div>
      )}
      {readmeContent.summary && (
        <>
          <p className="text-base mb-6">{generateDescription(readmeContent)}</p>
        </>
      )}
      {readmeContent.techStack && readmeContent.techStack.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-1">
            🔥 Languages and Tools 🔥
          </h2>
          <SidebarSeparator className="mb-4" />
          <div className="flex flex-wrap mb-6">
            {generateTechnologies(readmeContent)}
          </div>
        </>
      )}
      {isShowingGithubStats && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            💻 GitHub Stats 💻
          </h2>
          <SidebarSeparator className="mb-4" />
          <div className="grid grid-cols-2 gap-4 mb-6">
            <figure className="w-full h-full">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser?.login}&show_icons=true&theme=vue`}
                alt="GitHub Stats"
                className="h-full object-cover"
                loading="lazy"
                width={450}
                height={195}
              />
            </figure>
            <figure className="w-full h-full">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser?.login}&theme=vue&hide_border=false`}
                alt="GitHub Streak Stats"
                className="h-full object-cover"
                loading="lazy"
                width={450}
                height={195}
              />
            </figure>
          </div>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser?.login}&theme=vue&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
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
          <h2 className="text-2xl font-semibold mb-1">⚡ GitHub Trophies ⚡</h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${githubUser?.login}&theme=vue&no-frame=false&no-bg=true&margin-w=4`}
            alt="GitHub Trophies"
            className="mb-6"
            loading="lazy"
          />
        </>
      )}
      {isShowingTopRepos && (
        <>
          <h2 className="text-2xl font-semibold mb-1">
            🚀 Top Repositories 🚀
          </h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-contributor-stats.vercel.app/api?username=${githubUser?.login}&limit=5&theme=vue&combine_all_yearly_contributions=true`}
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
