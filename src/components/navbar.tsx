"use client"

import React from "react";
import { NAVBAR_ITEMS } from "@/utils/constants";

export default function Navbar() {
  return (
    <div className=" relative  flex justify-between items-center py-4 px-3 lg:px-0 w-full lg:w-11/12 mx-auto"
     data-aos="fade-right"
     >
      <div className="logo-text font-bold text-4xl lg:text-5xl text-[#ff69b480]">PORTFOLIO</div>

      <div className="flex gap-4 lg:gap-8">
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
    </div>
  );
}
