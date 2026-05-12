import Sidebar from "@/components/Sidebar";
import StormBackground from "@/components/StormBackground";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative text-slate-900 dark:text-slate-200 min-h-screen flex flex-col overflow-hidden">
      <StormBackground />
      <Sidebar />
      <ScrollToTop />

      <div className="flex-1 md:pl-[280px] overflow-y-auto scroll-smooth">
        <div className="px-4 sm:px-6 md:px-8 pt-20 md:pt-10 pb-10">
          {children}
        </div>
      </div>
    </main>
  );
}