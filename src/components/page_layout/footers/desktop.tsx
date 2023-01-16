import React from "react";
import Image from "next/image";

// styles
import footerStyles from "./../../../styles/components/page_layout/footers/desktop.module.scss";
import Link from "next/link";

// logo

const DesktopFooter = () => {
  return (
    <footer id={footerStyles.footer_container}>
      <div id={footerStyles.club_description}>
        <Image
          id={footerStyles.logo}
          src={"/logo-dark.png"}
          width={200}
          height={200}
          alt={"logo"}
        />
        <p>
          CodeDevils is an inclusive virtual club that aims to bring ASU
          students together.
        </p>
      </div>

      <div id={footerStyles.linkWrapper}>
        <section className={footerStyles.section_container}>
          <h2 className={footerStyles.section_title}>section title</h2>
          <ul className={footerStyles.link_list}>
            <li className={footerStyles.list_item}>
              <Link href={"/about"}>About</Link>
            </li>
            <li className={footerStyles.list_item}>
              <Link href={"/about#leadership"}>Leadership</Link>
            </li>
            <li className={footerStyles.list_item}>
              <Link
                target="_blank"
                href={
                  "https://asu.campuslabs.com/engage/organization/codedevils/"
                }
              >
                SunDevilSnyc
              </Link>
            </li>
            <li className={footerStyles.list_item}>
              <Link target="_blank" href={"https://github.com/ASU-CodeDevils/"}>
                Github
              </Link>
            </li>
            <li className={footerStyles.list_item}>
              <Link
                target="_blank"
                href={"https://www.hackerrank.com/codedevils-spring-challenge"}
              >
                Hackerrank
              </Link>
            </li>

            <li className={footerStyles.list_item}>
              <Link
                target="_blank"
                href={"https://app.slack.com/client/T2N76FZ3Q/C2N5P84BD"}
              >
                Slack
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default DesktopFooter;
