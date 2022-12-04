import Head from "next/head";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>CodeDevils - Contact</title>
      </Head>
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 mt-5">
        <h1 className="text-xl font-bold">Contact</h1>
        <p className="text-2xl mt-3">
          If you have any questions, comments, or concerns, please contact us at
          <a className="text-asu-gold" href="mailto:info@codedevils.org"> info@codedevils.org</a>
        </p>
        </main>
    </>
    );
}