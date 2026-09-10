import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/content/site";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Mitra Digital Lembaga Pendidikan`,
    template: `%s — ${site.name}`,
  },
  description:
    "Agensi digital untuk dunia pendidikan: video profil sekolah, pengembangan web, publikasi jurnal, desain, dan pendampingan digitalisasi.",
};

const themeScript = `
try {
  var stored = localStorage.getItem("theme");
  var preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  if (stored === "dark" || (!stored && preferred === "dark")) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${sora.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
