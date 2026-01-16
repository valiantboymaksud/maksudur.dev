import Navbar from "@/components/Navbar";
import StormBackground from "@/components/StormBackground";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer"; // Simple footer component (not shown above but implied)

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <StormBackground />
      <Navbar />
      
      <Hero />
      
      {/* Stats Section */}
      <Stats />
      
      <Experience />
      
      <Projects />
      
      <Footer />
    </main>
  );
}