type SectionFormProps = {
  children: React.ReactNode;
  title: string;
};

export const SectionForm = ({ children, title }: SectionFormProps) => {
  return (
    <section className="flex flex-col justify-center mt-8">
      <h2 className="text-heading-1 text-2xl mb-4 font-bold">{title}</h2>
      {children}
    </section>
  );
};
