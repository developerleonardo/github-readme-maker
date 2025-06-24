import { ReadmePreviewTemplateA } from "./ReadmePreviewTemplateA";
import { ReadmePreviewTemplateB } from "./ReadmePreviewTemplateB";

const templateMap = {
  templateA: ReadmePreviewTemplateA,
  templateB: ReadmePreviewTemplateB,
};

export const ReadmePreview = () => {
  const selectedTemplate = "templateA";

  const TemplateComponent =
    templateMap[selectedTemplate] ?? ReadmePreviewTemplateA;

  return <TemplateComponent />;
};
