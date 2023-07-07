import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaLanguage } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    // Add a listener to the window scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setIsScrolling(window.scrollY > 60);

  type StyleType = {
    scrollStyles?: string | undefined;
    nonScrollStyles?: string | undefined;
    customGeneralStyles?: string | undefined;
  };

  return (
    <nav
      className={`${showMobileNav && "bg-white"} ${
        isScrolling ? "bg-white md:shadow" : "md:bg-transparent"
      } md:min-h-{5.563rem} fixed top-0 left-0 z-10 w-screen min-w-fit py-2 md:fixed md:top-0 md:left-0 md:z-50 md:flex md:flex-nowrap md:items-center md:justify-between md:px-12 md:py-1 md:transition-all md:duration-1000 md:ease-in-out`}
    >
      <Link
        onClick={() => setShowMobileNav(false)}
        href="/"
        className="flex w-fit bg-transparent pl-[1rem] md:relative md:px-0"
      >
        <Image
          src={isScrolling ? "/logo-dark.png" : "/logo-light.png"}
          alt="CodeDevils Logo"
          width="180"
          height="100"
        />
      </Link>

      <button
        className={`fixed top-7 right-3 flex  rounded border-solid p-[.6rem] text-xl outline-0 transition-colors duration-300 ease-in-out hover:bg-gray-600 focus:border-[.1rem] focus:border-gray-400 focus:p-2 md:hidden ${
          showMobileNav
            ? "text-maroon"
            : ` hover:text-maroon focus:text-white ${
                isScrolling ? "text-maroon" : "text-white"
              }`
        }`}
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        <GiHamburgerMenu />
      </button>

      <ul
        className={`${
          showMobileNav ? "flex" : "hidden md:flex"
        } flex-col md:my-auto md:mx-8 md:min-w-fit md:flex-row md:flex-nowrap md:items-center md:justify-between`}
      >
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([title, url], key) => (
          <li
            key={key}
            className={`md:relative md:mr-[.25rem] md:ml-[.25rem] md:inline-block md:p-0 md:text-lg md:font-normal md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:transition-transform md:after:duration-[250ms] md:after:ease-out  md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid
                ${
                  isScrolling
                    ? "md:hover:after:border-maroon"
                    : "md:hover:after:border-white"
                } ${
              // styles for underlining the current page's tab
              typeof window !== "undefined" &&
              window?.location?.pathname === url &&
              `md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid  ${
                isScrolling ? "md:after:border-maroon" : "md:after:border-white"
              }`
            }`}
          >
            <Link
              onClick={() => setShowMobileNav(false)}
              href={url as string}
              className={`${
                isScrolling
                  ? " md:text-gray-100 md:hover:text-maroon"
                  : "md:text-white md:hover:text-gray-400"
              } flex w-full items-center justify-center p-2 text-center md:rounded-lg md:py-2 md:font-medium`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <ul
        className={`${
          showMobileNav && " flex text-black md:relative md:top-0 md:right-0"
        } w-[30vw] md:my-0 md:mx-[0.25rem] md:flex md:min-w-fit md:flex-[1] md:justify-end md:transition-all md:duration-300 md:ease-out`}
      >
        {[
          [
            "Register",
            "/accounts/register",
            <HiUserAdd key={1} />,
            {
              scrollStyles:
                "border-maroon bg-white text-maroon hover:bg-maroon hover:text-white",
              nonScrollStyles: "text-white hover:bg-white hover:text-black",
              customGeneralStyles: `${"hidden md:flex"}`,
            },
          ],
          [
            "Login",
            "/accounts/login",
            <FiLogIn key={2} />,
            {
              scrollStyles: `md:border-maroon bg-maroon text-white md:hover:border-black md:hover:bg-black md:hover:text-white md:hover:shadow-lg`,
              nonScrollStyles: "bg-white md:text-black md:hover:bg-gray-600",
              customGeneralStyles: `${`absolute top-[1.7rem] right-[17vw]  z-50 md:relative md:top-0 md:right-0`}`,
            },
          ],
        ].map(([title, url, icon, styles], key) => {
          const { scrollStyles, nonScrollStyles, customGeneralStyles } =
            styles as StyleType;
          return (
            <li
              key={key}
              className={`md:font-["Space Grotesk"] flex flex-nowrap items-center rounded-3xl uppercase md:mx-[.25rem] md:border md:border-solid md:p-2 md:text-[0.75rem] md:tracking-[1.45px] md:transition-all md:duration-200 md:ease-in-out ${customGeneralStyles}  ${
                isScrolling ? scrollStyles : nonScrollStyles
              } `}
            >
              <div className={`hidden md:flex`}>
                {/* hide icons on mobile */}
                {icon as React.ReactNode}
              </div>
              <Link
                onClick={() => setShowMobileNav(false)}
                href={url as string}
                className={`rounded-xl p-[.7rem] md:ml-2 md:rounded-none md:bg-transparent md:p-0 ${
                  isScrolling ? "bg-maroon" : "bg-white"
                }`}
              >
                {title as string}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className={`${
          showMobileNav ? "flex" : "hidden md:flex"
        } items-center justify-center rounded-full p-[.7rem] shadow-xl transition-all duration-200 ease-in-out ${
          isScrolling
            ? "bg-maroon text-white hover:bg-black"
            : "bg-white hover:bg-gray-600"
        }`}
        onMouseOver={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <FaLanguage />

        <ul className={`${showDropdown ? "thebox" : "hidden"}`}>
          {[
            "Española",
            "English",
            "Française",
            "عربى",
            "Nederlands",
            "Deutsche",
            "日本語",
            "हिन्दी",
          ].map((language, key) => (
            <li key={key} className="">
              <button className="">{language}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
