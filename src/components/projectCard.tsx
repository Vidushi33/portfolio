import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  projectName: string;
  projectDesc: string;
  image: any;
  skillsUsed: string;
  githubUrl: string;
  liveUrl: string;
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
    // <div className="text-white grid grid-cols-2 gap-8 ">
    //   <div style={{ order: order ? "1" : "2" }}>
    //     <h1 className="text-2xl font-bold text-pink-500 mb-4">{projectName}</h1>
    //     <p className="text-lg mb-4">{projectDesc}</p>

    //     <div className="space-y-2">
    //       <p>
    //         <span className="font-semibold">Skills</span> -
    //         <span> {skillsUsed}</span>
    //       </p>
    //       <p>
    //         <span className="font-semibold">Github Link</span> - {githubUrl}
    //       </p>
    //       <p className="cursor-pointer">
    //         <span className="font-semibold">Live Demo</span> -{" "}
    //         <span className="cursor-pointer">
    //           <a href={`${liveUrl}`} target="_blank">
    //             {liveUrl}
    //           </a>
    //         </span>
    //       </p>
    //     </div>
    //   </div>

    //   <div
    //     style={{ order: order ? "2" : "1" }}
    //     className="w-full flex justify-center items-center"
    //   >
    //     <Link href={`${liveUrl}`} target="_blank">
    //       <Image
    //         alt="Portfolio project thumbnail"
    //         src={image}
    //         width={576}
    //         height={576}
    //         className="rounded-lg shadow-inner hover:shadow-lg transition duration-300 transform hover:scale-105"
    //       />
    //     </Link>
    //   </div>
    // </div>

    <div className="  w-full h-[20rem] rounded-lg overflow-hidden shadow-lg">
      <div className="group relative">
        <Image
          alt="Portfolio project thumbnail"
          src={image}
          width={576}
          height={576}
          className="rounded-lg group shadow-inner hover:shadow-lg transition duration-300 transform hover:scale-105"
        />

        <div className="absolute inset-0 bg-gray-200 bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Live Demo Icon */}
          <a
            href={`${liveUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {liveUrl}
          </a>

          {/* GitHub Code Icon */}
          <a
            href={`${githubUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            {githubUrl}
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold text-pink-500 mb-4">{projectName}</h1>
        <span className="font-semibold">Skills</span> -
        <span> {skillsUsed}</span>
      </div>

      {/* Hover Overlay */}
    </div>
  );
};

export default ProjectCard;
