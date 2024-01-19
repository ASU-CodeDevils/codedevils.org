import React from "react";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";

interface ButtonProps {
  text: string;
  link: string;
}

interface MenuButtonProps {
  title: string;
  text: string;
  picture?: string;
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
}: MenuButtonProps) => {
  return (
    <div
      className={`${
        !hide
          ? `flex flex-col-reverse gap-4 md:grid ${
              picture ? "grid-cols-2" : "md:grid-cols-1"
            }`
          : "hidden"
      } h-full`}
    >
      <div className=" items-between flex h-full min-h-fit flex-col justify-between">
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        <p className="mb-2 min-h-fit grow py-2 text-base md:text-sm">{text}</p>

        {btn && (
          <Button href={btn.link} target="_blank" rel="noopener noreferrer">
            {btn.text} <FaArrowRight className="inline" />
          </Button>
        )}
      </div>
      {picture && (
        <div className="flex justify-center ">
          <Image
            src={picture}
            width={500}
            height={500}
            alt="section image"
            className="shadow-base my-auto h-auto w-auto rounded-lg md:shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default MenuContent;
