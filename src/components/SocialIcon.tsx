import React from "react";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-colors duration-[400ms] hover:bg-maroon hover:text-white"
    >
      {children}
      <div className="sr-only">Social Media Icon</div>
    </Link>
  );
};

export default SocialIcon;
