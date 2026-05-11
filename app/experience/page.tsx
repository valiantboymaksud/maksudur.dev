import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience | Maksudur Rahman",
  description: "Professional journey and work experience of Maksudur Rahman in software engineering and fintech.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="pt-20 pb-12">
      <Experience />
    </div>
  );
}
