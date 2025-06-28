import { Input } from "./ui/input";
import { SectionForm } from "./SectionForm";
import { Textarea } from "./ui/textarea";
import { SocialsInput } from "./SocialsInput";
import { socials } from "@/data/socials";
import { Label } from "./ui/label";
import { CustomCheckbox } from "./CustomCheckbox";
import { technologies } from "@/data/techStack";
import { Button } from "./ui/button";
import { useReadmeFormStore } from "@/stores/readmeForm/readmeForm.store";
import { GithubStatsCheckbox } from "./GithubStatsCheckbox";
import { useReadmeStore } from "@/stores";
import { useMarkdownStore } from "@/stores/markdown/markdown.store";
import { generateMarkDownSelectedTemplate } from "@/utils/readmeGenerators/markDownFunctions";

export const ReadmeForm = () => {
  const readmeContent = useReadmeFormStore((state) => state.readmeContent);
  const updateField = useReadmeFormStore((state) => state.updateField);
  const resetForm = useReadmeFormStore((state) => state.resetForm);
  const githubUser = useReadmeStore((state) => state.githubUser?.login);
  const setIsModalOpen = useMarkdownStore((state) => state.setIsModalOpen);
  const selectedTemplate = useMarkdownStore((state) => state.selectedTemplate);
  const setMarkdownContent = useMarkdownStore(
    (state) => state.setMarkdownContent
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const markdown = generateMarkDownSelectedTemplate(
      readmeContent,
      githubUser,
      selectedTemplate
    );
    setIsModalOpen(true);
    setMarkdownContent(markdown);
  };

  const handleInputUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateField(e.target.id as keyof typeof readmeContent, e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <SectionForm title="Basics">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={readmeContent.name}
            onChange={(e) => handleInputUpdate(e)}
          />
        </div>
      </SectionForm>
      <SectionForm title="About Me">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="message">Summary</Label>
          <Textarea
            placeholder="Type your message here."
            id="summary"
            value={readmeContent.summary}
            onChange={(e) => handleInputUpdate(e)}
          />
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
        <GithubStatsCheckbox />
      </SectionForm>
      <div className="flex items-center justify-center gap-3 mt-8">
        <Button type="button" variant="secondary" onClick={() => resetForm()}>
          Reset
        </Button>
        <Button type="submit">Generate Readme</Button>
      </div>
    </form>
  );
};
