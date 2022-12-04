//** Home page */

import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
        <Head>
            <title>CodeDevils - Develop. Network. Create.</title>
            <meta name="description" content="CodeDevils is an inclusive virtual club that aims to bring ASU students together." />
            <meta name="author" content="Frank J. Lin (Full-Stack Developer)" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Navbar />
    </>
  );
}
