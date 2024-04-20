import React, { FC, HTMLAttributes } from "react";

import { InternalLink } from "~/components/ui/buttons";

import { cn } from "~/utils/cn";

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

export const SupportSection: FC<SectionProps> = () => {
  return (
    <Section>
      <article className="space-y-3 rounded-lg bg-white px-6 py-8 text-left shadow-xl">
        <h3 className="text-xl text-maroon">Need Support?</h3>
        <h2 className="mx-auto text-4xl font-bold">
          Need help or have questions?
        </h2>
        <p className="mx-auto text-base">
          If you have any questions or need help, feel free to reach out to us.
          We are here to help you succeed in your software development journey.
        </p>
        <InternalLink href="/support">Get Support</InternalLink>
      </article>
    </Section>
  );
};
