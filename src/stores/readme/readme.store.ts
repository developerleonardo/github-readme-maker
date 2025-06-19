import { create } from "zustand";
import { type githubUserTypes } from "@/types";

interface ReadmeStore {
  githubUser: githubUserTypes | null;
  setGithubUser: (user: githubUserTypes | null) => void;
}

export const useReadmeStore = create<ReadmeStore>()((set) => ({
  githubUser: null,
  setGithubUser: (user) => set({ githubUser: user }),
}));
