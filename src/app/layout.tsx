import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "M&M Odonto | Clínica Odontológica em Tupã",
    template: "%s | M&M Odonto",
  },
  description:
    "Clínica odontológica no centro de Tupã/SP com atendimento em ortodontia, endodontia, prótese e mais. Agende sua consulta!",
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
          <div className="w-full pt-20 flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SidebarProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
