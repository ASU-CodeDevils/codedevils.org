// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import type { Session } from "next-auth";
import "../styles/globals.css";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
            <title>CodeDevils - Develop. Network. Create.</title>
            <meta name="description" content="CodeDevils is an inclusive virtual club that aims to bring ASU students together." />
            <meta name="author" content="Frank J. Lin (Full-Stack Developer)" />
            <link rel="icon" href="/favicon.png" />
        </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);