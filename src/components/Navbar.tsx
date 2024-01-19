import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import CodeDevilsLogo from "./../../public/logo-large.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import Banner from "./Banner";

const Navbar: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");

  const router = useRouter();

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [router.asPath]);

  return (
    <header className="fixed top-0 z-10 w-full bg-white shadow-md">
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
              <Image src={CodeDevilsLogo} alt="CodeDevils Logo" />
            </Link>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="text-2xl text-black focus:outline-none"
              >
                {!showMobileNav ? <GiHamburgerMenu /> : <AiOutlineClose />}
              </button>
            </div>
          </div>

          <div
            className={`duration-10s00 w-full justify-between space-y-1	transition-all ease-in-out	 md:flex md:h-fit md:space-y-0 `}
          >
            <ul
              className={`${
                showMobileNav ? "flex" : "hidden md:flex"
              } m-6 flex-col items-center space-y-6 md:flex-row md:space-x-4 md:space-y-0`}
            >
              <li
                className={`text-xl text-black hover:text-maroon md:relative md:ml-[.25rem] md:mr-[.25rem] md:inline-block md:p-0  md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:border-maroon md:after:transition-transform  md:after:duration-[250ms] md:after:ease-out md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid ${
                  // styles for underlining the current page's tab
                  currentRoute === "/" &&
                  "md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid"
                }`}
              >
                <Link href="/" onClick={() => setShowMobileNav(!showMobileNav)}>
                  Home
                </Link>
              </li>

              <li
                className={`text-xl text-black hover:text-maroon md:relative md:ml-[.25rem] md:mr-[.25rem] md:inline-block md:p-0  md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:border-maroon md:after:transition-transform  md:after:duration-[250ms] md:after:ease-out md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid ${
                  // styles for underlining the current page's tab
                  currentRoute === "/about" &&
                  "md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid"
                }`}
              >
                <Link
                  href="/about"
                  onClick={() => setShowMobileNav(!showMobileNav)}
                >
                  About
                </Link>
              </li>

              <li
                className={`text-xl text-black hover:text-maroon md:relative md:ml-[.25rem] md:mr-[.25rem] md:inline-block md:p-0  md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[2px] md:after:w-full md:after:origin-bottom-right md:after:scale-x-0 md:after:border-maroon md:after:transition-transform  md:after:duration-[250ms] md:after:ease-out md:hover:after:origin-bottom-left md:hover:after:scale-x-100 md:hover:after:border-b-2 md:hover:after:border-solid ${
                  // styles for underlining the current page's tab
                  currentRoute === "/contact" &&
                  "md:after:origin-bottom-left md:after:scale-x-100 md:after:border-b-2 md:after:border-solid"
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => setShowMobileNav(!showMobileNav)}
                >
                  Contact
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
