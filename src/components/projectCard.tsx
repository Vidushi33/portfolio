import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

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
<<<<<<< HEAD
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
          <Link
            href={`${liveUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link
            href={`${githubUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold text-pink-500 mb-4">{projectName}</h1>
        <span className="font-semibold">Skills</span> -
        <span> {skillsUsed}</span>
      </div>

    </div>
=======
    <div >
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={`${githubUrl}`}
            target="_blank"
            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={`${liveUrl}`}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl text-black  bg-white p-4 h-40">
        <h1 className="text-2xl font-bold text-pink-500 ">{projectName}</h1>
        <span className="font-semibold text-sm">Skills</span> -
        <span className="text-sm"> {skillsUsed}</span>
        <p className="mt-3 text-sm">{projectDesc}</p>
      </div>
    </div>

    // <div className="  w-full h-[20rem] rounded-lg overflow-hidden shadow-lg">
    //   <div className="group relative">
    //     <Image
    //       alt="Portfolio project thumbnail"
    //       src={image}
    //       width={576}
    //       height={576}
    //       className="rounded-lg group shadow-inner hover:shadow-lg transition duration-300 transform hover:scale-105"
    //     />

    //     <div className="absolute inset-0 bg-gray-200 bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //       <Link
    //         href={`${liveUrl}`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="text-blue-500 hover:text-blue-700"
    //       >
    //         <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>

    //       <Link
    //         href={`${githubUrl}`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="text-gray-800 hover:text-gray-600"
    //       >
    //         <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>
    //     </div>
    //   </div>

    //   <div className="p-4 bg-white">
    //     <h1 className="text-2xl font-bold text-pink-500 mb-4">{projectName}</h1>
    //     <span className="font-semibold">Skills</span> -
    //     <span> {skillsUsed}</span>
    //   </div>

    // </div>
>>>>>>> 5270672 (adding data to repo)
  );
};

export default ProjectCard;
