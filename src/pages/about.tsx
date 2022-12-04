import Head from "next/head";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>CodeDevils - About</title>
      </Head>
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 mt-5">
        <h1 className="text-xl font-bold">About</h1>
        <p className="text-2xl mt-3">
          CodeDevils is an inclusive virtual club that aims to bring ASU
          students together.
        </p>
      </main>
    </>
  );
}
