import { useMarkdownStore } from "@/stores/markdown/markdown.store";
import { ReadmePreviewTemplateA } from "./ReadmePreviewTemplateA";
import { ReadmePreviewTemplateB } from "./ReadmePreviewTemplateB";

const templateMap = {
  templateA: ReadmePreviewTemplateA,
  templateB: ReadmePreviewTemplateB,
};

export const ReadmePreview = () => {
  const selectedTemplate = useMarkdownStore((state) => state.selectedTemplate);

  const TemplateComponent =
    templateMap[selectedTemplate] ?? ReadmePreviewTemplateA;

  return <TemplateComponent />;
};
