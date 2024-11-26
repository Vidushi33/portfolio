"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TopIcon from "@Icons/topIcon";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition / (documentHeight - windowHeight) >= 0.4) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 0,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      {children}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 sm:bottom-20 right-2 sm:right-5 p-3  z-50 text-white rounded-full shadow-lg"
        >
          <TopIcon />
        </button>
      )}
    </>
  );
};

export default AppLayout;
