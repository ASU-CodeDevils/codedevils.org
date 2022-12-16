// // file src: ./src/pages/_app.tsx
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import Layout from "../components/layout";
import { trpc } from "../utils/trpc";
import React from "react";
// gobal styles
import "../styles/globals.css";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        {/* This becomes the chidlren of the layout component because it's nested within the layout component*/}
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);