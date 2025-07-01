import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { type socialsTypes } from "@/types";

type SocialsInputProps = {
  label: string;
  placeholder: string;
  id: string;
  type?: string;
};

export const SocialsInput = ({
  label,
  placeholder,
  id,
  type = "text",
}: SocialsInputProps) => {
  const readmeContentSocials = useReadmeFormStore(
    (state) => state.readmeContent.socials
  );
  const updateSocialField = useReadmeFormStore(
    (state) => state.updateSocialField
  );

  const handleSocialInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSocialField(e.target.id as socialsTypes, e.target.value);
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={readmeContentSocials[id as socialsTypes]}
        onChange={(e) => handleSocialInputUpdate(e)}
      />
    </div>
  );
};
