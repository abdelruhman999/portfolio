'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { SidebarContentWrapper } from "./sidebar-content-wrapper";

export function AppSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full  overflow-hidden">
        <SidebarContentWrapper />
        <main className="flex-1 overflow-auto  scrollbar-hide ">
          <div className="p-4">
            <div className={`sticky mb-1 w-fit top-4 z-10 flex items-center gap-2 bg-background rounded-lg p-2 shadow-sm border`}>
              <SidebarTrigger className="rounded-md p-[1.18rem]" />
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <div className="">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}