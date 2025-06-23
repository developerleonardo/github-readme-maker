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

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Readme Preview</h1>
      <TemplateComponent />
    </div>
  );
};
