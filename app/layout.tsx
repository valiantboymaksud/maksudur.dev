import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MainLayout from "@/components/MainLayout";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Maksudur Rahman | Software Engineer",
    template: "%s | Maksudur Rahman",
  },
  description: "Senior Software Engineer specializing in scalable enterprise systems, fintech solutions, and robust backend architecture.",
  keywords: ["Software Engineer", "Fintech", "Scalable Systems", "Backend Developer", "Maksudur Rahman"],
  authors: [{ name: "Maksudur Rahman" }],
  creator: "Maksudur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valiantboymaksud.github.io",
    title: "Maksudur Rahman | Software Engineer",
    description: "Senior Software Engineer specializing in scalable enterprise systems and fintech solutions.",
    siteName: "Maksudur Rahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maksudur Rahman | Software Engineer",
    description: "Senior Software Engineer specializing in scalable enterprise systems and fintech solutions.",
  },
  icons: {
    icon: "/images/M.D-Logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-200 antialiased selection:bg-blue-500 selection:text-white`}>
        <ThemeProvider>
          <MainLayout>
            {children}
            <Footer />
            </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}