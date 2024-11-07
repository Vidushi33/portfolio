"use client";

import { NAVBAR_ITEMS } from "@/utils/constants";
import Github from "@Icons/github";
import Instagram from "@Icons/instagram";
import LinkedIn from "@Icons/linkedin";
import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {

  return (
    <footer className="mt-40 px-10  border-t border-gray-700 py-6">
      <div className="flex justify-between">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="logo-text font-bold text-4xl text-[#ff69b480]">
            PORTFOLIO
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 text-primaryColor">
              About Me
            </h3>
            <p>
              Frontend Developer specializing in React and Next.js. I love
              crafting performant and user-friendly interfaces.
            </p>
          </div>

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
        </div> */}

        <p>© {new Date().getFullYear()} All Rights Reserved.</p>

        <div>
          <div className="flex items-center gap-4">
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
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-white"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
