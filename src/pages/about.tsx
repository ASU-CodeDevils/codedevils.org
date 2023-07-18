import React from "react";
import { NextPage } from "next";
import Header from "~/components/Header";

const AboutPage: NextPage = () => {
  return (
    <>
      <Header
        title="About Us"
        description="CodeDevils aims to provide ASU students with an organization designed to encourage and promote involvement in coding projects and competitions through an exclusively online setting."
      />
      <p>
        This website is currently under construction. Please come back later to
        see finished website.
      </p>
    </>
  );
};

export default AboutPage;
