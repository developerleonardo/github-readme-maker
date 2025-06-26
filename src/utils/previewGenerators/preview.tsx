import type { readmeFormTypes } from "@/types";
import { techStackColors } from "../techStackColors";
import { technologies } from "@/data/techStack";
import {
  generateBadgeUrl,
  generateSocialLinks,
} from "../readmeGenerators/markDownFunctions";

export const generateTechnologies = (
  readmeContent: readmeFormTypes
): React.ReactNode => {
  if (readmeContent.techStack && readmeContent.techStack.length > 0) {
    const techList = readmeContent.techStack;
    return techList.map((tech) => {
      const color = techStackColors[tech.toLowerCase()] || "blue";
      const logo =
        technologies.find(
          (item) => item.id.toLowerCase() === tech.toLowerCase()
        )?.label || tech;
      const url = generateBadgeUrl(tech, color, logo);
      return (
        <img
          key={tech}
          src={url}
          alt={`${tech} badge`}
          className="inline-block mr-2 mb-2 h-6"
        />
      );
    });
  }
  return null;
};

export const generateSocialBadgesPreview = (readmeContent: readmeFormTypes) => {
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
