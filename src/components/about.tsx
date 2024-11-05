import React from "react";

export default function About() {
  return (
    <div className=" grid grid-cols-2 justify-center items-center h-screen relative " id="about">
      <div></div>
      <div className="w-60 h-60 about-gradient rounded-full absolute filter blur-[10rem] right-1/4 top-[15%]"></div>
      <div className="w-60 h-60 about-gradient rounded-full absolute filter blur-[10rem] right-10 bottom-[15%]"></div>
      <div className="w-full  p-10 glass-card ">
        <h1 className="text-center font-bold text-3xl text-primaryColor tracking-widest">
          About Me
        </h1>

        <div className="leading-relaxed tracking-wider mt-10 flex flex-col gap-8 text-lg">
          <p>
            I&apos;m <b>Vidushi Malik</b>, a dedicated Web Developer with a strong
            background in creating user-centric Web Applications. I graduated
            with a degree in <b>Bachelor of Technology(COMPUTER SCIENCE
            ENGINERRING)</b> from <b>AKTU University</b>, and a knack for technologies like
            <b>NextJs, ReactJs, TypeScript and CSS Frameworks</b>.
          </p>

          <p>
            My journey as a developer has been fueled by curiosity and a passion
            for learning. My professional experience includes working at <b>Khan
            Global Studies</b>, where I contributed to building scalable Web
            Solutions and optimizing User Experiences.
          </p>

          <p>
            In my free time, I tinker with personal projects like <b>Portfolio
            Website , Parking System , Authentication Forms</b> and exploring new
            Frameworks and Tools. I&apos;m constantly exploring new trends and
            techniques in Web Development, with a particular interest in
            <b>Front-end performance optimization</b>.
          </p>

          <p>
            My <b>short-term goal</b> is to deepen my expertise in Full-Stack
            Development, while my <b>long-term vision</b> includes Leading a Team or
            Launching a Tech Startup.
          </p>
        </div>
      </div>
    </div>
  );
}
