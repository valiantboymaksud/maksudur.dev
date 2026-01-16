import MainLayout from "@/components/MainLayout";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </MainLayout>
  );
}