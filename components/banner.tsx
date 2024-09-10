import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={"block w-full bg-gray shadow-sm "}>
      <div className="mx-auto max-w-screen-2xl px-6 py-4 md:px-8">
        <ul className="flex justify-start gap-4 text-maroon md:justify-end">
          <li>
            <Link
              href="https://docs.codedevils.org"
              className="hover:underline"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link href="/support" className="hover:underline">
              Get Support
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
