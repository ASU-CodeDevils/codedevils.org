import React from "react";
import { NextPage } from "next";

import { useUser } from "@clerk/nextjs";

import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import Divider from "~/components/Divider";

const HomePage: NextPage = () => {
  const { user } = useUser();

  console.log(user);

  const { ref: headerRef, inView: isInView } = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <header className="bg-hero w-screen bg-cover pt-20 text-white">
        <div
          ref={headerRef}
          className={`${
            isInView
              ? "translate-x-0	opacity-100 blur-0"
              : "-translate-x-full opacity-0 blur"
          } flex w-screen flex-col flex-wrap justify-start pt-4 pl-10 text-left text-[2.5rem] transition-all duration-1000 md:w-7/12 md:text-[3rem]`}
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
        <Divider />
      </header>

      <p className="flex items-center justify-center">
        This website is currently under construction. Please come back later to
        see finished website.
      </p>
    </>
  );
};

export default HomePage;
