"use client";

import React, { useEffect, useState } from "react";
import { NAVBAR_ITEMS } from "@/utils/constants";
import HamburgerIcon from "@Icons/hamburgerIcon";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div
        className=" relative  flex justify-between items-center py-4 px-3 lg:px-0 w-full lg:w-11/12 mx-auto"
        data-aos="fade-right"
      >
        <div className="logo-text font-bold text-2xl md:text-4xl lg:text-5xl text-[#ff69b480]">
          PORTFOLIO
        </div>

        <div className="md:flex gap-4 lg:gap-8 hidden">
          {NAVBAR_ITEMS.map((item, index) => (
            <p
              key={index}
              className="font-semibold text-xl cursor-pointer hover:text-primaryColor"
              onClick={() => {
                const section = document.getElementById(item.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.name}
            </p>
          ))}
        </div>

        <div
          className="cursor-pointer flex md:hidden justify-end w-full"
          onClick={() => setIsSidebarOpen(true)}
        >
          <HamburgerIcon />
        </div>
      </div>
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="fixed !z-50 top-0 right-0 h-screen w-3/4 max-w-xs bg-[#1c1c1c] text-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="px-3 py-5">
              {NAVBAR_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className={`mb-1   w-full px-2 py-2 text-[#0F0F0F] items-center flex  `}
                >
                  <p
                    onClick={() => {
                      setIsSidebarOpen(false);

                      const section = document.getElementById(item.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`py-2 px-4 font-semibold rounded-full text-primaryColor text-lg w-10/12 `}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="absolute z-50 top-2 right-4 text-white text-xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              X
            </div>
          </div>
        </>
      )}
    </>
  );
}
