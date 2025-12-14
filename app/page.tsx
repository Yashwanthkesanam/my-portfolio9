import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ConnectionCTA from "@/components/sections/ConnectionCTA";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <ConnectionCTA />
      <Contact />
      <Footer />
    </main>
  );
}
