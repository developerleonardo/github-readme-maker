export const TemplatesOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="flex flex-col items-center rounded-lg bg-white border hover:border-black cursor-pointer transition-colors duration-200">
        <figure className="w-full h-48 rounded-lg rounded-b-none">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/17/23/50/vintage-6554322_960_720.jpg"
            alt="Template A"
            className="w-full h-full rounded-lg object-cover rounded-b-none"
          />
        </figure>
        <h3 className="mt-2 text-base font-semibold">Classical</h3>
      </div>
    </div>
  );
};
