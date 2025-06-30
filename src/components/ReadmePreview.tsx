import { useMarkdownStore } from "@/stores/markdown/markdown.store";
import { ReadmePreviewTemplateA } from "./ReadmePreviewTemplateA";
import { ReadmePreviewTemplateB } from "./ReadmePreviewTemplateB";
import { ReadmePreviewTemplateC } from "./ReadmePreviewTemplateC";
import { ReadmePreviewTemplateD } from "./ReadmePreviewTemplateD";

const templateMap = {
  templateA: ReadmePreviewTemplateA,
  templateB: ReadmePreviewTemplateB,
  templateC: ReadmePreviewTemplateC,
  templateD: ReadmePreviewTemplateD,
};

export const ReadmePreview = () => {
  const selectedTemplate = useMarkdownStore((state) => state.selectedTemplate);

  const TemplateComponent =
    templateMap[selectedTemplate] ?? ReadmePreviewTemplateA;

  return <TemplateComponent />;
};
