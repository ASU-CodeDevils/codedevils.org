import React from "react";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <main className="mt-5 flex w-full flex-1 flex-col items-center justify-center px-20">
      <h1 className="text-xl font-bold">About</h1>
      <p className="text-2xl mt-3">
        CodeDevils is an inclusive virtual club that aims to bring ASU students
        together.
      </p>
    </main>
  );
};

export default AboutPage;
