import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { useInView } from 'react-intersection-observer';
// icons
import { FaLanguage } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

// styles
import navbarStyles from "./../../../styles/components/page_layout/navbars/desktop.module.scss";

//** Desktop Navbar component */
const DesktopNavbar = () => {
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);

  useEffect(() => {
    // Add a listener to the window scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    // Check the value of window.scrollY to determine if the user has scrolled the page
    if (window.scrollY > 60) {
      console.log("The user has scrolled the page by at least 90 pixels");
      setIsUserScrolling(true);
    } else {
      setIsUserScrolling(false);
    }
  }

  const showDropdown = () => {
    setIsDropdownShowing(true);
  };
  const hideDropdown = () => {
    setIsDropdownShowing(false);
  };

  return (
    <nav
      id={`${
        isUserScrolling
          ? navbarStyles.navbar_scrolled
          : navbarStyles.navbar_nonScrolled
      }`}
      className={navbarStyles.navbar_wrapper}
    >
      <Link href="/">
        <Image
          id={navbarStyles.logo}
          src={isUserScrolling ? "/logo-dark.png" : "/logo-light.png"}
          alt="CodeDevils Logo"
          width="180"
          height="100"
        />
      </Link>
      <ul id={navbarStyles.link_wrapper}>
        <li
          id={`${
            isUserScrolling
              ? navbarStyles.scrolledLinkItemStyles
              : navbarStyles.linkItemStyles
          }`}
        >
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li
          id={`${
            isUserScrolling
              ? navbarStyles.scrolledLinkItemStyles
              : navbarStyles.linkItemStyles
          }`}
        >
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li
          id={`${
            isUserScrolling
              ? navbarStyles.scrolledLinkItemStyles
              : navbarStyles.linkItemStyles
          }`}
        >
          <Link href="/contact">
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
      <div id={navbarStyles.navbar_button_wrapper}>
        <Link
          href="/accounts/signup"
          id={`${
            isUserScrolling
              ? navbarStyles.registerScrollStyle
              : navbarStyles.registerStyle
          }`}
          className={`${navbarStyles.button}`}
        >
          <HiUserAdd />
          <span>Register</span>
        </Link>

        <Link
          href="/accounts/login"
          id={`${
            isUserScrolling
              ? navbarStyles.loginScrollStyle
              : navbarStyles.loginStyle
          }`}
          className={`${navbarStyles.button}`}
        >
          <FiLogIn />
          <span>Login</span>
        </Link>
      </div>
      <div
        id={navbarStyles.dropdown}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <button
          className={navbarStyles.languageButton}
          id={`${
            isUserScrolling
              ? navbarStyles.langBtnScrollStyles
              : navbarStyles.langBtnStyles
          }`}
        >
          <FaLanguage />
        </button>
        {isDropdownShowing ? (
          <ul id={navbarStyles.dropdown_content}>
            <li>
              <button>Española</button>
            </li>
            <li>
              <button>English</button>
            </li>
            <li>
              <button>Française</button>
            </li>
            <li>
              <button>عربى</button>
            </li>
            <li>
              <button>Nederlands</button>
            </li>
            <li>
              <button>Deutsche</button>
            </li>
            <li>
              <button>日本語</button>
            </li>
            <li>
              <button>हिन्दी</button>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default DesktopNavbar;
