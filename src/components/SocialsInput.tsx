import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { type socialsTypes } from "@/types";
import { useState } from "react";

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
  const [error, setError] = useState("");
  const readmeContentSocials = useReadmeFormStore(
    (state) => state.readmeContent.socials
  );
  const updateSocialField = useReadmeFormStore(
    (state) => state.updateSocialField
  );

  const value = readmeContentSocials[id as socialsTypes];

  const handleSocialInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSocialField(e.target.id as socialsTypes, e.target.value);
    setError("");
  };

  const handleBlur = () => {
    if (value && !isValidUrl(value)) {
      setError("Please enter a valid URL (must start with http or https).");
    } else {
      setError("");
    }
  };

  const isValidUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch (error) {
      console.error("Invalid URL:", url, error);
      return false;
    }
  };

  return (
    <div className="grid w-full max-w-sm items-start gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleSocialInputUpdate}
        onBlur={handleBlur}
        className={error ? "border-red-500" : ""}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
