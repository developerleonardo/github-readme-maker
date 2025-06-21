import { Label } from "@radix-ui/react-label";
import { Input } from "./input";

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
    <div className="grid w-full max-w-sm items-center gap-1 mt-2">
      <Label htmlFor={label} className="text-sm">
        {label}
      </Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
