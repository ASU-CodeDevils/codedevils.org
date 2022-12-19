import React from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import headerStyles from "./../../styles/components/headers/_headerLayout.module.scss";

// font optimization
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const HomePageHeader = () => {
  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div
      ref={myRef}
      id={headerStyles.home_header_content}
      className={`${
        isInView ? headerStyles.header_visible : headerStyles.header_hidden
      }`}
    >
      <p>
        <strong className={poppins.className}>CodeDevils</strong> - An ASU
        Student Organization
      </p>
      <Typewriter
        options={{
          strings: ["Develop.", "Create.", "Network."],
          autoStart: true,
          delay: 50,
          cursor: "|",
          loop: true,
          // for styling the typewriter wrapper
          wrapperClassName: `${headerStyles.typewriter_wrapper}`,
          // for styling the cursor
          // NOTE: this will remove the default cursor style, which include the blinking. So make sure to add that back in.
          // cursorClassName: 'typewriter__cursor',
        }}
      />
    </div>
  );
};

export default HomePageHeader;
