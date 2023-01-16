import React from "react";
import Image from "next/image";

// styles
import footerStyles from "./../../../styles/components/page_layout/footers/mobile.module.scss";
import Link from "next/link";

const MobileFooter = () => {
  const openPDF = (path) => {
    window.open(path, "_blank");
  };

  return (
    <footer id={footerStyles.footer_container}>
      <div id={footerStyles.description_wrapper}>
        <Image
          src="/logo-dark.png"
          alt="CodeDevils logo"
          width={100}
          height={200}
        />
        <p id={footerStyles.description}>
          CodeDevils is an inclusive virtual club that aims to bring ASU
          students together.
        </p>
      </div>
      <div id={footerStyles.section_wrapper}>
        <h3 id={footerStyles.section_title}>Organization</h3>
        <ul id={footerStyles.section_list}>
          <li id={footerStyles.section_list_item}>
            <Link href="/about">About</Link>
          </li>
          <li id={footerStyles.section_list_item}>
            <Link href="/about/#leadership">Leadership</Link>
          </li>
          <li id={footerStyles.section_list_item}>
            <Link
              target="_blank"
              href="https://asu.campuslabs.com/engage/organization/codedevils/"
            >
              SunDevilSync
            </Link>
          </li>
          <li id={footerStyles.section_list_item}>
            <button onClick={() => openPDF("/pdf/welcome.pdf")}>
              Welcome Docs
            </button>
          </li>
          <li id={footerStyles.section_list_item}>
            <Link href="/about/#leadership">Constitution</Link>
          </li>
          <li id={footerStyles.section_list_item}>
            <Link href="/about/#leadership">Slack</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default MobileFooter;
