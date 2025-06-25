import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import {
  generateDescription,
  generateGreeting,
  generateSocialLinks,
  generateTechnologies,
} from "@/utils/readmeGenerators/templateA";
import { SidebarSeparator } from "./ui/sidebar";
import type { readmeFormTypes } from "@/types";

export const ReadmePreviewTemplateA = () => {
  const { readmeContent } = useReadmeFormStore((state) => state);

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

  return (
    <div className="flex flex-col w-full h-full">
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
          <h2 className="text-2xl font-semibold mb-3">💫 About Me</h2>
          <p className="text-base mb-6">{generateDescription(readmeContent)}</p>
        </>
      )}
      {Object.values(readmeContent.socials).some((value) => value !== "") && (
        <>
          <h2 className="text-2xl font-semibold mb-3">🌐 Socials</h2>
          <div className="flex flex-wrap mb-6">
            {generateSocialBadges(readmeContent)}
          </div>
        </>
      )}
      {readmeContent.techStack && readmeContent.techStack.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-3">🛠️ Tech Stack</h2>
          <div className="flex flex-wrap mb-6">
            {generateTechnologies(readmeContent)}
          </div>
        </>
      )}
    </div>
  );
};
