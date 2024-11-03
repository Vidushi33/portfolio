import { SKILLS } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="bg-black  h-screen">
      <div className="grid grid-cols-7 justify-center items-center gap-6">
        {SKILLS.slice(0, 7).map((datum, index) => (
          <Image
            key={index}
            src={datum.image}
            alt="Skill Logo"
            width={200}
            height={200}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
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
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
           />
        ))}
      </div>
    </div>
  );
};

export default Skills;
