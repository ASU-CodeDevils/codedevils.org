import Head from "next/head";
import Navbar from './navbar'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CodeDevils - Develop. Network. Create.</title>
        <meta name="description" content="CodeDevils is an inclusive virtual club that aims to bring ASU students together." />
        <meta name="author" content="" /> {/* TODO: add all the developers that worked on the website at the end */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="" /> {/* TODO: Add website favicon */}
      </Head>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}