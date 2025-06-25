import type { readmeFormTypes } from "@/types";
import { techStackColors } from "../techStackColors";
import { technologies } from "@/data/techStack";

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
      return (
        <img
          key={tech}
          src={`https://img.shields.io/badge/${tech}-${color}?style=flat-square&logo=${logo}&logoColor=white`}
          alt={`${tech} badge`}
          className="inline-block mr-2 mb-2 h-6"
        />
      );
    });
  }
  return null;
};
