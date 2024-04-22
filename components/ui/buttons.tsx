import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import { cn } from "~/utils/cn";

type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  // text for the link
  children: React.ReactNode;
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    target?: string;
    rel?: string;
  };

export const FilledButton: FC<ButtonProps> = ({
  href,
  target,
  rel,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      href={href as string}
      target={target}
      rel={rel}
      {...props}
      className={cn(
        "flex w-fit items-center gap-2 rounded-md bg-maroon px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-maroon/95",
        className
      )}
    >
      {children}
    </Link>
  );
};

// internal links
export const InternalLink: FC<LinkProps> = ({ href, children, className }) => {
  return (
    <>
      <Link
        href={href || "#"}
        className={cn(
          "underHoverEffect mb-2 flex w-fit items-center justify-center gap-2 text-lg",
          className
        )}
      >
        <span className="text-maroon">{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </Link>
    </>
  );
};

// for external links
export const ExternalLink: FC<LinkProps> = ({ href, children, className }) => {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "underHoverEffect mb-2 flex w-fit items-center justify-center gap-2 text-lg",
          className
        )}
      >
        <span className="text-maroon">{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </Link>
    </>
  );
};
