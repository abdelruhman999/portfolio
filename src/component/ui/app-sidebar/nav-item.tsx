'use client'
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../collapsible";
import Link from "next/link";

interface NavItemProps {
  item: any;
  isCollapsed: boolean;
}

export function NavItem({ item, isCollapsed }: NavItemProps) {
  const hasItems = item.items && item.items.length > 0;

  return (
    <SidebarMenuItem className="">
      {hasItems ? (
        <Collapsible>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="w-full h-10">
              <item.icon className="h-6 w-6 flex-shrink-0" />
              {!isCollapsed && (
                <>
                  <span className="ml-2">{item.title}</span>
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </>
              )}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          {!isCollapsed && (
            <CollapsibleContent className="">
              <SidebarMenuSub className="">
                {item.items.map((subItem: any) => (
                  <SidebarMenuSubItem key={subItem.title?.toString()} className="p-2 hover:bg-accent rounded-sm">
                    <Link href={subItem.href || "#"} className="flex gap-2 items-center">
                      {subItem.icon ? <subItem.icon className="h-4 w-4 flex-shrink-0" /> : null}
                      <span className="ml-2">{subItem.title}</span>
                    </Link>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          )}
        </Collapsible>
      ) : (
        <SidebarMenuButton asChild className="h-10">
          <a href={item.href} className="flex items-center">
            <item.icon className="h-6 w-6 flex-shrink-0" />
            {!isCollapsed && (
              <>
                <span className="ml-2">{item.title}</span>
                {item.badge && (
                  <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </a>
        </SidebarMenuButton>
      )}
    </SidebarMenuItem>
  );
}