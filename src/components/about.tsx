import { HeroImage, Me } from "@Image/index";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div
      className=" grid sm:grid-cols-[40%_60%] xl:grid-cols-[45%_55%] 2xl:grid-cols-2  justify-center items-center my-10 sm:my-20 2xl:my-40 relative "
      data-aos="fade-up"
      id="about"
    >
      <div className="flex mt-6 md:mt-0 justify-center sm:justify-normal 2xl:justify-center  items-center ">
        <div className="w-8/12 sm:w-11/12 lg:w-10/12 2xl:w-8/12">
          <Image
            src={Me}
            alt="Image next to Name"
            width={460}
            height={45}
            className="sm:rounded-full duration-300 ease-in-out hover:scale-105"
            draggable={false}
          />
        </div>
      </div>
      <div className="w-60 h-60 about-gradient rounded-full absolute filter blur-[9rem] lg:blur-[12rem] right-1/4 top-[40%] md:top-[15%]"></div>
      <div className="w-60 h-60 about-gradient rounded-full absolute filter blur-[9rem] lg:blur-[12rem] right-10 bottom-0 md:bottom-[15%]"></div>
      <div className="w-full  sm:p-4 xl:p-10  mt-8 sm:mt-0">
        <h1 className="text-center font-bold text-2xl lg:text-3xl xl:text-4xl text-primaryColor tracking-widest">
          About Me
        </h1>

        <div className="leading-relaxed tracking-wider mt-4 xl:mt-10 flex flex-col gap-3 lg:gap-5 xl:gap-8 text-sm lg:text-base xl:text-lg">
          <p>
            I&apos;m <b className="text-secondaryColor">Vidushi Malik</b>, a
            dedicated Web Developer with a strong background in creating
            user-centric Web Applications. I graduated with a degree in{" "}
            <b className="text-secondaryColor">
              Bachelor of Technology(COMPUTER SCIENCE ENGINERRING)
            </b>{" "}
            from <b className="text-secondaryColor">AKTU University</b>, and a
            knack for technologies like
            <b className="text-secondaryColor">
              NextJs, ReactJs, TypeScript and CSS Frameworks
            </b>
            .
          </p>

          <p>
            My journey as a developer has been fueled by curiosity and a passion
            for learning. My professional experience includes working at{" "}
            <b className="text-secondaryColor">Khan Global Studies</b>, where I
            contributed to building scalable Web Solutions and optimizing User
            Experiences.
          </p>

          <p>
            In my free time, I tinker with personal projects like{" "}
            <b className="text-secondaryColor">
              Portfolio Website , Parking System , Authentication Forms
            </b>{" "}
            and exploring new Frameworks and Tools. I&apos;m constantly
            exploring new trends and techniques in Web Development, with a
            particular interest in{" "}
            <b className="text-secondaryColor">
              Front-end performance optimization
            </b>
            .
          </p>

          <p>
            My <b className="text-secondaryColor">short-term goal</b> is to
            deepen my expertise in Full-Stack Development, while my{" "}
            <b className="text-secondaryColor">long-term vision</b> includes
            Leading a Team or Launching a Tech Startup.
          </p>
        </div>
      </div>
    </div>
  );
}
