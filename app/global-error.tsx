"use client";
import React from "react";
import { Header } from "~/components/header";
import { InternalLink } from "~/components/ui/buttons";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <html
        lang="en"
        className={`mx-auto flex h-screen flex-col flex-nowrap bg-white text-black`}
      >
        <body className={`flex h-screen flex-col ${inter.className}`}>
          <Navbar />
          <div className="mx-auto w-full max-w-screen-2xl">
            <div className="flex h-full items-center justify-center">
              <Header>
                <h1 className="text-7xl font-bold">An Error occurred!</h1>
                <article className="space-y-4">
                  <p className="text-base md:w-1/2">
                    Oops! Something went wrong. Seems like this isn&apos;t the
                    page you are looking for.
                  </p>
                  <p className="text-base">
                    <InternalLink href="/">
                      Go to the Home Page
                      <div className="sr-only">
                        as you ran into a 500 error.
                      </div>
                    </InternalLink>

                    <InternalLink href="/support">
                      Get Support
                      <div className="sr-only">
                        if you need further assistance.
                      </div>
                    </InternalLink>
                  </p>
                </article>
              </Header>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
