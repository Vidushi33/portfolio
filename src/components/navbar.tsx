"use client"

import React from "react";
import { NAVBAR_ITEMS } from "@/utils/constants";

export default function Navbar() {
  return (
    <div className=" relative  flex justify-between items-center py-4 px-8">
      <div className="logo-text font-bold text-5xl text-[#ff69b480]">PORTFOLIO</div>

      <div className="flex gap-8">
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
