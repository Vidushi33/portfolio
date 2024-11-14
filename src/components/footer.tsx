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
        <p>© {new Date().getFullYear()} All Rights Reserved. Designed by Vidushi Malik.</p>

        <div>
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
