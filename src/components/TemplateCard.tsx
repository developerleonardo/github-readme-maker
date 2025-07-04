import { useMarkdownStore } from "@/stores/markdown/markdown.store";
import type { templateOptionCardsTypes } from "@/types";

export const TemplateCard = ({
  title,
  imageSrc,
  template,
}: templateOptionCardsTypes) => {
  const setSelectedTemplate = useMarkdownStore(
    (state) => state.setSelectedTemplate
  );

  const handleTemplateSelection = () => {
    setSelectedTemplate(template);
  };

  return (
    <button
      onClick={handleTemplateSelection}
      className="flex flex-col items-center rounded-lg bg-white border hover:border-black cursor-pointer transition-colors duration-200"
    >
      <figure className="w-full h-48 rounded-lg rounded-b-none">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full rounded-lg object-cover rounded-b-none object-top"
          width={165.5}
          height={192}
          loading="lazy"
        />
      </figure>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
    </button>
  );
};

// https://cdn.pixabay.com/photo/2021/08/17/23/50/vintage-6554322_960_720.jpg
