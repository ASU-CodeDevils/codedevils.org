import Head from "next/head";

// components
import PageHeader from "./headers/_headerLayout";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col flex-nowrap">
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

      <Navbar />
      <PageHeader />

      <main className="md:mb-4 md:text-center">{children}</main>
      <Footer />
    </div>
  );
}
