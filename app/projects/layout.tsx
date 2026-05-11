import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Maksudur Rahman",
  description: "Showcase of enterprise-grade systems and software projects engineered by Maksudur Rahman.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
