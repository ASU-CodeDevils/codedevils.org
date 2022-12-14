import React from "react";
import Typewriter from "typewriter-effect";

const HomeHeader = () => {
  return (
    <div>
      CodeDevils - An ASU Student Organization{" "}
      <Typewriter
        options={{
          strings: ["Devlope", "Create", "Network"],
          autoStart: true,
          delay: 50,
          cursor: "|",
          loop: true,
          // for styling the typewriter wrapper
          wrapperClassName: "typewriter__wrapper",
          // for styling the cursor
          // NOTE: this will remove the default cursor style, which include the blinking. So make sure to add that back in.
          // cursorClassName: 'typewriter__cursor',
        }}
      />
    </div>
  );
};

export default HomeHeader;
