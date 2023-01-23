import React, { useState, useEffect, useContext, useReducer } from "react";
import Link from "next/link";
import Image from "next/image";

// context
import { AppContext } from "../../contexts/AppContext";

// app reducer
import { appReducer } from "../../reducers/appReducer";

// styles
import desktopStyles from "./../../styles/components/page_layout/navbars/desktop.module.scss";
import mobileStyles from "./../../styles/components/page_layout/navbars/mobile.module.scss";

// desktop nav icons
import { FaLanguage } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
// mobile nav icons
import { RiContactsBook2Line } from "react-icons/ri";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";

const DesktopNavbar = ({ currentPagePath }) => {
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const [state, dispatch] = useReducer(appReducer, {});

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

  const changeLanguage = (language) => {
    dispatch({ type: "SET_LANGUAGE", payload: language });
  };

  return (
    <nav
      id={`${
        isUserScrolling
          ? desktopStyles.navbar_scrolled
          : desktopStyles.navbar_nonScrolled
      }`}
      className={desktopStyles.navbar_wrapper}
    >
      <Link href="/">
        <Image
          id={desktopStyles.logo}
          src={isUserScrolling ? "/logo-dark.png" : "/logo-light.png"}
          alt="CodeDevils Logo"
          width="180"
          height="100"
        />
      </Link>
      <ul id={desktopStyles.link_wrapper}>
        <li
          className={`
          ${desktopStyles.linkItem}
          ${
            isUserScrolling
              ? currentPagePath === "/"
                ? desktopStyles.active_scrolled
                : desktopStyles.inactive_scrolled
              : currentPagePath === "/"
              ? desktopStyles.active_notScrolled
              : desktopStyles.inactive_notScrolled
          }`}
          id={`${
            isUserScrolling
              ? desktopStyles.scrolledLinkItemStyles
              : desktopStyles.notScrolledLinkItemStyles
          }`}
        >
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li
          className={`
          ${desktopStyles.linkItem}
          ${
            isUserScrolling
              ? currentPagePath === "/about"
                ? desktopStyles.active_scrolled
                : desktopStyles.inactive_scrolled
              : currentPagePath === "/about"
              ? desktopStyles.active_notScrolled
              : desktopStyles.inactive_notScrolled
          }`}
          id={`${
            isUserScrolling
              ? desktopStyles.scrolledLinkItemStyles
              : desktopStyles.notScrolledLinkItemStyles
          }`}
        >
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li
          className={`
          ${desktopStyles.linkItem}
          ${
            isUserScrolling
              ? currentPagePath === "/contact"
                ? desktopStyles.active_scrolled
                : desktopStyles.inactive_scrolled
              : currentPagePath === "/contact"
              ? desktopStyles.active_notScrolled
              : desktopStyles.inactive_notScrolled
          }`}
          id={`${
            isUserScrolling
              ? desktopStyles.scrolledLinkItemStyles
              : desktopStyles.notScrolledLinkItemStyles
          }`}
        >
          <Link href="/contact">
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
      <div id={desktopStyles.navbar_button_wrapper}>
        <Link
          href="/accounts/signup"
          id={`${
            isUserScrolling
              ? desktopStyles.registerScrollStyle
              : desktopStyles.registerStyle
          }`}
          className={`${desktopStyles.button}`}
        >
          <HiUserAdd />
          <span>Register</span>
        </Link>

        <Link
          href="/accounts/login"
          id={`${
            isUserScrolling
              ? desktopStyles.loginScrollStyle
              : desktopStyles.loginStyle
          }`}
          className={`${desktopStyles.button}`}
        >
          <FiLogIn />
          <span>Login</span>
        </Link>
      </div>
      <div
        id={desktopStyles.dropdown}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <button
          className={desktopStyles.languageButton}
          id={`${
            isUserScrolling
              ? desktopStyles.langBtnScrollStyles
              : desktopStyles.langBtnStyles
          }`}
        >
          <FaLanguage />
        </button>
        {/* The only reason why I'm using */}
        {isDropdownShowing ? (
          <ul
            id={desktopStyles.dropdown_content}
            className={`${desktopStyles.dropdown_content_show}`}
          >
            <li>
              <button onClick={() => changeLanguage("es")}>Española</button>
            </li>
            <li>
              <button onClick={() => changeLanguage("en")}>English</button>
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
        ) : (
          <ul className={`${desktopStyles.dropdown_content_hide}`}></ul>
        )}
      </div>
    </nav>
  );
};

const MobileNavbar = ({ currentPagePath }) => {
  const underlineEffect = () => {
    const bar = document.getElementById(mobileStyles.bar);
    if (bar) {
      switch (currentPagePath) {
        case "/":
          bar.style.marginLeft = "0%";
          break;
        case "/about":
          bar.style.marginLeft = "25%";
          break;
        case "/contact":
          bar.style.marginLeft = "50%";
          break;
        case "/account":
          bar.style.marginLeft = "75%";
          break;
      }
    }
  };

  useEffect(() => {
    underlineEffect();
  }, [currentPagePath]);

  return (
    <nav>
      <div id={mobileStyles.top}>
        <Link href={"/"}>
          <Image
            id={mobileStyles.logo}
            src="/logo-dark.png"
            alt="CodeDevils Logo"
            width={180}
            height={100}
          />
        </Link>
      </div>
      <div id={mobileStyles.bottom}>
        <ul id={mobileStyles.list_wrapper}>
          <li
            className={`${
              currentPagePath == "/"
                ? mobileStyles.outline_effect
                : mobileStyles.outline
            }`}
          >
            <Link href={"/"} className={mobileStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/"
                    ? mobileStyles.item_title
                    : mobileStyles.item_title_hidden
                }`}
              >
                Home
              </div>
              <AiOutlineHome
                className={`
              ${
                currentPagePath == "/"
                  ? mobileStyles.icon_effect
                  : mobileStyles.icon
              }
              `}
              />
            </Link>
          </li>
          <li
            className={`${
              currentPagePath == "/about"
                ? mobileStyles.outline_effect
                : mobileStyles.outline
            }`}
          >
            <Link href={"/about"} className={mobileStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/about"
                    ? mobileStyles.item_title
                    : mobileStyles.item_title_hidden
                }`}
              >
                About
              </div>
              <AiOutlineInfoCircle
                className={`
              
              ${
                currentPagePath == "/about"
                  ? mobileStyles.icon_effect
                  : mobileStyles.icon
              }
              `}
              />
            </Link>
          </li>
          <li
            className={`${
              currentPagePath == "/contact"
                ? mobileStyles.outline_effect
                : mobileStyles.outline
            }`}
          >
            <Link href={"/contact"} className={mobileStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/contact"
                    ? mobileStyles.item_title
                    : mobileStyles.item_title_hidden
                }`}
              >
                Contact
              </div>
              <RiContactsBook2Line
                className={`
              
              ${
                currentPagePath == "/contact"
                  ? mobileStyles.icon_effect
                  : mobileStyles.icon
              }
              `}
              />
            </Link>
          </li>
          <li
            className={`${
              currentPagePath == "/account"
                ? mobileStyles.outline_effect
                : mobileStyles.outline
            }`}
          >
            <Link href={"/account"} className={mobileStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/account"
                    ? mobileStyles.item_title
                    : mobileStyles.item_title_hidden
                }`}
              >
                Login
              </div>
              <AiOutlineUser
                className={`
             
              ${
                currentPagePath == "/account"
                  ? mobileStyles.icon_effect
                  : mobileStyles.icon
              }
              `}
              />
            </Link>
          </li>
        </ul>
        <div id={mobileStyles.bar_wrapper}>
          <div id={mobileStyles.bar}></div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = ({ currentPagePath }) => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;

  return (
    <>
      {isMobile ? (
        <MobileNavbar currentPagePath={currentPagePath} />
      ) : (
        <DesktopNavbar currentPagePath={currentPagePath} />
      )}
    </>
  );
};

export default Navbar;
