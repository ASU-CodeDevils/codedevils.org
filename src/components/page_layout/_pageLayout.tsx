import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

// components
import PageHeader from "./../headers/_headerLayout";
import Navbar from "./Navbar";
import Footer from "./Footer";

// styles
import layoutStyles from "./../../styles/components/page_layout/_pageLayout.module.scss";

export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(true);
  const { asPath } = useRouter();
  // const [languageData, setLanguageData] = useState({});
  // const value = useContext(AppContextProvider);

  // const [state, dispatch] = useReducer(appReducer, {});
  // console.log("state 1: ", state);

  // useEffect(() => {
  //   dispatch({ type: "SET_LANGUAGE", payload: locale });
  //   setLanguageData(state.currentLangData);
  //   console.log("languageData: ", languageData);
  // }, [locale]);

  // useEffect(() => {
  //   if (asPath == "/accounts/login" || asPath == "/accounts/signup") {
  //     setNavbar(false);
  //   } else {
  //     setNavbar(true);
  //   }
  // }, [asPath]);

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
      </Head>

      {navbar && <Navbar currentPagePath={asPath} />}
      <PageHeader />

      <main id={layoutStyles.content_conatiner}>{children}</main>
      <Footer />
    </div>
  );
}
