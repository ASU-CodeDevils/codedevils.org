"use client";

import React, { useEffect, useState, useRef } from "react";

import Image from "next/image";

import { cn } from "~/src/app/utils/cn";

export const InfiniteMovingCards = ({
  logos,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  logos: {
    name: string;
    src: string;
  }[];

  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    };

    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };

    addAnimation();
  }, [direction, speed]);

  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-6xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {logos.map((item, idx) => (
          <li className="relative w-fit rounded-2xl px-8 py-6" key={idx}>
            <Image
              src={item.src}
              alt={item.name}
              className="h-10 w-fit"
              width={200}
              height={100}
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
