import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Analytics } from "@vercel/analytics/react";

import Navbar from "./Navbar";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const DynamicFooter = dynamic(() => import("./Footer"), {
  loading: () => <p>Loading...</p>,
});

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
      className={`mx-auto flex h-screen flex-col flex-nowrap bg-white text-black ${inter.className}`}
    >
      <Head>
        <title>CodeDevils - Learn, Build, and Network</title>
        <meta
          name="description"
          content="CodeDevils is Arizona State University's largest software development student organization that aims to provide members with learning opportunities like no other so that they can learn, build, and network together to succeed through their software development journey. We provide a welcoming environment for members of all skill levels to grow their skills."
        />
        <meta
          name="keywords"
          content="CodeDevils, ASU, software development organization, software development club, largest Software Development club at ASU, largest Software Development organization at ASU, ASU software development, Arizona State University software development"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="CodeDevils' Website Team" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* favicon */}
        <link rel="icon" href="/favicon.webp" />
        {/* opengraph */}
        <meta
          property="og:title"
          content="CodeDevils - Learn, Build, and Network"
        />
        <meta
          property="og:description"
          content="CodeDevils is Arizona State University's largest software development student organization that aims to provide members with learning opportunities like no other so that they can learn, build, and network together to succeed through their software development journey. We provide a welcoming environment for members of all skill levels to grow their skills.
          "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codedevils.org" />
        <meta property="og:site_name" content="CodeDevils" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:width" content="1362" />
        <meta property="og:image:height" content="482" />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@code_devils" />
        <meta name="twitter:creator" content="@code_devils" />
        <meta
          name="twitter:title"
          content="CodeDevils - Learn, Build, and Network"
        />
        <meta
          name="twitter:description"
          content="CodeDevils is Arizona State University's largest software development student organization that aims to provide members with learning opportunities like no other so that they can learn, build, and network together to succeed through their software development journey. We provide a welcoming environment for members of all skill levels to grow their skills."
        />
      </Head>

      <div className="flex h-screen flex-col">
        <Navbar />

        <main className="mx-auto w-full max-w-screen-2xl">
          {children}
          <Analytics />
        </main>
        <DynamicFooter />
      </div>
    </div>
  );
}
