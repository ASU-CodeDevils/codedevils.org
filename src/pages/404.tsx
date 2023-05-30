import { NextPage } from "next";
import React from "react";

// styles
import pageStyles from "./../styles/pages/layout.module.scss";

const ErrorPage: NextPage = () => {
  return (
    <>
      <h1 id={pageStyles.title}>404 Error</h1>
      <p id={pageStyles.description}>
        Oops! Something went wrong. Seems like this isn&#180;t the page you are
        looking for.
      </p>
    </>
  );
};

export default ErrorPage;
