import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}