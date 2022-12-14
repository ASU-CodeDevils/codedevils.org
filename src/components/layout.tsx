import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Header from "./header";
import Navbar from './navbar'
// import Footer from './footer'

import favicon from './../../public/favicon.png'

// styles
import layoutStyles from "./../styles/components/layout.module.scss";


export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(true);
  const { asPath } = useRouter();
  console.log(asPath);

  useEffect(() => {
    if (asPath == '/accounts/login' || asPath == '/accounts/signup') {
      setNavbar(false);
    }else{
    setNavbar(true);
    }
  }, [asPath]);

  return (
    <>
      <Head>
        <title>CodeDevils - Develop. Network. Create.</title>
        <meta name="description" content="CodeDevils is an inclusive virtual club that aims to bring ASU students together." />
        <meta name="author" content="" /> {/* TODO: add all the developers that worked on the website at the end */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="./../../public/favicon.png" /> {/* TODO: Add website favicon */}
      </Head>
      <div id={layoutStyles.bg_img}>
      {navbar && <Navbar />}
      <Header />
      </div>
      
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}