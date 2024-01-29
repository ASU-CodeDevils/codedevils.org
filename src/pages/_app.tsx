import { AppProps } from "next/app";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import "~/styles/globals.css";

const App: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
};

export default App;

