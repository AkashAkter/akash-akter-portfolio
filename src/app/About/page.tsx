import React from "react";
import AboutMe from "../../components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Educations from "@/components/Educations";
import Skills from "@/components/Skills";
import Header from "@/components/Header";

const page = () => {
  return (
    <div>
      <Header />
      <section id="home">{/* Optional home section if you have one */}</section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Educations />
      </section>
    </div>
  );
};

export default page;
