import React from "react";
import Typewriter from "typewriter-effect";

import headerStyles from "./../../styles/components/headers/home.module.scss";

const HomePageHeader = () => {
  return (
    <div id={headerStyles.header_content}>
      <h1>
        <strong>CodeDevils</strong> - An ASU Student Organization
      </h1>
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
