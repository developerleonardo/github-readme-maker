import { create, type StateCreator } from "zustand";
import { type githubUserTypes } from "@/types";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/session-storage.storage";

interface ReadmeStore {
  githubUser: githubUserTypes | null;
  setGithubUser: (user: githubUserTypes | null) => void;
}

const storeApi: StateCreator<ReadmeStore> = (set) => ({
  githubUser: null,
  setGithubUser: (user) => set({ githubUser: user }),
});

export const useReadmeStore = create<ReadmeStore>()(
  persist(storeApi, {
    name: "readme-storage",
    storage: customSessionStorage,
  })
);
