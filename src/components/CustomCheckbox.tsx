import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type CustomCheckboxProps = {
  id: string;
  label: string;
};

export const CustomCheckbox = ({ id, label }: CustomCheckboxProps) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} />
      <Label htmlFor="terms">{label}</Label>
    </div>
  );
};
