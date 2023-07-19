import React from "react";
import { NextPage } from "next";
import Header from "~/components/Header";

const ErrorPage: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className="bold text-[3rem]">404 Error</h1>
      <p>
        Oops! Something went wrong. Seems like this isn&#180;t the page you are
        looking for.
      </p>
    </>
  );
};

export default ErrorPage;
