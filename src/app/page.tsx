"use client";

import AboutMe from "@/components/AboutMe";
import ActivitiesSection from "@/components/ActivitiesSection";
import Educations from "@/components/Educations";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import PublicationsSection from "@/components/PublicationsSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="education">
        <Educations />
      </section>
      <section id="publications">
        <PublicationsSection />
      </section>
      <section id="activities">
        <ActivitiesSection />
      </section>
    </div>
  );
}
