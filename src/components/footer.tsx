"use client";

import { NAVBAR_ITEMS } from "@/utils/constants";
import Github from "@Icons/github";
import Instagram from "@Icons/instagram";
import LinkedIn from "@Icons/linkedin";
import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {

  return (
    <footer className="mt-16 sm:mt-40  border-t border-gray-700 py-6">
      <div className="sm:flex justify-between px-3 lg:px-0 w-full lg:w-11/12 mx-auto">
        <p>© {new Date().getFullYear()} All Rights Reserved. Designed by Vidushi Malik.</p>

        <div className="mt-4 sm:mt-0">
          <div className="flex items-center gap-4">
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
            <Link
              href="#"
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
