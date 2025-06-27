import type { readmeFormTypes } from "@/types";

export const generateMarkDownTemplateE = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  return `# ${readmeContent.name} - ${githubUser} 👋
  `;
};
