import React from "react";
import AboutMe from "../../components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Educations from "@/components/Educations";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import ExperienceSection from "@/components/ExperienceSection"; // New component
import PublicationsSection from "@/components/PublicationsSection";

const page = () => {
  return (
    <div>
      <Header />
      <section id="home">{/* Optional home section if you have one */}</section>
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

      <PublicationsSection />

      <CommentSection />
    </div>
  );
};

export default page;
