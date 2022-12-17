import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// import Header from "../headers/home";
import PageHedaer from "../headers/_headerLayout";
import Navbar from "./navbars/_navbarLayout";
// import Footer from './footer'

// styles
import layoutStyles from "./../../styles/components/page_layout/_pageLayout.module.scss";
import React from "react";
import Divider from "./pageDivider";

export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(true);
  const [showWave, setShowWave] = useState(false);
  const { asPath } = useRouter();
  // console.log(asPath);

  useEffect(() => {
    if (asPath == "/accounts/login" || asPath == "/accounts/signup") {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
    // showWave
    if (asPath != "/") {
      setShowWave(true);
    } else {
      setShowWave(false);
    }
  }, [asPath]);

  return (
    <div id={layoutStyles.page_layout}>
      <Head>
        <title>CodeDevils - Develop. Network. Create.</title>
        <meta
          name="description"
          content="CodeDevils is an inclusive virtual club that aims to bring ASU students together."
        />
        <meta name="author" content="" />{" "}
        {/* TODO: add all the developers that worked on the website at the end */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.png" />{" "}
        {/* TODO: Add website favicon */}
      </Head>
      {/* <div id={layoutStyles.bg_img}> */}

      {navbar && <Navbar />}
      {/* <Header /> */}
      <PageHedaer />
      {/* {
          showWave && <WavesDivider />
        } */}
      {/* </div> */}

      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
