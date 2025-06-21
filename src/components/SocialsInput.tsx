import { Input } from "./ui/input";
import { Label } from "./ui/label";

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
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
