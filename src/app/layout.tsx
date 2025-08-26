import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ColorSchemeProvider } from "@/components/providers/ColorSchemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Between - Professional Portfolio",
  description:
    "Professional portfolio showcasing web development, UI/UX design, and automation services. View my projects, skills, and get in touch for collaboration opportunities.",
  keywords:
    "portfolio, web development, UI/UX, automation, React, Next.js, TypeScript",
  authors: [{ name: "Go Between" }],
  creator: "Go Between",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gobetween.vercel.app",
    title: "Go Between - Professional Portfolio",
    description:
      "Professional portfolio showcasing web development, UI/UX design, and automation services.",
    siteName: "Go Between Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Between - Professional Portfolio",
    description:
      "Professional portfolio showcasing web development, UI/UX design, and automation services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="gobetween-theme"
        >
          <ColorSchemeProvider>
            <div className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ColorSchemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
