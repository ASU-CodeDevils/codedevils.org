import React from "react";
import { useRouter } from "next/router";

import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

// wave divider
import Divider from "./Divider";

// font optimization
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const NonHomeHeader = ({ url, title, description, key }) => {
  const { asPath } = useRouter();

  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: false,
    // threshold: 0,
  });
  return (
    <div
      key={key}
      ref={myRef}
      className={`${
        asPath === url
          ? "flex flex-col"
          : {
              // hid the header, then show it again
            }
      } ${
        isInView
          ? "translate-x-0	opacity-100 blur-0"
          : "-translate-x-full opacity-0 blur"
      } w-11/12 px-8 pt-0 pb-10 text-white transition-all duration-500 md:w-6/12`}
    >
      <h1 className="text-[3.5rem] font-light">{title}</h1>
      <p className="text-[1rem] font-light md:text-[1.25rem]">{description}</p>
    </div>
  );
};

const Header = () => {
  const { asPath } = useRouter();

  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: false,
  });

  return (
    <header className="bg-hero h-fit w-screen bg-cover pt-[120px] text-white">
      {asPath === "/" ? (
        <div
          ref={myRef}
          className={`${
            isInView
              ? "translate-x-0	opacity-100 blur-0"
              : "-translate-x-full opacity-0 blur"
          } items-left flex w-8/12 flex-col flex-wrap justify-start px-4 pb-12 text-[3.5rem] font-light transition-all duration-1000`}
        >
          <p className="font-light">
            <strong className={`${poppins.className} font-extrabold`}>
              CodeDevils
            </strong>{" "}
            - An ASU Student Organization
          </p>
          <Typewriter
            options={{
              strings: ["Develop.", "Create.", "Network."],
              autoStart: true,
              delay: 50,
              cursor: "|",
              loop: true,
              // for styling the typewriter wrapper
              wrapperClassName: "font-extrabold",
              // for styling the cursor
              // NOTE: this will remove the default cursor style, which include the blinking. So make sure to add that back in.
              // cursorClassName: 'typewriter__cursor',
            }}
          />
        </div>
      ) : (
        <>
          {[
            [
              "/about",
              "About",
              "CodeDevils aims to provide ASU students with an organization designed to encourage and promote involvement in coding projects and competitions through an exclusively online setting.",
            ],
            [
              "/contact",
              "Contact Us",
              "Get in touch and let us know how we can help you with your coding needs. Fill out the form and we'll be in touch as soon as possible.",
            ],
          ].map(
            ([url, title, description], key) =>
              asPath === url && (
                <NonHomeHeader
                  url={url}
                  title={title}
                  description={description}
                  key={key}
                />
              )
          )}
          <Divider />
        </>
      )}

      {/* {asPath !== "/" && <Divider />} */}
    </header>
  );
};

export default Header;
