import React, { FC, HTMLAttributes } from "react";

import { InternalLink } from "~/components/ui/buttons";

import { cn } from "~/src/app/utils/cn";

type SectionProps = HTMLAttributes<HTMLDivElement>;

export const Section: FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("px-6 py-12 md:px-8 md:py-20", className)}>
      <div className={cn("mx-auto max-w-screen-xl space-y-12")}>{children}</div>
    </div>
  );
};

export const MaxWidthWrapper = ({children, className}:{
  children: React.ReactNode
  className: string
}) => {

  return (
    <div className={`${className} h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20`}>
      {children}
    </div>
  )
}



export const Hero: FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "space-y-16 bg-hero-pattern px-6 py-28 md:px-8 ",
        className
      )}
    >
      {children}
    </div>
  );
};


