import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { SidebarSeparator } from "./ui/sidebar";
import { SectionForm } from "./ui/SectionForm";
import { Textarea } from "./ui/textarea";
import { SocialsInput } from "./ui/SocialsInput";

export const ReadmeForm = () => {
  return (
    <form action="">
      <SectionForm title="Basics">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="name" className="text-sm">
            Full Name
          </Label>
          <Input type="text" id="name" placeholder="Enter your name" />
        </div>
      </SectionForm>
      <SectionForm title="About Me">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="message" className="text-sm">
            Summary
          </Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </SectionForm>
      <SectionForm title="Socials">
        <SocialsInput
          label="Github"
          placeholder="username"
          type="url"
          id="github"
        />
        <SocialsInput
          label="LinkedIn"
          placeholder="username"
          type="url"
          id="linkedin"
        />
        <SocialsInput
          label="Twitter"
          placeholder="username"
          type="url"
          id="twitter"
        />
      </SectionForm>
      <SidebarSeparator />
    </form>
  );
};
