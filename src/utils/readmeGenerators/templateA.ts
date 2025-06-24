import type { readmeFormTypes } from "@/types";

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
