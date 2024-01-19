import React, { useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";

// import { Roboto } from "@next/font/google";

// const roboto = Roboto({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
// });

import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./Footer"), {
  loading: () => <p>Loading...</p>,
});

// ${roboto.className}

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log(
      `
      Intrested in learning about Web Dev or wantig to gain more project experience,
      consider contributing to this website: https://github.com/ASU-CodeDevils/codedevils.org.
      `
    );
  }, []);
  return (
    <div
      className={` mx-auto flex h-screen flex-col flex-nowrap bg-white text-black
    
       `}
    >
      <Head>
        <title>CodeDevils - Develop, Create, and Network</title>
        <meta
          name="description"
          content="CodeDevils is an inclusive virtual club that aims to bring ASU students together."
        />
        <meta name="author" content="" />{" "}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
        <html lang="en" />
      </Head>

      <div className="flex h-screen flex-col ">
        <Navbar />

        <main className="mx-auto mt-20 w-full max-w-screen-2xl md:mt-16">
          {children}
        </main>

        <DynamicFooter />
      </div>
    </div>
  );
}
