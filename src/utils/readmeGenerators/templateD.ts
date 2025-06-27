import type { readmeFormTypes } from "@/types";

export const generateMarkDownTemplateD = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  return `# ${readmeContent.name} - ${githubUser} 👋
  `;
};
