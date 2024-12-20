import React from "react";
import { PROJECTS } from "@/utils/constants";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div className="flex flex-col  my-10 sm:my-20 2xl:my-40 text-white" data-aos="fade-up" id="projects">
      <div className="flex justify-center">
        <h3 className=" font-bold text-2xl sm:text-4xl text-primaryColor tracking-widest">
          Projects
        </h3>
      </div>

      <div className="my-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4 lg:gap-10">
        {PROJECTS.map((datum, index) => (
          <ProjectCard
            key={index}
            order={index % 2 == 0}
            githubUrl={datum.github_link}
            image={datum.image}
            liveUrl={datum.live_demo!}
            projectDesc={datum.desc}
            projectName={datum.name}
            skillsUsed={datum.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
