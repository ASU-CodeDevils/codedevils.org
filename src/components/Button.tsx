import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  target?: string;
  rel?: string;
  children: string | React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, target, rel, children }) => {
  return (
    <Link
      href={`${href}`}
      target={target}
      rel={rel}
      className="flex w-fit items-center gap-2 rounded-md bg-maroon px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-black"
    >
      {children}
    </Link>
  );
};

export default Button;
