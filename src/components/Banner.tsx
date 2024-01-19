import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const BasicComponent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div
      className={`${
        !showBanner && "hidden"
      } start-0 top-0 z-50 block w-full bg-white shadow-sm`}
    >
      <div className="mx-auto mx-auto max-w-screen-2xl px-6 py-3">
        <div className="flex w-full	">
          <div className="flex grow items-center">
            <p className="flex w-full items-center justify-end gap-1 text-sm font-normal text-black">
              <span className="me-3 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-maroon p-1">
                <svg
                  className="h-3 w-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                </svg>
                <span className="sr-only">Light bulb</span>
              </span>
              <span className="text-center">
                Brand new{" "}
                <Link
                  href="/about#leadership"
                  onClick={() => {
                    setShowBanner(!showBanner);
                  }}
                  className="decoration-600 inline font-medium text-maroon underline decoration-solid underline-offset-2 hover:no-underline"
                >
                  officer board
                </Link>{" "}
                for the spring 2024 semester!
              </span>
            </p>
          </div>
          <div className="flex grow items-center justify-end">
            <button
              type="button"
              className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-black hover:bg-gray-500 hover:text-maroon"
              onClick={() => {
                setShowBanner(!showBanner);
              }}
            >
              <AiOutlineClose />
              <span className="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicComponent;
