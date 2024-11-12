"use client";

import Github from "@Icons/github";
import Instagram from "@Icons/instagram";
import LinkedIn from "@Icons/linkedin";
import { HeroImage } from "@Image/index";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function StartSection() {
  const [bio, setBio] = useState("Software Developer");
  const options = ["Software Developer", "Web Developer", "Frontend Developer"];

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
    <div className="grid grid-cols-2 h-[80vh]" data-aos="fade-up"> 
      <div className="flex justify-center items-center">
        <div className="flex">
          <div className="  ">
            <h2 className="text-3xl font-medium">Hello, </h2>
            <h1 className=" text-3xl font-medium py-5 leading-normal">
              I&apos;m{" "}
              <span className="text-5xl font-bold shiny-text">
                Vidushi Malik
              </span>
              ,
            </h1>
            <p className="text-2xl font-medium leading-normal h-[7rem]">
              I&apos;m a{" "}
              <span className="text-4xl font-bold change-bio text-primaryColor">
                {bio}{" "}
              </span>
              specializing in modern web applications and dynamic user
              experiences.
            </p>

            <div className="mt-10 flex gap-6">
              <button className="hire font-bold text-lg px-6 py-2 rounded-full cursor-pointer">
                Hire Me
              </button>

              <div className=" relative inline-block overflow-hidden border-2 border-primaryColor rounded-full">
                <div className="group uppercase font-semibold  cursor-pointer  px-10 py-2  relative">
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
          </div>
        </div>
      </div>

      <div className=" flex  justify-center items-center ">
        <div className="flex justify-center items-center">
          <Image
            src={HeroImage}
            alt="Image next to Name"
            width={0}
            height={0}
            className="w-3/5"
          />
        </div>
      </div>
    </div>
  );
}
