import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  text: string;
  link: string;
}

interface MenuButtonProps {
  title: string;
  text: string;
  picture?: string;
  // btn?: string;
  btn?: ButtonProps;
  hide: boolean;
  amount: number;
}

const MenuContent: React.FC<MenuButtonProps> = ({
  title,
  text,
  picture,
  btn,
  hide,
  amount,
}: MenuButtonProps) => {
  return (
    <div
      className={`${
        !hide
          ? `flex flex-col-reverse gap-4 md:grid	md:grid-cols-${amount}`
          : "hidden"
      } mt-4 `}
    >
      <div className=" flex flex-col justify-start gap-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="h-24 min-h-fit">{text}</p>

        {btn && (
          <Link
            href={btn.link}
            target="_blank"
            rel="noopener"
            className="flex w-fit items-center gap-2 rounded-md bg-maroon px-4 py-2 text-base font-bold uppercase text-white"
          >
            {btn.text} <FaArrowRight className="inline" />
          </Link>
        )}
      </div>
      {picture && (
        <Image
          src={picture}
          width={500}
          height={500}
          alt="What's new image"
          className="shadow-base rounded-lg md:shadow-lg"
        />
      )}
    </div>
  );
};

export default MenuContent;
