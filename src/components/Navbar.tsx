import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";

import { FaLanguage } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { UserButton } from "@clerk/nextjs";
import { sign } from "crypto";
import router from "next/router";
import Banner from "./Banner";

const Navbar: React.FC = () => {
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

  const handleLogin = () => showMobileNav && setShowMobileNav(false);

  const handleScroll = () => setIsScrolling(window.scrollY > 40); // 40px === 2.5rem

  type StyleType = {
    scrollStyles?: string | undefined;
    nonScrollStyles?: string | undefined;
    customGeneralStyles?: string | undefined;
  };

  // disable scrolling when mobile nav is open, but only when in mobile view
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMobileNav]);

  return (
    // <nav
    //   className={`${showMobileNav && " h-screen flex-col bg-white"} ${
    //     isScrolling ? "bg-white md:shadow" : "md:bg-transparent"
    //   } fixed z-50 mx-auto flex	w-full w-full max-w-screen-xl justify-between px-1 md:h-fit md:flex-row md:justify-center  md:px-4 md:transition-all md:duration-1000 md:ease-in-out`}
    // >
    //   <div className="md:justify-normal flex w-full justify-end p-2 md:w-fit">
    //     <Link
    //       onClick={() => setShowMobileNav(false)}
    //       href="/"
    //       className="hidden w-fit bg-transparent pl-[1rem] md:mr-0 md:flex"
    //     >
    //       <Image
    //         src={isScrolling ? "/logo-dark.png" : "/logo-light.png"}
    //         alt="CodeDevils Logo"
    //         style={{ objectFit: "contain" }}
    //         width="300"
    //         height="120"
    //       />
    //     </Link>

    //     <button
    //       aria-label={`${
    //         !showMobileNav
    //           ? "Open mobile navigation"
    //           : "Close mobile navigation"
    //       }`}
    //       className={` border-solid p-[.6rem] text-xl  transition-all duration-500 ease-in-out md:hidden ${
    //         showMobileNav
    //           ? "text-black"
    //           : `${isScrolling ? "text-maroon" : "text-white"}`
    //       }`}
    //       onClick={() => setShowMobileNav(!showMobileNav)}
    //     >
    //       {!showMobileNav ? <GiHamburgerMenu /> : <AiOutlineClose />}
    //     </button>
    //   </div>

    //   <ul
    //     className={`${
    //       showMobileNav ? "flex" : "hidden md:flex"
    //     } flex-col justify-center md:my-auto md:mx-8 md:h-fit md:min-w-fit md:flex-row md:flex-nowrap md:items-center md:justify-between`}
    //   >
    //     {[
    //       ["Home", "/"],
    //       ["About", "/about"],
    //       ["Contact", "/contact"],
    //     ].map(([title, url], key) => (
    //       <li
    //         key={key}
    //         className={`md:relative md:mr-[.25rem] md:ml-[.25rem] md:inline-block md:p-0 md:text-lg md:font-normal md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:transition-transform md:after:duration-[250ms] md:after:ease-out  md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid
    //             ${
    //               isScrolling
    //                 ? "md:hover:after:border-maroon"
    //                 : "md:hover:after:border-white"
    //             } ${
    //           // styles for underlining the current page's tab
    //           typeof window !== "undefined" &&
    //           window?.location?.pathname === url &&
    //           `md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid  ${
    //             isScrolling ? "md:after:border-maroon" : "md:after:border-white"
    //           }`
    //         }`}
    //       >
    //         <Link
    //           onClick={() => setShowMobileNav(false)}
    //           href={url as string}
    //           className={`${
    //             isScrolling
    //               ? " dark:text-black md:text-gray-100 md:hover:text-maroon"
    //               : " text-black md:text-white md:hover:text-gray-400"
    //           } flex w-full items-center justify-start py-2 px-6 text-center md:rounded-lg md:py-2 md:font-medium`}
    //         >
    //           {title}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>

    //   {isSignedIn ? (
    //     <div
    //       className={`${
    //         !showMobileNav && "hidden"
    //       } ml-6 w-full justify-start md:relative md:bottom-0 md:m-4 md:flex md:justify-end`}
    //     >
    //       <UserButton
    //         afterSignOutUrl="/"
    //         appearance={{
    //           elements: { userButtonBox: "" },
    //         }}
    //       />
    //     </div>
    //   ) : (
    //     <ul
    //       className={`w-full items-center px-6 uppercase md:justify-end md:px-0 ${
    //         showMobileNav ? "flex text-black" : " hidden md:flex"
    //       }`}
    //     >
    //       <li
    //         className={`mx-1 rounded-full border ${
    //           isScrolling
    //             ? "border-maroon text-maroon"
    //             : "border-white text-white"
    //         } ${showMobileNav && "hidden"}`}
    //       >
    //         <Link
    //           href={"/register"}
    //           onClick={handleLogin}
    //           className="text-xs flex items-center py-2 px-4"
    //         >
    //           <HiUserAdd className="mr-2" />
    //           Register
    //         </Link>
    //       </li>
    //       <li
    //         className={`mx-1 rounded-full bg-white px-0 md:border${
    //           isScrolling
    //             ? "border-maroon md:bg-maroon md:text-white"
    //             : "border-white"
    //         }`}
    //       >
    //         <Link
    //           href={"/login"}
    //           onClick={handleLogin}
    //           className="text-xs flex items-center py-2 md:px-4"
    //         >
    //           <FiLogIn className="mr-2 hidden md:flex" />
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //   )}
    // </nav>

    // <nav className="fxied top-0 z-40 w-screen bg-white">
    //   <div className="z-50 mx-auto mx-2 flex max-w-screen-xl items-center justify-between py-4">
    //     <Link onClick={() => setShowMobileNav(false)} href="/" className="">
    //       <Image
    //         src={isScrolling ? "/logo-dark.png" : "/logo-light.png"}
    //         alt="CodeDevils Logo"
    //         // style={{ objectFit: "contain" }}
    //         width={"150"}
    //         height={"127"}
    //         // layout="responsive"
    //         // fill="responsive"
    //         // className={"image"}
    //       />
    //     </Link>

    //     <button
    //       className="text-xl text-maroon md:hidden"
    //       onClick={() => setShowMobileNav(!showMobileNav)}
    //     >
    //       {!showMobileNav ? <GiHamburgerMenu /> : <AiOutlineClose />}
    //     </button>
    //   </div>

    //   {showMobileNav && (
    //     <ul>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Officer</li>
    //     </ul>
    //   )}
    // </nav>

    <header className="fixed top-0 z-40 w-full bg-white shadow-md">
      <Banner />
      <nav className={` mx-auto mx-auto max-w-screen-2xl px-6 py-3`}>
        <div
          className={` flex flex-col items-center justify-between md:flex-row`}
        >
          <div className="flex w-full justify-between md:w-fit">
            <Link
              onClick={() => setShowMobileNav(false)}
              href="/"
              className="w-fit bg-transparent  "
            >
              <Image
                src={"/logo-dark.png"}
                alt="CodeDevils Logo"
                width={"150"}
                height={"127"}
              />
            </Link>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`duration-10s00 w-full justify-between space-y-1	transition-all ease-in-out	 md:flex md:h-fit md:space-y-0 `}
          >
            <div
              className={`${
                showMobileNav ? "flex" : "hidden md:flex"
              } mx-4 flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-4`}
            >
              <Link
                href="/"
                className={`text-black hover:text-maroon md:relative md:mr-[.25rem] md:ml-[.25rem] md:inline-block md:p-0 md:text-lg md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:border-maroon md:after:transition-transform  md:after:duration-[250ms] md:after:ease-out md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid ${
                  // styles for underlining the current page's tab
                  typeof window !== "undefined" &&
                  window?.location?.pathname === "/" &&
                  `md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid  `
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-black hover:text-maroon md:relative md:mr-[.25rem] md:ml-[.25rem] md:inline-block md:p-0 md:text-lg md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:border-maroon md:after:transition-transform  md:after:duration-[250ms] md:after:ease-out md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid ${
                  // styles for underlining the current page's tab
                  typeof window !== "undefined" &&
                  window?.location?.pathname === "/about" &&
                  `md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid  `
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-black hover:text-maroon md:relative md:mr-[.25rem] md:ml-[.25rem] md:inline-block md:p-0 md:text-lg md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:border-maroon md:after:transition-transform  md:after:duration-[250ms] md:after:ease-out md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid ${
                  // styles for underlining the current page's tab
                  typeof window !== "undefined" &&
                  window?.location?.pathname === "/contact" &&
                  `md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid  `
                }`}
              >
                Contact
              </Link>
            </div>
            <ul
              className={`${
                showMobileNav ? "flex" : "hidden md:flex"
              } flex-col md:flex-row`}
            >
              <li className="hidden md:flex">
                <Link
                  href={"/register"}
                  onClick={handleLogin}
                  className="flex items-center justify-center	 rounded-full border border-solid border-maroon bg-white py-2 text-maroon transition-colors duration-300 hover:border-white hover:bg-maroon hover:text-white md:px-4"
                >
                  <HiUserAdd className="mr-2 hidden md:flex" />
                  Register
                </Link>
              </li>
              <li
                className={`mx-1 rounded-full border-maroon bg-white px-0 transition-colors duration-300 hover:bg-black hover:shadow-lg md:border md:bg-maroon md:text-white`}
              >
                <Link
                  href={"/login"}
                  onClick={handleLogin}
                  className="flex items-center justify-center md:py-2 md:px-4"
                >
                  <FiLogIn className="mr-2 hidden md:flex" />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
