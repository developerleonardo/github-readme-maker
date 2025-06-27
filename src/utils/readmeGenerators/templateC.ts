import type { readmeFormTypes } from "@/types";

export const generateMarkDownTemplateC = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  return `# ${readmeContent.name} - ${githubUser} 👋
  `;
};
