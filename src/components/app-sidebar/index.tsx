"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useActivePath } from "@/lib/hooks/use-active-path";
import { cn } from "@/lib/utils";
import { BriefcaseMedical, ContactRound, Home, Store } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "A Clínica",
    url: "/clinica",
    icon: Store,
  },
  {
    title: "Profissionais",
    url: "/profissionais",
    icon: ContactRound,
  },
  {
    title: "Tratamentos",
    url: "/tratamentos",
    icon: BriefcaseMedical,
  },
];

export function AppSidebar() {
  const isActive = useActivePath();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center p-4">
        <Image
          src="/assets/logo/mmodonto-horizontal-colorido.png"
          alt="Logo da M&M Odonto"
          width={300}
          height={150}
          className="w-[200px] h-[100px]"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Páginas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={cn(isActive(item.url) && "text-primary")}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
