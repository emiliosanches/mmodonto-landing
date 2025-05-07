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
import { matchPaths } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { BriefcaseMedical, ContactRound, Home, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Início",
    ariaLabel: "Ir para a página inicial",
    url: "/",
    icon: Home,
  },
  {
    title: "A Clínica",
    ariaLabel: "Ir para a página sobre a clínica",
    url: "/clinica",
    icon: Store,
  },
  {
    title: "Profissionais",
    ariaLabel: "Ir para a página de profissionais",
    url: "/profissionais",
    icon: ContactRound,
  },
  {
    title: "Tratamentos",
    ariaLabel: "Ir para a página de tratamentos",
    url: "/tratamentos",
    icon: BriefcaseMedical,
  },
];

export function AppSidebar() {
  const currentPath = usePathname();

  return (
    <Sidebar aria-label="Menu lateral do site">
      <SidebarHeader className="flex items-center justify-center p-4">
        <Image
          src="/assets/logo/mmodonto-horizontal-colorido.png"
          alt="M&M Odonto"
          width={300}
          height={150}
          className="w-[200px] h-[100px]"
          aria-hidden
          tabIndex={-1}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel id="menu-pages-label">Páginas</SidebarGroupLabel>
          <SidebarGroupContent>
            <nav
              role="navigation"
              aria-label="Navegação do menu lateral"
              aria-labelledby="menu-pages-label"
            >
              <SidebarMenu>
                {items.map((item) => {
                  const isCurrent = matchPaths(currentPath ?? "", item.url);

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className="hover:text-teal-700"
                      >
                        <Link
                          role="link"
                          aria-label={item.ariaLabel}
                          aria-current={isCurrent ? "page" : undefined}
                          href={item.url}
                          className={cn(isCurrent && "text-primary")}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
