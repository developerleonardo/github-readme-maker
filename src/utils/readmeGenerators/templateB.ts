import type { readmeFormTypes } from "@/types";

export const generateMarkDownTemplateB = (
  readmeContent: readmeFormTypes,
  githubUser: string | undefined
): string => {
  return `# ${readmeContent.name} - ${githubUser} 👋
  `;
};
