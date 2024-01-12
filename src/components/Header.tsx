import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type HeaderProps = {
  title?: string | undefined;
  description?: string | undefined;
};

const Header: React.FC<HeaderProps> = ({ title, description }: HeaderProps) => {
  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: false,
  });

  return (
    // <header className="relative z-0 flex h-fit flex-col text-white">
    //   <Image
    //     src="/bg/headerImage.png"
    //     width={0}
    //     height={0}
    //     sizes="100vw"
    //     style={{
    //       width: "100vw",
    //       height: `${!title || !description ? "10rem" : "412px"}`,
    //       zIndex: "0",
    //     }} // optional
    //     alt="CodeDevils code grid header background"
    //     priority
    //   />
    //   <div
    //     ref={myRef}
    //     // className=""
    //     className={`pt-[3rem] md:pt-[6rem] ${
    //       isInView
    //         ? "translate-x-0	opacity-100 blur-0"
    //         : "-translate-x-full opacity-0 blur"
    //     } absolute  mx-auto  w-full max-w-screen-xl  items-start  py-4 px-4 text-[3rem] transition-all duration-1000 ease-in-out  md:pl-10`}
    //   >
    //     {title && <h1 className="text-left font-light">{title}</h1>}
    //     {description && (
    //       <p className="text-left text-[1.25rem] font-light">{description}</p>
    //     )}
    //   </div>
    //   <div className="absolute bottom-0 left-0 z-10 w-full rotate-180 transform overflow-hidden leading-none">
    //     <svg
    //       data-name="Layer 1"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 1200 120"
    //       preserveAspectRatio="none"
    //       className="relative block h-[103px] w-[calc(154%+1.3px)] rotate-0"
    //     >
    //       <path
    //         d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    //         className="fill-white"
    //       ></path>
    //     </svg>
    //   </div>
    // </header>

    <div></div>
  );
};

export default Header;
