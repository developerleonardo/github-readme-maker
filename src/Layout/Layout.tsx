import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { RightSidebar } from "@/components/RightSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="grid grid-cols-[auto_1fr_auto] w-full h-full justify-center">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
        </SidebarProvider>
        <SidebarInset>
          <section className="flex flex-col flex-1 p-8 items-center">
            {children}
          </section>
        </SidebarInset>
        <SidebarProvider>
          <SidebarTrigger />
          <RightSidebar />
        </SidebarProvider>
      </div>
    </>
  );
}
