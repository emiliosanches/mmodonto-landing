import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M&M Odonto | Clínica Odontológica em Tupã - Sorria com Confiança",
  description:
    "Clínica odontológica em Tupã com profissionais altamente qualificados. Realizamos instalação e manutenção de aparelho ortodôntico, próteses, facetas, restaurações, atendimento infantil, e muito mais! Venha nos conhecer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} antialiased`}>
        <SidebarProvider open={false}>
          <aside role="complementary">
            <AppSidebar />
          </aside>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </SidebarProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
