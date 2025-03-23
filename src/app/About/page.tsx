import React from "react";
import AboutMe from "../../components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Educations from "@/components/Educations";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div>
      <AboutMe />
      <ProjectSection />
      <Skills />
      <Educations />
    </div>
  );
};

export default page;
