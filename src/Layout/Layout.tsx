import { AppSidebar } from "@/components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <SidebarInset>
        <section className="flex flex-col flex-1 p-4 items-center justify-center">
          {children}
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
