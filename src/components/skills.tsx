import { SKILLS } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      className="my-10 sm:my-20 2xl:my-40"
      id="skills"
      data-aos="fade-up"
    >
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-primaryColor tracking-wide">
        Tech Stack
      </h1>
      <div className=" hidden xl:grid grid-cols-7 justify-center items-center gap-6">
        {SKILLS.slice(0, 7).map((datum, index) => (
          <Image
            key={index}
            src={datum.image}
            alt="Skill Logo"
            width={530}
            height={500}
            className="transition-transform duration-300 ease-in-out hover:scale-125"
            draggable={false}
          />
        ))}
      </div>

      <div className="hidden xl:flex justify-center items-center gap-6 ">
        {SKILLS.slice(7, 13).map((datum, index) => (
          <Image
            key={index}
            src={datum.image}
            alt="Skill Logo"
            width={200}
            height={200}
            className="transition-transform duration-300 ease-in-out hover:scale-125"
            draggable={false}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 xl:hidden items-center">
        {SKILLS.map((datum, index) => (
          <div className="w-10/12" key={index}>
            <Image
              src={datum.image}
              alt="Skill Logo"
              width={530}
              height={500}
              className="transition-transform duration-300 ease-in-out hover:scale-125"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
