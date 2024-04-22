"use client";
import React, { useState, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";

import CodeDevilsLogo from "./../public/logo.svg";

import Banner from "./banner";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="z-50 w-full bg-white shadow-md">
      <Banner />
      <nav
        className={`mx-auto max-w-screen-2xl px-6 md:px-8`}
        onMouseLeave={() => setActive(null)}
      >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex w-full gap-4 md:w-fit">
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="text-2xl text-black focus:outline-none"
              >
                <IconMenu2 size={32} />
                <p className="sr-only">Open Mobile Navigation</p>
              </button>
            </div>
            <Link
              onClick={() => setShowMobileNav(false)}
              href="/"
              className="w-fit bg-transparent "
            >
              <Image
                src={CodeDevilsLogo}
                alt="CodeDevils Logo"
                height={200}
                width={200}
              />
            </Link>
          </div>

          {/* Menu */}
          <div
            className={`${
              showMobileNav ? "flex" : "hidden md:block"
            } md:boder shadow-input fixed left-0 top-0 z-50 flex h-full w-11/12 flex-col border-transparent bg-white  md:static md:w-fit md:flex-row md:justify-end md:space-x-4 md:rounded-full
            `}
          >
            <div className="flex items-center justify-between md:hidden">
              <Link
                onClick={() => setShowMobileNav(false)}
                href="/"
                className="w-fit bg-transparent "
              >
                <Image
                  src={CodeDevilsLogo}
                  alt="CodeDevils Logo"
                  height={200}
                  width={200}
                />
              </Link>
              <IconX
                size={32}
                className="mx-4"
                onClick={() => setShowMobileNav(!showMobileNav)}
              />
            </div>

            <Menu>
              <Dropdown setActive={setActive} active={active} item="Members">
                <div className="flex flex-col space-y-4 text-sm">
                  <DropdownItem
                    href="https://docs.codedevils.club"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                  >
                    Documentation
                  </DropdownItem>
                  <DropdownItem
                    href="/get-started"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                  >
                    Getting Started
                  </DropdownItem>
                  <DropdownItem
                    href="/projects"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                  >
                    Projects
                  </DropdownItem>
                </div>
              </Dropdown>

              <MenuItem
                href="/support"
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                Support
              </MenuItem>

              <Dropdown
                setActive={setActive}
                active={active}
                item="Organization"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <DropdownItem
                    href="/about"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                  >
                    About us
                  </DropdownItem>
                  <DropdownItem
                    href="https://forms.gle/hkqP2ZMuDrppxNsr8"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                  >
                    Newsletter
                  </DropdownItem>
                  <DropdownItem
                    href="/careers"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                  >
                    Careers
                  </DropdownItem>
                </div>
              </Dropdown>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 md:h-24 md:flex-row md:items-center md:justify-end">
      {children}
    </div>
  );
};

export const MenuItem = ({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick: () => void;
}) => {
  return (
    <div className="relative" onClick={onClick}>
      <Link
        href={href}
        className="flex items-center bg-gray px-4 py-6 text-black hover:underline md:bg-white md:p-0"
      >
        {children}
      </Link>
    </div>
  );
};

export const Dropdown = ({
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: ReactNode;
}) => {
  const [show, setShow] = useState<string | null>(null); // show is used to help determine which dropdown is open, as it'll be set to a string to which dropdown is open

  return (
    <div
      onMouseEnter={() => setShow(item)}
      onMouseLeave={() => setShow(null)}
      className="h-full items-center border border-y-4 border-gray md:relative md:z-50 md:flex md:border-none"
      id={item}
    >
      <button
        className="flex w-full items-center justify-between gap-4 bg-gray px-4 py-6 md:justify-start md:gap-2 md:bg-white md:p-0 "
        onClick={() => {
          setShow(item === show ? null : item);
        }}
        onMouseEnter={() => setShow(item)}
      >
        <p className="text-black">{item}</p>
        <IconChevronDown
          className={`transform ${
            show ? "rotate-180" : "rotate-0"
          } mx-4 transition-transform duration-200 md:mx-0`}
        />
      </button>
      {show !== null && (
        <div>
          {" "}
          {show === item && (
            <div
              className={`md:absolute md:left-1/2 md:top-[calc(100%_+_0rem)] md:-translate-x-1/2 md:transform ${
                show ? "block" : "hidden"
              }
            `}
            >
              <div className="overflow-hidden border-black/[0.2] bg-white backdrop-blur-sm md:rounded-2xl md:border md:shadow-xl">
                <div className="h-full space-y-4 md:w-max md:px-8 md:py-4">
                  {children}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const DropdownItem = ({
  children,
  ...rest
}: {
  children: ReactNode;
  href: string;
  onClick: () => void;
  target?: string;
  rel?: string;
}) => {
  return (
    <Link
      {...rest}
      className=" w-full px-4 py-2 text-black hover:underline md:px-0"
    >
      {children}
    </Link>
  );
};

export default Navbar;
