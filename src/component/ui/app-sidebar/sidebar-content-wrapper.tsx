'use client'
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { Logo } from "./logo";
import { MainNavigation } from "./main-navigation";
import { SecondaryNavigation } from "./secondary-navigation";

export function SidebarContentWrapper() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar
      className={cn(
        "relative h-screen border-r bg-background transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[3.8rem]" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo/Brand */}
        <Logo isCollapsed={isCollapsed} />
        
        {/* Main Navigation */}
        <MainNavigation isCollapsed={isCollapsed} />
        
        {/* Secondary Navigation */}
        <SecondaryNavigation isCollapsed={isCollapsed} />
      </div>
    </Sidebar>
  );
}