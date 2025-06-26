import { TemplatesOptions } from "./TemplatesOptions";
import { Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar";

export const RightSidebar = () => {
  return (
    <Sidebar side="right">
      <SidebarHeader>
        <h2 className="text-lg font-semibold">Template</h2>
      </SidebarHeader>
      <SidebarContent>
        <TemplatesOptions />
      </SidebarContent>
    </Sidebar>
  );
};
