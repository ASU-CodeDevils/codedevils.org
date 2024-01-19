import React from "react";
import Header from "~/components/Header";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Custom404() {
  return (
    <>
      <div className="isolate">
        <Header>
          <h1 className="text-3xl text-7xl font-bold">404 Error</h1>
          <article className="space-y-4">
            <p className="text-base md:w-1/2">
              Oops! Something went wrong. Seems like this isn&#180;t the page
              you are looking for.
            </p>
            <p className="text-base">
              <Link className=" text-white" href="/">
                Go to the Home Page <FaArrowRight className="inline" />
              </Link>
            </p>
          </article>
        </Header>
      </div>
    </>
  );
}
