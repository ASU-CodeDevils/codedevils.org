import { type AppType } from "next/app";
import React from "react";
import Layout from "../components/Layout";

// global styles
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
