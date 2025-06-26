import { AppSidebar } from "@/components/AppSidebar";
import { DialogWithMD } from "@/components/DialogWithMD";
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
      <DialogWithMD />
      <Header />
      <div className="grid grid-cols-[auto_1fr_auto] w-full h-full justify-center">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
        </SidebarProvider>
        <SidebarInset className="overflow-y-auto h-[calc(100vh-40px)]">
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
