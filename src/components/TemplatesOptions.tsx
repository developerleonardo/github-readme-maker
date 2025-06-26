import { TemplateCard } from "./TemplateCard";
import { templates } from "@/data/templates";

export const TemplatesOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {templates.map((template) => (
        <TemplateCard
          key={template.title}
          title={template.title}
          imageUrl={template.url}
        />
      ))}
    </div>
  );
};
