import React from "react";
import Typewriter from "typewriter-effect";

import headerStyles from "./../styles/components/header.module.scss";


const Header = () => {
  return (
    <div id={headerStyles.header_wrapper}>
      
      <div id={headerStyles.header_content}>
        {/* <div id={headerStyles.}> */}
        CodeDevils - An ASU Student Organization
      <Typewriter 
        options={{
          strings: ["Develop.", "Create.", "Network."],
          autoStart: true,
          delay: 50,
          cursor: "|",
          loop: true,
          // for styling the typewriter wrapper
          wrapperClassName: "typewriter_wrapper",
          // for styling the cursor
          // NOTE: this will remove the default cursor style, which include the blinking. So make sure to add that back in.
          // cursorClassName: 'typewriter__cursor',
        }}
      />
      
      {/* </div> */}
      
      </div>
    </div>
  );
};

export default Header;
