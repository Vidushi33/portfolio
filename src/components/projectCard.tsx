import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { DemoImage } from "@Image/index";

interface IProps {
  projectName: string;
  projectDesc: string;
  image: any;
  skillsUsed: string;
  githubUrl?: string;
  liveUrl?: string;
  order: boolean;
}

const ProjectCard = ({
  githubUrl,
  image,
  liveUrl,
  order,
  projectDesc,
  projectName,
  skillsUsed,
}: IProps) => {
  return (
    <div>
      <div
        className="h-36 sm:h-48 lg:h-56 xl:h-64 2xl:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${image !== "" ? image : DemoImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {githubUrl && (
            <Link
              href={`${githubUrl}`}
              target="_blank"
              className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {liveUrl && (
            <Link
              href={`${liveUrl}`}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="rounded-b-xl text-black  bg-white p-2 lg:p-4 h-fit sm:h-44 lg:h-52 xl:h-44">
        <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-pink-500 ">{projectName}</h4>
        <span className="font-semibold text-sm">Skills</span> -
        <span className="text-sm"> {skillsUsed}</span>
        <p className="mt-3 text-sm">{projectDesc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
