import { FaArrowRight } from "react-icons/fa";
import Header from "~/components/Header";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <div className="isolate">
        <Header>
          <h1 className="text-3xl text-7xl font-bold">
            500 - Server-side error occurred
          </h1>
          <article className="space-y-4">
            <p className="text-base md:w-1/2">
              Seems like something happened on our end. Please try again later.
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
