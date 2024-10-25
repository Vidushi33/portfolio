import { SKILLS } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="bg-black  h-screen">
      <div className="grid grid-cols-7 items-center gap-6">
        {SKILLS.map((datum, index) => (
          <Image
            key={index}
            src={datum.image}
            alt="Skill Logo"
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
