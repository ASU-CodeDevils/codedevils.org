import { Header } from "~/components/Header";
import { InternalLink } from "~/components/ui/buttons";

export default function Custom500() {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <Header>
          <h1 className="text-7xl font-bold">500 Error</h1>
          <article className="space-y-4">
            <p className="text-base md:w-1/2">
              Seems like something happened on our end. Please try again later.
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
}
