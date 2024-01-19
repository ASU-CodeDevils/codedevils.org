import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import HeaderBackground from "./../../public/images/headerImage.png";

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  const { ref: headerRef, inView: isInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="relative flex text-white">
      <Image
        src={HeaderBackground}
        className="h-[412px] object-cover"
        alt="CodeDevils code grid header background"
        priority
      />
      <div
        ref={headerRef}
        className={` ${
          isInView
            ? "translate-x-0	opacity-100 blur-0"
            : "-translate-x-full opacity-0 blur"
        } absolute mx-auto flex h-full w-full max-w-screen-2xl items-center text-left text-[2rem] transition-all duration-700 md:text-[3rem] `}
      >
        <div className="my-auto px-6 md:ml-8 md:px-0 lg:w-7/12">{children}</div>
      </div>
    </div>
  );
};

export default Header;
