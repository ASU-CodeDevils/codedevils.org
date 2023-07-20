import React from "react";
import { NextPage } from "next";

import { useUser } from "@clerk/nextjs";

import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const HomePage: NextPage = () => {
  const { user } = useUser();

  console.log(user);

  const { ref: headerRef, inView: isInView } = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <header className="relative z-0 flex h-fit w-screen flex-col text-white">
        <Image
          src="/bg/headerImage.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100vw",
            height: `${"412px"}`,
            zIndex: "0",
          }} // optional
          alt="CodeDevils code grid header background"
        />
        <div
          ref={headerRef}
          className={`pt-[6rem] ${
            isInView
              ? "translate-x-0	opacity-100 blur-0"
              : "-translate-x-full opacity-0 blur"
          } absolute flex w-screen flex-col flex-nowrap justify-start px-4 text-left text-[2.5rem] transition-all duration-1000 md:w-7/12 md:pl-10 md:text-[3rem]`}
        >
          <h1 className="">CodeDevils - An ASU Student Organization</h1>
          <Typewriter
            options={{
              strings: ["Develop.", "Create.", "Network."],
              autoStart: true,
              delay: 50,
              cursor: "|",
              loop: true,
              // for styling the typewriter wrapper
              wrapperClassName: "",
              // for styling the cursor
              // NOTE: this will remove the default cursor style, which include the blinking. So make sure to add that back in.
              // cursorClassName: "typewriter__cursor",
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full rotate-180 transform overflow-hidden leading-none">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[103px] w-[calc(154%+1.3px)] rotate-0"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </header>

      <p className="flex items-center justify-center">
        This website is currently under construction. Please come back later to
        see finished website.
      </p>
    </>
  );
};

export default HomePage;
