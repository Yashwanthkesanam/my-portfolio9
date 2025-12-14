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
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yashwanth Kesanam",
    "alternateName": "Kesanam Yashwanth",
    "url": "https://yashwanthkesanam.vercel.app",
    "image": "https://yashwanthkesanam.vercel.app/about/profile.jpg",
    "sameAs": [
      "https://github.com/Yashwanthkesanam",
      "https://linkedin.com/in/yashwanthkesanam", // Add your LinkedIn
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "B.Tech Electronics and Communication Engineering"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vijayawada",
      "addressCountry": "India"
    },
    "email": "yashwanthkesanam9@gmail.com",
    "knowsAbout": [
      "Full Stack Development",
      "Python",
      "IoT",
      "React",
      "Next.js",
      "Embedded Systems",
      "Arduino",
      "FastAPI",
      "Web Development"
    ],
    "award": [
      "National Winner - Smart India Hackathon 2024 (Team Lead)",
      "MindSprint Winner"
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
    </>
  );
}
