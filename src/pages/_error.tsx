import { Header } from "~/components/Header";
import { InternalLink } from "~/components/ui/buttons";

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
      <div className="flex h-full items-center justify-center">
        <Header>
          <h1 className="text-7xl font-bold">{statusCode} Error</h1>
          <article className="space-y-4">
            <p className="text-base md:w-1/2">
              Oops! Something went wrong. Seems like this isn&apos;t the page
              you are looking for.
            </p>
            <p className="text-base">
              <InternalLink href="/">
                Go to the Home Page
                <div className="sr-only">as you ran into a 500 error.</div>
              </InternalLink>

              <InternalLink href="/support">
                Get Support
                <div className="sr-only">if you need further assistance.</div>
              </InternalLink>
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
