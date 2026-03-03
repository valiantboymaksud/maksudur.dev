import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MainLayout from "@/components/MainLayout";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enterprise Software Engineer | Portfolio",
  description: "Senior Engineer specializing in scalable systems and fintech solutions.",
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