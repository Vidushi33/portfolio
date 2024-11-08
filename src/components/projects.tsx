import React from "react";
import { PROJECTS } from "@/utils/constants";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div className="flex flex-col h-Screen text-white" id="projects">
      <div className="flex justify-center">
        <h1 className=" font-bold text-4xl text-primaryColor tracking-widest">
          Projects
        </h1>
      </div>

      <div className="my-20 grid grid-cols-3 gap-10">
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
