import { NextPage } from "next";
import React from "react";

// styles
import pageStyles from "./../styles/pages/layout.module.scss";

const HomePage: NextPage = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <p id={pageStyles.description}>
        This website is currently under construction. Please come back later to
        see finished website.
      </p>
      <br />
      <br />
      <br />
    </>
  );
};

export default HomePage;
