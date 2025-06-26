type TemplateCardProps = {
  title: string;
  imageUrl: string;
};

export const TemplateCard = ({ title, imageUrl }: TemplateCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white border hover:border-black cursor-pointer transition-colors duration-200">
      <figure className="w-full h-48 rounded-lg rounded-b-none">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full rounded-lg object-cover rounded-b-none"
          width={165.5}
          height={192}
          loading="lazy"
        />
      </figure>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
    </div>
  );
};

// https://cdn.pixabay.com/photo/2021/08/17/23/50/vintage-6554322_960_720.jpg
