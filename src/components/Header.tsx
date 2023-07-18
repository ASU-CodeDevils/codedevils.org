import React from "react";
import { useInView } from "react-intersection-observer";
import Divider from "./Divider";

type HeaderProps = {
  title?: string | undefined;
  description?: string | undefined;
};

const Header = ({ title, description }: HeaderProps) => {
  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: false,
  });

  return (
    <header className="bg-hero w-screen bg-cover pt-20 text-white">
      <div
        ref={myRef}
        className={`${
          isInView
            ? "translate-x-0	opacity-100 blur-0"
            : "-translate-x-full opacity-0 blur"
        } w-screen py-4 pl-10 text-[3rem] transition-all duration-1000 ease-in-out md:w-7/12`}
      >
        {title && <h1 className="text-left font-light">{title}</h1>}
        {description && (
          <p className="text-left text-[1.25rem] font-light">{description}</p>
        )}
      </div>

      <Divider />
    </header>
  );
};

export default Header;
