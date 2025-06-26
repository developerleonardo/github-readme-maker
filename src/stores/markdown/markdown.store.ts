import { create } from "zustand";

interface MarkdownStore {
  markdownContent: string;
  setMarkdownContent: (content: string) => void;
  resetMarkdownContent: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const useMarkdownStore = create<MarkdownStore>()((set) => ({
  markdownContent: "",
  isModalOpen: false,

  setMarkdownContent: (content: string) => set({ markdownContent: content }),
  resetMarkdownContent: () => set({ markdownContent: "" }),
  setIsModalOpen: (isOpen: boolean) => set(() => ({ isModalOpen: isOpen })),
}));
