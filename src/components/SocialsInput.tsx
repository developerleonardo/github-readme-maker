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
  const updateSocialField = useReadmeFormStore(
    (state) => state.updateSocialField
  );

  const handleSocialInputUpdate = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    updateSocialField(e.target.id as socialsTypes, e.target.value);
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        onBlur={(e) => handleSocialInputUpdate(e)}
      />
    </div>
  );
};
