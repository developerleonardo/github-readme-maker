import { Input } from "./ui/input";
import { SectionForm } from "./SectionForm";
import { Textarea } from "./ui/textarea";
import { SocialsInput } from "./SocialsInput";
import { socials } from "@/data/socials";
import { Label } from "./ui/label";
import { CustomCheckbox } from "./CustomCheckbox";
import { technologies } from "@/data/techStack";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

export const ReadmeForm = () => {
  return (
    <form action="">
      <SectionForm title="Basics">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" />
        </div>
      </SectionForm>
      <SectionForm title="About Me">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="message">Summary</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </SectionForm>
      <SectionForm title="Socials">
        <div className="flex flex-col gap-4">
          {socials.map((social) => (
            <SocialsInput
              key={social.id}
              label={social.label}
              placeholder={social.placeholder}
              type={social.type}
              id={social.id}
            />
          ))}
        </div>
      </SectionForm>
      <SectionForm title="Tech Stack">
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          {technologies.map((tech) => (
            <CustomCheckbox id={tech.id} label={tech.label} />
          ))}
        </div>
      </SectionForm>
      <SectionForm title="Github Stats">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Checkbox id="stats" />
            <Label htmlFor="terms">Show Github Stats</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="trophies" />
            <Label htmlFor="terms">Show Github Trophies</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="top-repos" />
            <Label htmlFor="terms">Show Top Contributed Repos</Label>
          </div>
        </div>
      </SectionForm>
      <div className="flex items-center justify-center gap-3 mt-8">
        <Button variant="secondary">Reset</Button>
        <Button type="submit">Generate Readme</Button>
      </div>
    </form>
  );
};
