import Header from "~/components/Header";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type ErrorProps = {
  statusCode: number;
};

import { NextPageContext } from "next";

type ErrorInitialProps = {
  res: NextPageContext["res"];
  err: NextPageContext["err"];
};

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <>
      <div className="isolate">
        <Header>
          <h1 className="text-3xl text-7xl font-bold">{statusCode} Error</h1>
          <article className="space-y-4">
            <p className="text-base md:w-1/2">
              Oops! Something went wrong. Sorry, that&apos;s all we know.
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
};

Error.getInitialProps = ({ res, err }: ErrorInitialProps) => {
  const statusCode = res
    ? res.statusCode
    : err
    ? err.statusCode
    : (404 as number);
  return { statusCode };
};

export default Error;
