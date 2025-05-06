"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useActivePath } from "@/lib/hooks/use-active-path";
import { SidebarTrigger } from "../ui/sidebar";

export function Header() {
  const navItems = [
    { label: "Início", href: "/" },
    { label: "A Clínica", href: "/clinica" },
    { label: "Profissionais", href: "/profissionais" },
    { label: "Tratamentos", href: "/tratamentos" },
  ];

  const isPathActive = useActivePath();

  return (
    <header className="sticky top-0 bg-white shadow-sm px-8 flex justify-center items-center h-20 md:justify-between">
      <SidebarTrigger className="absolute left-8 md:hidden text-foreground" />
      <Link href="/">
        <Image
          src="/assets/logo/mmodonto-horizontal-colorido.png"
          alt="Logo da M&M Odonto"
          width={100}
          height={100}
        />
      </Link>
      <nav className="text-sm font-medium text-gray-700 hidden flex-row h-full gap-6 items-center md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center h-full relative text-foreground font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full after:origin-right hover:after:origin-left",
              isPathActive(item.href) &&
                "text-primary after:w-full after:origin-left"
            )}
          >
            <p>{item.label}</p>
          </Link>
        ))}

        <Link
          href="https://wa.me/5514997027365"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 bg-primary hover:bg-teal-700 text-white px-6 py-2 rounded-xl text-base cursor-pointer"
        >
          <Image
            src="/assets/icons/whatsapp-white.png"
            alt="Ícone do WhatsApp"
            width={24}
            height={24}
          />{" "}
          (14) 99702-7365
        </Link>
      </nav>
    </header>
  );
}
