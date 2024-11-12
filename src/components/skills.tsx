import { SKILLS } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
<<<<<<< HEAD
    <div className="bg-black  h-screen" id="skills">
=======
    <div className="my-40" id="skills" data-aos="fade-up">
      <h1 className="text-center font-bold text-4xl text-primaryColor tracking-wide">
        Tech Stack
      </h1>
>>>>>>> 5270672 (adding data to repo)
      <div className="grid grid-cols-7 justify-center items-center gap-6">
        {SKILLS.slice(0, 7).map((datum, index) => (
          <Image
            key={index}
            src={datum.image}
            alt="Skill Logo"
            width={200}
            height={200}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 ">
        {SKILLS.slice(7, 13).map((datum, index) => (
          <Image
            key={index}
            src={datum.image}
            alt="Skill Logo"
            width={200}
            height={200}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
<<<<<<< HEAD
           />
=======
          />
>>>>>>> 5270672 (adding data to repo)
        ))}
      </div>
    </div>
  );
};

export default Skills;
