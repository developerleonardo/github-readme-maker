import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <SidebarTrigger />
        <section className="flex flex-col flex-1 p-8 items-center justify-center">
          {children}
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
