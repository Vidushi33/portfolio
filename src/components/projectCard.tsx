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
    <div className="text-white grid grid-cols-2 gap-8 ">
      <div style={{ order: order ? "1" : "2" }}>
        <h1 className="text-2xl font-bold text-pink-500 mb-4">{projectName}</h1>
        <p className="text-lg mb-4">{projectDesc}</p>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Skills</span> -
            <span> {skillsUsed}</span>
          </p>
          <p>
            <span className="font-semibold">Github Link</span> - {githubUrl}
          </p>
          <p className="cursor-pointer">
            <span className="font-semibold">Live Demo</span> -{" "}
            <span className="cursor-pointer">
              <a href={`${liveUrl}`} target="_blank">
                {liveUrl}
              </a>
            </span>
          </p>
        </div>
      </div>

      <div
        style={{ order: order ? "2" : "1" }}
        className="w-full flex justify-center items-center"
      >
        <Link href={`${liveUrl}`} target="_blank">
          <Image
            alt="Portfolio project thumbnail"
            src={image}
            width={576}
            height={576}
            className="rounded-lg shadow-inner hover:shadow-lg transition duration-300 transform hover:scale-105"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
