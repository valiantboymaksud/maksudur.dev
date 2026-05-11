import type { Metadata } from "next";
import Intro from "@/components/sections/Intro";

export const metadata: Metadata = {
  title: "Profile | Maksudur Rahman",
  description: "Learn more about Maksudur Rahman, a Software Engineer specializing in scalable enterprise systems and fintech solutions.",
  alternates: {
    canonical: "/profile",
  },
};

export default function ProfilePage() {
  return (
    <div className="pt-20 pb-12">
      <Intro />
    </div>
  );
}
