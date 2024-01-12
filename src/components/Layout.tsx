import React from "react";
import Head from "next/head";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} mx-auto flex h-screen flex-col flex-nowrap bg-white text-black `}
    >
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

      <div className="flex h-screen flex-col ">
        <Navbar />
        <main className="mx-auto mt-20 w-full max-w-screen-2xl md:mt-16">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
