import React from "react";

import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

type SettingsBtnProps = {
  showDropdown: boolean;
  icon: React.ReactNode;
  list: [string, string][] | string[];
};

const SettingsBtn = ({ showDropdown, icon, list }: SettingsBtnProps) => {
  const { isSignedIn } = useUser();
  return (
    <>
      {icon as React.ReactNode}

      <ul
        className={`${
          showDropdown
            ? "absolute right-[1rem] top-[4.5rem] flex h-auto min-w-[2em] flex-col flex-nowrap bg-white p-[20px] shadow-md transition-all duration-300 ease-in-out before:fixed before:top-[3.75rem] before:right-[3.5rem] before:h-0 before:w-0 before:border-[10px] before:border-t-0 before:border-b-[20px] before:border-solid before:border-transparent before:border-b-white"
            : "hidden"
        }`}
      >
        {isSignedIn ? (
          <>
            {list.map(([title, url], key) => (
              <li key={key}>
                <Link href={url as string} className="text-black ">
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <SignOutButton />
            </li>
          </>
        ) : (
          list.map((language, key) => (
            <li key={key}>
              <button className="text-black ">{language}</button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default SettingsBtn;
