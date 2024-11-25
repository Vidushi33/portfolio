"use client";

import Github from "@Icons/github";
import Instagram from "@Icons/instagram";
import LinkedIn from "@Icons/linkedin";
import { HeroImage } from "@Image/index";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function StartSection() {
  const [bio, setBio] = useState("Software");
  const options = ["Software", "Web", "Frontend"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBio((prev) => {
        const currentIndex = options.indexOf(prev);
        const nextIndex = (currentIndex + 1) % options.length;
        return options[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="grid md:grid-cols-2 md:h-[50vh] lg:h-[65vh] xl:h-[80vh]"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center">
        <div className="flex">
          <div className="  ">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Hello,{" "}
            </h2>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium py-3 xl:py-5 leading-normal">
              I&apos;m{" "}
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold shiny-text">
                Vidushi Malik
              </span>
              ,
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium  leading-normal h-[6rem] md:h-[5rem] lg:h-[7rem]">
              I&apos;m a{" "}
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold change-bio text-primaryColor">
                {bio} Developer
              </span>
              <br />
              specializing in modern web applications and dynamic user
              experiences.
            </p>

            <div className="mt-10  md:flex items-center  md:gap-6">
              <button
                id="btn"
                className="hire font-bold  relative w-full md:w-fit text-base md:text-lg px-6 py-2 rounded-full cursor-pointer"
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Hire Me
              </button>

              <div className="mt-4 md:mt-0 relative inline-block overflow-hidden w-full md:w-fit text-center border-2 border-primaryColor rounded-full">
                <div className="group uppercase font-semibold text-base md:text-lg  cursor-pointer  px-10 py-2  relative">
                  <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-y-[-120%]">
                    Download CV
                  </span>
                  <a
                    href="/cv.pdf"
                    download="Vidushi-Malik-CV.pdf"
                    className="absolute rounded-full inset-0 flex items-center justify-center font-bold transition-transform duration-500 ease-out bg-white text-black group-hover:translate-y-0 translate-y-[120%]"
                  >
                    Download Now 📥
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://www.linkedin.com/in/vidushi-malik-11263b1ab/"
                target="_blank"
                className="hover:text-white"
              >
                <LinkedIn />
              </Link>
              <Link
                href="https://github.com/Vidushi33/portfolio"
                target="_blank"
                className="hover:text-white"
              >
                <Github />
              </Link>
              <Link href="#" target="_blank" className="hover:text-white">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex mt-6 md:mt-0 justify-center md:justify-end items-center ">
        <Image
          src={HeroImage}
          alt="Image next to Name"
          width={500}
          height={500}
          className="cursor-pointer w-8/12 md:w-10/12 xl:w-8/12 transition-transform duration-300 ease-in-out hover:scale-105"
          draggable={false}
        />
      </div>
    </div>
  );
}
