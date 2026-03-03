import Sidebar from "@/components/Sidebar";
import StormBackground from "@/components/StormBackground";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative text-slate-900 dark:text-slate-200 min-h-screen flex flex-col overflow-hidden">
      <StormBackground />
      <Sidebar />

      <div className="flex-1 md:pl-[280px] overflow-y-auto scroll-smooth">
        <div className="px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
          {children}
        </div>
      </div>
    </main>
  );
}