import type { AppType } from "next/app";
import Layout from "../components/Layout";
import { trpc } from "../utils/trpc";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
// gobal styles
import "./../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
