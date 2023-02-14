import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useInView } from "react-intersection-observer";

// footers
// import DesktopFooter from "./desktop";
// import MobileFooter from "./mobile";

// styles
import desktopStyles from "./../../styles/components/page_layout/footers/desktop.module.scss";
import mobileStyles from "./../../styles/components/page_layout/footers/mobile.module.scss";

// app context
import { AppContext } from "../../contexts/AppContext.jsx";

// desktop component

const DesktopFooter = () => {
  return (
    <footer id={desktopStyles.footer_container}>
      <div id={desktopStyles.description_wrapper}>
        <Image
          id={desktopStyles.logo}
          src={"/logo-dark.png"}
          width={200}
          height={200}
          alt={"logo"}
        />
        <p id={desktopStyles.description}>
          CodeDevils is an inclusive virtual club that aims to bring ASU
          students together.
        </p>
      </div>

      <div id={desktopStyles.linkWrapper}>
        {/* <section className={desktopStyles.section_container}> */}
        <h2 className={desktopStyles.section_title}>Organization</h2>
        <ul className={desktopStyles.link_list}>
          <li className={desktopStyles.list_item}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={desktopStyles.list_item}>
            <Link href={"/about#leadership"}>Leadership</Link>
          </li>
          <li className={desktopStyles.list_item}>
            <Link
              target="_blank"
              href={
                "https://asu.campuslabs.com/engage/organization/codedevils/"
              }
            >
              SunDevilSync
            </Link>
          </li>
          <li className={desktopStyles.list_item}>
            <Link target="_blank" href={"https://github.com/ASU-CodeDevils/"}>
              Github
            </Link>
          </li>
          <li className={desktopStyles.list_item}>
            <Link
              target="_blank"
              href={"https://www.hackerrank.com/codedevils-spring-challenge"}
            >
              HackerRank
            </Link>
          </li>

          <li className={desktopStyles.list_item}>
            <Link
              target="_blank"
              href={"https://app.slack.com/client/T2N76FZ3Q/C2N5P84BD"}
            >
              Slack
            </Link>
          </li>
        </ul>
        {/* </section> */}
      </div>
    </footer>
  );
};

const MobileFooter = () => {
  const openPDF = (path) => {
    window.open(path, "_blank");
  };

  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <footer id={mobileStyles.footer_container}>
      <div id={mobileStyles.description_wrapper}>
        <Image
          src="/logo-dark.png"
          alt="CodeDevils logo"
          width={150}
          height={200}
        />
        <p id={mobileStyles.description}>
          CodeDevils is an inclusive virtual club that aims to bring ASU
          students together.
        </p>
      </div>
      <div id={mobileStyles.section_wrapper}>
        <h3 id={mobileStyles.section_title}>Organization</h3>
        <ul id={mobileStyles.section_list}>
          <li className={mobileStyles.section_list_item}>
            <Link href="/about">About</Link>
          </li>
          <li className={mobileStyles.section_list_item}>
            <Link href="/about/#leadership">Leadership</Link>
          </li>
          <li className={mobileStyles.section_list_item}>
            <Link
              target="_blank"
              href="https://asu.campuslabs.com/engage/organization/codedevils/"
            >
              SunDevilSync
            </Link>
          </li>
          <li className={mobileStyles.section_list_item}>
            <button onClick={() => openPDF("/pdf/welcome.pdf")}>
              Welcome Docs
            </button>
          </li>
          <li className={mobileStyles.section_list_item}>
            <Link href="/about/#leadership">Constitution</Link>
          </li>
          <li className={mobileStyles.section_list_item}>
            <Link href="/about/#leadership">Slack</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const Footer = () => {
  const { state } = React.useContext(AppContext);
  // const { state } = React.useContext(AppContext) as any;
  console.log("state", state);

  const { isMobile } = state;

  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
};

export default Footer;
