import { Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar";

export const RightSidebar = () => {
  return (
    <Sidebar side="right">
      <SidebarHeader>
        <h2 className="text-lg font-semibold">Readme Generator</h2>
      </SidebarHeader>
      <SidebarContent>
        <div className="p-4">
          <p className="text-sm text-gray-600">
            Use this sidebar to generate a README file for your project.
          </p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};
