import { create, type StateCreator } from "zustand";
import { type readmeFormTypes } from "@/types";

interface ReadmeFormStore {
  readmeContent: readmeFormTypes;
  updateField: <K extends keyof readmeFormTypes>(
    field: K,
    value: readmeFormTypes[K]
  ) => void;
  updateSocialField: <K extends keyof readmeFormTypes["socials"]>(
    socialField: K,
    value: readmeFormTypes["socials"][K]
  ) => void;
  toggleTechStack: (tech: string) => void;
  toggleBooleanField: <k extends keyof readmeFormTypes>(field: k) => void;
}

const initialReadmeContent: readmeFormTypes = {
  name: "",
  summary: "",
  socials: {
    github: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    youtube: "",
  },
  techStack: [],
  showGithubStats: false,
  showGithubTrophies: false,
  showTopRepos: false,
};

const createReadmeFormStore: StateCreator<ReadmeFormStore> = (set, get) => ({
  readmeContent: initialReadmeContent,
  updateField: (field, value) =>
    set((state) => ({
      readmeContent: {
        ...state.readmeContent,
        [field]: value,
      },
    })),
  updateSocialField: (socialField, value) =>
    set((state) => ({
      readmeContent: {
        ...state.readmeContent,
        socials: {
          ...state.readmeContent.socials,
          [socialField]: value,
        },
      },
    })),
  toggleTechStack: (tech: string) => {
    const { techStack } = get().readmeContent;
    const isAlreadyAdded = techStack.includes(tech);

    const updatedTechStack = isAlreadyAdded
      ? techStack.filter((item) => item !== tech) // Remove if exists
      : [...techStack, tech]; // Add if not

    set({
      readmeContent: {
        ...get().readmeContent,
        techStack: updatedTechStack,
      },
    });
  },
  toggleBooleanField: (field) => {
    set((state) => ({
      readmeContent: {
        ...state.readmeContent,
        [field]: !state.readmeContent[field],
      },
    }));
  },
});

export const useReadmeFormStore = create<ReadmeFormStore>()(
  createReadmeFormStore
);
