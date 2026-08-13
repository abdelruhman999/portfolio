'use client'
import { Settings, HelpCircle, LogOut } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { NavItem } from "./nav-item";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

interface SecondaryNavigationProps {
  isCollapsed: boolean;
}

export function SecondaryNavigation({ isCollapsed }: SecondaryNavigationProps) {
  const t = useTranslations('navigation');
  
  // Create secondary navigation items with translations
  const secondaryNavItems = useMemo(() => [
    // { title: t('settings'), icon: Settings, href: "/settings" },
    { title: t('help'), icon: HelpCircle, href: "/help" },
    { title: t('logout'), icon: LogOut, href: "/logout" }
  ], [t]);

  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          {secondaryNavItems.map((item) => (
            <NavItem key={item.title} item={item} isCollapsed={isCollapsed} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}