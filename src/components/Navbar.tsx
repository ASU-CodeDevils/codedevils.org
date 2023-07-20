import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";

import { FaLanguage } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { isSignedIn } = useUser();

  useEffect(() => {
    // Add a listener to the window scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setIsScrolling(window.scrollY > 40); // 40px === 2.5rem

  type StyleType = {
    scrollStyles?: string | undefined;
    nonScrollStyles?: string | undefined;
    customGeneralStyles?: string | undefined;
  };

  return (
    <nav
      className={`${showMobileNav && "bg-white shadow-xl"} ${
        isScrolling ? "bg-white md:shadow" : "md:bg-transparent"
      } md:min-h-{5.563rem} fixed top-0 left-0 z-10 w-screen min-w-fit py-2 md:fixed md:top-0 md:left-0 md:z-50 md:flex md:flex-nowrap md:items-center md:px-12 md:py-1 md:shadow-none md:transition-all md:duration-1000 md:ease-in-out`}
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

      <UserButton
        appearance={{
          elements: {
            userButtonBox: "flex md:hidden absolute top-[2rem] right-[4.5rem]",
          },
        }}
      />

      <button
        aria-label={`${
          !showMobileNav ? "Open mobile navigation" : "Close mobile navigation"
        }`}
        className={`fixed top-7 right-3 flex rounded border-solid p-[.6rem] text-xl outline-0 transition-all duration-500 ease-in-out md:hidden ${
          showMobileNav ? "text-black" : "text-white"
        } ${isScrolling && "text-maroon"}`}
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        {!showMobileNav ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </button>

      <ul
        className={`${
          showMobileNav ? "flex" : "hidden md:flex"
        }  flex-col md:my-auto md:mx-8 md:min-w-fit md:flex-row md:flex-nowrap md:items-center md:justify-between`}
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
                  ? " dark:text-black md:text-gray-100 md:hover:text-maroon"
                  : " text-black md:text-white md:hover:text-gray-400"
              } flex w-full items-center justify-center p-2 text-center md:rounded-lg md:py-2 md:font-medium`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {!isSignedIn && (
        <ul
          className={`${
            showMobileNav && "flex text-black md:relative md:top-0 md:right-0"
          } w-[30vw] md:my-0 md:mx-[0.25rem] md:flex md:min-w-fit md:flex-[1] md:justify-end md:transition-all md:duration-300 md:ease-out`}
        >
          {[
            [
              "Register",
              "/register",
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
              "/login",
              <FiLogIn key={2} />,
              {
                scrollStyles: `md:border-maroon bg-maroon text-white md:hover:border-black md:hover:bg-black md:hover:text-white md:hover:shadow-lg`,
                nonScrollStyles: "bg-white text-black md:hover:bg-gray-600",
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
      )}

      <div
        className={`${showMobileNav ? "flex" : "hidden md:flex"} ${
          !isSignedIn && " p-[.7rem]"
        } ml-auto items-center justify-center rounded-full shadow-xl transition-all duration-200 ease-in-out ${
          isScrolling
            ? "md:bg-maroon md:hover:bg-black"
            : "md:bg-white md:hover:bg-gray-600  md:dark:hover:bg-gray-100"
        }`}
        onMouseOver={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        {isSignedIn ? (
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { userButtonBox: "hidden md:flex" },
            }}
          />
        ) : (
          <>
            <FaLanguage
              className={`${!isScrolling ? "text-black" : "text-white"}`}
            />

            <ul
              className={`${
                showDropdown
                  ? "absolute right-[1rem] top-[4.5rem] flex h-auto min-w-[2em] flex-col flex-nowrap bg-white p-[20px] text-black shadow-md transition-all duration-300 ease-in-out before:fixed before:top-[3.75rem] before:right-[3.5rem] before:h-0 before:w-0 before:border-[10px] before:border-t-0 before:border-b-[20px] before:border-solid before:border-transparent before:border-b-white"
                  : "hidden"
              }`}
            >
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
                <li key={key}>
                  <button
                    aria-label={`Change language to ${language}`}
                    className="text-black"
                  >
                    {language}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
