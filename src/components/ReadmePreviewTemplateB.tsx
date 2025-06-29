import { useReadmeStore } from "@/stores";
import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { SidebarSeparator } from "./ui/sidebar";
import { generateDescription } from "@/utils/readmeGenerators/markDownFunctions";
import {
  generateSocialBadgesPreview,
  generateTechnologies,
} from "@/utils/previewGenerators/preview";

export const ReadmePreviewTemplateB = () => {
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
          <h1 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            Hey there! I'm {readmeContent.name}{" "}
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="35"
            ></img>
          </h1>
        </>
      )}
      {Object.values(readmeContent.socials).some((value) => value !== "") && (
        <div className="flex flex-wrap mb-6 justify-center align-center">
          {generateSocialBadgesPreview(readmeContent)}
        </div>
      )}
      {readmeContent.summary && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            <img
              src="https://emojis.slackmojis.com/emojis/images/1588315024/8823/hyperkitty.gif?1588315024"
              width="30"
            />{" "}
            About Me
          </h2>
          <SidebarSeparator className="mb-4" />
          <div className="grid grid-cols-[1fr_auto] gap-4 mb-8">
            <p className="text-base mb-6">
              {generateDescription(readmeContent)}
            </p>
            <img
              src="https://media.tenor.com/EdiGYFaZg7sAAAAi/jaded-disappointed.gif"
              alt=""
              width={320}
              className="w-80"
            />
          </div>
        </>
      )}
      {readmeContent.techStack && readmeContent.techStack.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            <img
              src="https://slackmojis.com/emojis/1972-star/download"
              alt=""
              width="30"
            />{" "}
            Languages and Tools
          </h2>
          <SidebarSeparator className="mb-4" />
          <div className="flex flex-wrap mb-6">
            {generateTechnologies(readmeContent)}
          </div>
        </>
      )}
      {isShowingGithubStats && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex align-center gap-2">
            {" "}
            <img
              src="https://slackmojis.com/emojis/34950-winner/download"
              alt=""
              width="30"
            />{" "}
            GitHub Stats
          </h2>
          <SidebarSeparator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-8">
            <figure className="flex items-center justify-center w-full h-full">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser?.login}&show_icons=true&theme=github_dark`}
                alt="GitHub Stats"
                loading="lazy"
                width={450}
                height={195}
                className="object-cover w-full h-full"
              />
            </figure>
            <figure className="flex items-center justify-center w-full h-full">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser?.login}&theme=blue_navy&hide_border=false`}
                alt="GitHub Streak Stats"
                className="object-cover w-full h-full"
                loading="lazy"
                width={450}
                height={195}
              />
            </figure>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser?.login}&theme=github_dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
              alt="GitHub Top Languages"
              loading="lazy"
              width={300}
              height={165}
            />
          </div>
        </>
      )}
      {isShowingGithubTrophies && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex align-center gap-2">
            <img
              src="https://slackmojis.com/emojis/15285-trophy/download"
              alt=""
              width="30"
            />{" "}
            GitHub Trophies
          </h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${githubUser?.login}&theme=github_dark&no-frame=false&no-bg=true&margin-w=4`}
            alt="GitHub Trophies"
            className="mb-6"
            loading="lazy"
          />
        </>
      )}
      {isShowingTopRepos && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex align-center gap-2">
            <img
              src="https://slackmojis.com/emojis/3957-winner/download"
              alt=""
              width={30}
            />
            Top Repositories
          </h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-contributor-stats.vercel.app/api?username=${githubUser?.login}&limit=5&theme=github_dark&combine_all_yearly_contributions=true`}
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
