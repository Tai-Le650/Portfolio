import type { Metadata } from "next";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const siteName = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Full-stack developer",
    "AI engineering",
    "simulation",
    "Next.js",
    "Godot",
    profile.name,
  ],
  openGraph: {
    title: siteName,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: profile.tagline,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col overflow-x-hidden font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:border focus:border-foreground focus:bg-background focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.08em] focus:text-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
