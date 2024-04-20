import React from "react";
import Link from "next/link";
import Image from "next/image";

import { socialLinks } from "~/utils/staticdata";

import { AiOutlineInstagram, AiOutlineLink } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { instagram, discord, github, linkedin, sundevilsync } = socialLinks;
  return (
    <footer className="mx-auto mt-auto w-full max-w-screen-2xl bg-white">
      <div className="flex flex-col gap-8  pt-12">
        <div className="flex flex-col justify-between gap-x-2 gap-y-8 px-8 md:flex-row">
          <div className="flex flex-col md:gap-2">
            <Link href="/" className="w-fit">
              <Image
                src={"/logo.svg"}
                alt="CodeDevils logo"
                width={150}
                height={150}
                className=""
              />
            </Link>
            <p className="text-sm">
              CodeDevils is a student organization at Arizona State University
              that aims to bring software development enthusiasts of all levels
              to learn, build, and network together.
            </p>
          </div>

          <div className="grid w-fit grid-cols-2 gap-x-8 gap-y-6 text-sm sm:grid-cols-3">
            <div>
              <h2 className="mb-6 font-semibold uppercase ">Members</h2>
              <ul className="font-medium">
                {[
                  ["Documentation", "https://docs.codedevils.org"],
                  ["Get Started", "/get-started"],
                  ["Projects", "/projects"],
                ].map(([title, url], key) => (
                  <li key={key} className="mb-4">
                    <Link
                      aria-label={`Learn more about CodeDevils by heading to ${title}`}
                      href={url as string}
                      className="hover:text-maroon hover:underline"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold uppercase">Organization</h2>
              <ul className="font-medium ">
                <li className="mb-4">
                  <Link
                    aria-label={`Learn more about CodeDevils by heading to our about page`}
                    href={"/about"}
                    className="hover:text-maroon hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://forms.gle/hkqP2ZMuDrppxNsr8"}
                    className="hover:text-maroon hover:underline"
                  >
                    Newsletter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    aria-label={`Learn more about CodeDevils by heading to our careers page`}
                    href={"/careers"}
                    className="hover:text-maroon hover:underline"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className=" mb-6 font-semibold uppercase">Resources</h2>
              <ul className="font-medium ">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://codedevils.notion.site/CodeDevils-Constitution-79dd330604ca416cb17378ca429891f3?pvs=4"
                    }
                    className="hover:text-maroon hover:underline"
                  >
                    Constitution
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://codedevils.notion.site/Welcome-Docs-d786e78b46a6418a8748c8ca579ea717?pvs=4"
                    }
                    className="hover:text-maroon hover:underline"
                  >
                    Welcome Docs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col items-start justify-between gap-y-2 bg-gray px-8 py-12 md:flex-row md:items-center md:gap-y-0">
          <ul className="mx-auto flex flex-wrap justify-center text-center text-sm md:mx-0 md:flex-row md:flex-nowrap  md:text-left md:text-xs">
            <li className="">
              <span className=" text-black">
                © 2024 CodeDevils - Arizona State University. All Rights
                Reserved.
              </span>
            </li>

            {/* <ul className="w-ful mb-4 flex justify-center"> */}
            <li className="">
              <span className="mx-1 hidden md:inline-block">|</span>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href={
                  "https://codedevils.notion.site/CodeDevils-Privacy-Policy-bc0544f3eebe42fc9d60d39f8d731834?pvs=4"
                }
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <span className="mx-1">|</span>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href={
                  "https://codedevils.notion.site/Terms-Conditions-59c663cb99e9471a8e0fae12cbb09008?pvs=4"
                }
              >
                Terms & Conditions
              </Link>
            </li>
            {/* </ul> */}
          </ul>
          <ul className="flex w-full justify-center space-x-5 md:w-fit md:justify-end">
            <li>
              <Link
                className="text-black transition-colors duration-200 ease-in-out hover:text-maroon"
                target="_blank"
                href={instagram}
              >
                <span className="h-4 w-4">
                  <AiOutlineInstagram />
                </span>
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition-colors duration-200 ease-in-out hover:text-maroon"
                target="_blank"
                href={discord}
              >
                <span className="h-4 w-4">
                  <FaDiscord />
                </span>
                <span className="sr-only">Discord</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition-colors duration-200 ease-in-out hover:text-maroon"
                target="_blank"
                href={sundevilsync}
              >
                <span className="h-4 w-4">
                  <AiOutlineLink />
                </span>
                <span className="sr-only">SunDevilSync</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition-colors duration-200 ease-in-out hover:text-maroon"
                target="_blank"
                href={github}
              >
                <span className="h-4 w-4">
                  <FaGithub />
                </span>
                <span className="sr-only">Github</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition-colors duration-200 ease-in-out hover:text-maroon"
                target="_blank"
                href={linkedin}
              >
                <span className="h-4 w-4">
                  <FaLinkedin />
                </span>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
