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
        } flex w-screen flex-col  items-start justify-center py-4 px-4 text-[3rem] transition-all duration-1000 ease-in-out md:w-8/12 md:pl-10`}
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
