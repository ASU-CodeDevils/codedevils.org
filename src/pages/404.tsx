import { NextPage } from "next";
import React from "react";

const ErrorPage: NextPage = () => {
  return (
    <main className="mt-5 flex w-full flex-1 flex-col items-center justify-center px-20">
      <h1 className="text-xl font-bold">Error</h1>
      <p className="text-2xl mt-3">
        Oops! Something went wrong. Seems like this pages isn&#180;t made yet 😉
      </p>
    </main>
  );
};

export default ErrorPage;
