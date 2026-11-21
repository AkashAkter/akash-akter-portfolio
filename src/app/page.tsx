"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import AllProjects from "@/components/AllProjects";
import AboutMe from "@/components/AboutMe";
import CertificatesSection from "@/components/CertificatesSection";
import CvSection from "@/components/CvSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      suppressHydrationWarning
      className="min-h-screen bg-[var(--surface)] text-[var(--text)] transition-colors duration-200"
    >
      <Header />
      <Hero />
      <ProjectSection />
      <AllProjects />
      <AboutMe />
      <CertificatesSection />
      <CvSection />
      <Footer />
    </main>
  );
}
