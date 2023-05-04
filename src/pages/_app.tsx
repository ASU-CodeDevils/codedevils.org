// // file src: ./src/pages/_app.tsx

import Layout from "../components/page_layout/_pageLayout";

import { type AppType} from "next/app";
import { ClerkProvider } from '@clerk/nextjs';
import { api } from "~/utils/api";
import React from "react";

// gobal styles
import "../styles/globals.css";

// contexts
import { AppContextProvider } from "./../contexts/AppContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <AppContextProvider>
        <Layout>
          {/* This becomes the children of the layout component because it's nested within the layout component */}
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);
