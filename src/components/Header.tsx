import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "~/utils/cn";

export const Header = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex bg-gray py-12 text-white">
      <div className="relative">
        <Image
          src={"/images/YLPWQK.png"}
          height={300}
          width={1440}
          alt="CodeDevils code grid header background"
          className="hidden object-cover md:block"
          priority
        />
        <div
          className={cn(
            "justify-left top-0 flex h-full w-full items-center px-8 text-[2rem] transition-all duration-700 md:absolute md:w-6/12 md:py-28 md:text-[3rem]",
            className
          )}
        >
          <article className="flex flex-col space-y-6 text-black">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
};

export const HeaderTitle = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <h1 className={cn("text-5xl font-bold  md:text-6xl", className)}>
      {children}
    </h1>
  );
};

export const HeaderSubtitle = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  // the reason why the chidlren is wrapped in a article is because the children prop is a ReactNode, allowing for multiple elements(paragraphs, links, etc) to be passed in as children.
  return (
    <p className={cn("text-base font-extralight", className)}>{children}</p>
  );
};

export const HeaderButton = ({
  link,
  target,
  rel,
  children,
  className,
}: {
  link: string;
  children: string;
  target?: string;
  rel?: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "w-fit rounded-lg border border-maroon bg-maroon px-4 py-1 text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-gray",
        className
      )}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
};
