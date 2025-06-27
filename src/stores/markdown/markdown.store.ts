import { create, type StateCreator } from "zustand";
import { type templateTypes } from "@/types";

interface MarkdownStore {
  markdownContent: string;
  selectedTemplate: templateTypes;
  setMarkdownContent: (content: templateTypes) => void;
  setSelectedTemplate: (template: templateTypes) => void;
  resetMarkdownContent: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const createMarkdownStore: StateCreator<MarkdownStore> = (set) => ({
  markdownContent: "",
  selectedTemplate: "templateA", // Default template
  isModalOpen: false,
  setMarkdownContent: (content: string) => set({ markdownContent: content }),
  setSelectedTemplate: (template: templateTypes) =>
    set(() => ({ selectedTemplate: template })),
  resetMarkdownContent: () => set({ markdownContent: "" }),
  setIsModalOpen: (isOpen: boolean) => set(() => ({ isModalOpen: isOpen })),
});

export const useMarkdownStore = create<MarkdownStore>()(createMarkdownStore);
