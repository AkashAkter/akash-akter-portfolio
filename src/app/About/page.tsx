import React from "react";
import AboutMe from "../../components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Educations from "@/components/Educations";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";
import PublicationsSection from "@/components/PublicationsSection";
import ActivitiesSection from "@/components/ActivitiesSection";

const page = () => {
  return (
    <div>
      <Header />
      <section id="home">{/* Hero section if you have one */}</section>

      {/* 1. Start with who you are */}
      <section id="about">
        <AboutMe />
      </section>

      {/* 2. Show what you can do */}
      <section id="skills">
        <Skills />
      </section>

      {/* 3. Demonstrate professional experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* 4. Showcase tangible projects */}
      <section id="projects">
        <ProjectSection />
      </section>

      {/* 5. Highlight academic achievements */}
      <section id="education">
        <Educations />
      </section>

      {/* 6. Display research work */}
      <section id="publications">
        <PublicationsSection />
      </section>

      {/* 7. Show well-rounded personality */}
      <section id="activities">
        <ActivitiesSection />
      </section>
    </div>
  );
};

export default page;
