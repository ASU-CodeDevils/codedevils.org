import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// styles
import navbarStyles from "./../../../styles/components/page_layout/navbars/mobile.module.scss";

// icon
import { RiContactsBook2Line } from "react-icons/ri";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";

const MobileNavbar = ({ currentPagePath }) => {
  const underlineEffect = () => {
    const bar = document.getElementById(navbarStyles.bar);
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
      <div id={navbarStyles.top}>
        <Link href={"/"}>
          <Image
            id={navbarStyles.logo}
            src="/logo-dark.png"
            alt="CodeDevils Logo"
            width={180}
            height={100}
          />
        </Link>
      </div>
      <div id={navbarStyles.bottom}>
        <ul id={navbarStyles.list_wrapper}>
          <li
            className={`${
              currentPagePath == "/"
                ? navbarStyles.outline_effect
                : navbarStyles.outline
            }`}
          >
            <Link href={"/"} className={navbarStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/"
                    ? navbarStyles.item_title
                    : navbarStyles.item_title_hidden
                }`}
              >
                Home
              </div>
              <AiOutlineHome
                className={`
              ${
                currentPagePath == "/"
                  ? navbarStyles.icon_effect
                  : navbarStyles.icon
              }
              `}
              />
            </Link>
          </li>
          <li
            className={`${
              currentPagePath == "/about"
                ? navbarStyles.outline_effect
                : navbarStyles.outline
            }`}
          >
            <Link href={"/about"} className={navbarStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/about"
                    ? navbarStyles.item_title
                    : navbarStyles.item_title_hidden
                }`}
              >
                About
              </div>
              <AiOutlineInfoCircle
                className={`
              
              ${
                currentPagePath == "/about"
                  ? navbarStyles.icon_effect
                  : navbarStyles.icon
              }
              `}
              />
            </Link>
          </li>
          <li
            className={`${
              currentPagePath == "/contact"
                ? navbarStyles.outline_effect
                : navbarStyles.outline
            }`}
          >
            <Link href={"/contact"} className={navbarStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/contact"
                    ? navbarStyles.item_title
                    : navbarStyles.item_title_hidden
                }`}
              >
                Contact
              </div>
              <RiContactsBook2Line
                className={`
              
              ${
                currentPagePath == "/contact"
                  ? navbarStyles.icon_effect
                  : navbarStyles.icon
              }
              `}
              />
            </Link>
          </li>
          <li
            className={`${
              currentPagePath == "/account"
                ? navbarStyles.outline_effect
                : navbarStyles.outline
            }`}
          >
            <Link href={"/account"} className={navbarStyles.list_item}>
              <div
                className={`${
                  currentPagePath == "/account"
                    ? navbarStyles.item_title
                    : navbarStyles.item_title_hidden
                }`}
              >
                Login
              </div>
              <AiOutlineUser
                className={`
             
              ${
                currentPagePath == "/account"
                  ? navbarStyles.icon_effect
                  : navbarStyles.icon
              }
              `}
              />
            </Link>
          </li>
        </ul>
        <div id={navbarStyles.bar_wrapper}>
          <div id={navbarStyles.bar}></div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
