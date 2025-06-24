import { useReadmeStore } from "@/stores/readme/readme.store";

export const Header = () => {
  const githubUser = useReadmeStore((state) => state.githubUser?.login);
  return (
    <header className="w-full bg-sidebar flex justify-center items-center p-2">
      <h2 className="">
        {githubUser ? `Generate Readme / ${githubUser}` : "Generate Readme"}
      </h2>
    </header>
  );
};
