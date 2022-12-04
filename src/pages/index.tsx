//** Home page */

import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
        <Head>
            <title>CodeDevils</title>
            <meta name="description" content="CodeDevils - An ASU student organization" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Navbar />
    </>
  );
}
