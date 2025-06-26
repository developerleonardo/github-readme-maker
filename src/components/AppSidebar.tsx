import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ReadmeForm } from "./ReadmeForm";

export function AppSidebar() {
  return (
    <Sidebar side="left">
      <SidebarHeader>
        <h2 className="text-lg font-semibold">Readme Generator</h2>
      </SidebarHeader>
      <SidebarContent>
        <ReadmeForm />
      </SidebarContent>
    </Sidebar>
  );
}
