import { useReadmeStore } from "@/stores";
import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { SidebarSeparator } from "./ui/sidebar";
import {
  generateSocialBadgesPreview,
  generateTechnologies,
} from "@/utils/previewGenerators/preview";

export const ReadmePreviewTemplateD = () => {
  const readmeContent = useReadmeFormStore((state) => state.readmeContent);
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
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <img
              src="https://slackmojis.com/emojis/13387-gokurun/download"
              width="35"
            ></img>
            Hello Hello! I'm {readmeContent.name}{" "}
          </h1>
        </>
      )}
      {readmeContent.summary && (
        <>
          <img
            src="https://media.tenor.com/rbx3ph5SLRUAAAAi/pikachu-pokemon.gif"
            alt=""
            width={300}
            className="mx-auto mb-8"
          />
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            {" "}
            <img
              src="https://slackmojis.com/emojis/10254-pepe_naruto/download"
              alt=""
              width={30}
            />{" "}
            About Me
          </h2>
          <SidebarSeparator className="mb-4" />
          <p className="text-base mb-6">{readmeContent.summary}</p>
        </>
      )}
      {Object.values(readmeContent.socials).some((value) => value !== "") && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            {" "}
            <img
              src="https://slackmojis.com/emojis/37554-charmander/download"
              alt=""
              width={30}
            />{" "}
            Socials
          </h2>
          <SidebarSeparator className="mb-4" />
          <div className="flex flex-wrap mb-6">
            {generateSocialBadgesPreview(readmeContent)}
          </div>
        </>
      )}
      {readmeContent.techStack && readmeContent.techStack.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            {" "}
            <img
              src="https://slackmojis.com/emojis/76421-anime_itachiakatsuki/download"
              alt=""
              width={30}
            />{" "}
            Tech Stack
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
            {" "}
            <img
              src="https://slackmojis.com/emojis/78855-pepe_narutoq/download"
              alt=""
              width={30}
            />{" "}
            GitHub Stats
          </h2>
          <SidebarSeparator className="mb-4" />
          <div className="grid grid-cols-2 gap-4 mb-6">
            <figure className="w-full h-full">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser?.login}&show_icons=true&theme=dracula`}
                alt="GitHub Stats"
                className="h-full object-cover"
                loading="lazy"
                width={450}
                height={195}
              />
            </figure>
            <figure className="w-full h-full">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser?.login}&theme=dracula&hide_border=false`}
                alt="GitHub Streak Stats"
                className="h-full object-cover"
                loading="lazy"
                width={450}
                height={195}
              />
            </figure>
          </div>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser?.login}&theme=dracula&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
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
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            <img
              src="https://slackmojis.com/emojis/5851-crashdance/download"
              alt=""
              width={30}
            />{" "}
            GitHub Trophies
          </h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${githubUser?.login}&theme=dracula&no-frame=false&no-bg=true&margin-w=4`}
            alt="GitHub Trophies"
            className="mb-6"
            loading="lazy"
          />
        </>
      )}
      {isShowingTopRepos && (
        <>
          <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            <img
              src="https://slackmojis.com/emojis/50155-vegeta-smile/download"
              alt=""
              width={30}
            />{" "}
            Top Repositories
          </h2>
          <SidebarSeparator className="mb-4" />
          <img
            src={`https://github-contributor-stats.vercel.app/api?username=${githubUser?.login}&limit=5&theme=dracula&combine_all_yearly_contributions=true`}
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
