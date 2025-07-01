import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type CustomCheckboxProps = {
  id: string;
  label: string;
};

export const CustomCheckbox = ({ id, label }: CustomCheckboxProps) => {
  const techStack = useReadmeFormStore(
    (state) => state.readmeContent.techStack
  );
  const isChecked = techStack.includes(id);
  const toggleTechStack = useReadmeFormStore((state) => state.toggleTechStack);

  const handleCheckboxChange = (id: string) => () => {
    toggleTechStack(id);
  };

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={id}
        name={id}
        checked={isChecked}
        onCheckedChange={handleCheckboxChange(id)}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};
