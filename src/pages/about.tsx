import React from "react";
import { NextPage } from "next";

import pageStyles from "./../styles/pages/layout.module.scss";

const AboutPage: NextPage = () => {
  return (
    <>
      <p id={pageStyles.description}>
        This website is currently under construction. Please come back later to
        see finished website.
      </p>
    </>
  );
};

export default AboutPage;
