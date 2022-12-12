// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import type { Session } from "next-auth";
import "../styles/globals.css";
import App from "./App";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      {/* <Component {...pageProps} /> */}
      <App />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);