"use client"

import { NAVBAR_ITEMS } from "@/utils/constants";
import Github from "@Icons/github";
import LinkedIn from "@Icons/linkedin";
import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {
  //   const scrollToTop = () => {
  //     if (typeof window !== "undefined") {
  //       window.scrollTo({ top: 0, behavior: "smooth" });
  //     }
  //   };

  return (
    <footer className="mt-40 mb-20">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="logo-text font-bold text-4xl text-[#ff69b480]">
            PORTFOLIO
          </div>
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 text-primaryColor">
              About Me
            </h3>
            <p>
              Frontend Developer specializing in React and Next.js. I love
              crafting performant and user-friendly interfaces.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mx-auto">
            <h3 className="text-xl font-semibold mb-2 text-primaryColor">
              Quick Links
            </h3>
            {NAVBAR_ITEMS.map((item, index) => (
              <p
                key={index}
                className=" cursor-pointer hover:text-primaryColor"
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

          {/* Contact & Social Media Links */}
          <div className="">
            <h3 className="text-xl font-semibold mb-2 text-primaryColor">
              Connect with Me
            </h3>
            <p>Mobile - 9582576231</p>
            <p className="flex gap-2">
              Email -{" "}
              <a
                href="mailto:yourname@example.com"
                className="block mb-2 hover:text-white"
              >
                vidushimalik135@gmail.com
              </a>
            </p>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="hover:text-white"
              >
                <LinkedIn />
              </Link>
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-white"
              >
                <Github />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
