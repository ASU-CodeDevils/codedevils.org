import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

import { MdOutlineZoomOutMap } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

type OfficerCardProps = {
  officerInfo: OfficerInfo;
};

type OfficerInfo = {
  name: string;
  position: string;
  avatar: string;
  portfolio_url: string;
};

const OfficerCard: React.FC<OfficerCardProps> = ({
  officerInfo,
}: OfficerCardProps) => {
  const [hovered, setHovered] = useState(false);

  const { name, position, portfolio_url, avatar } = officerInfo as OfficerInfo;

  return (
    <>
      <button
        className="h-full w-full"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <Card>
          <Link
            className="flex items-center gap-4 "
            target="_blank"
            rel="noopener noreferrer"
            href={portfolio_url}
          >
            {avatar ? (
              <Image
                src={avatar as string}
                alt="officer picture"
                className="h-10 w-10 rounded-full"
                width={50}
                height={50}
              />
            ) : (
              <RxAvatar className="h-10 w-10 rounded-full" />
            )}

            <div className="grow text-left  font-medium">
              <div
                className={`${
                  hovered ? "text-maroon" : "text-black"
                } transition-colors`}
              >
                {name}
              </div>
              <div className="text-sm text-gray-200">{position}</div>
            </div>

            <div
              className={`${
                hovered ? " scale-100" : " scale-0"
              } transition-transform`}
            >
              <MdOutlineZoomOutMap className="text-3xl text-maroon" />
            </div>
          </Link>
        </Card>
      </button>
    </>
  );
};

export default OfficerCard;
