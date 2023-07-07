import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useInView } from "react-intersection-observer";

// styles
import desktopStyles from "./../../styles/components/page_layout/footers/desktop.module.scss";
import mobileStyles from "./../../styles/components/page_layout/footers/mobile.module.scss";

// desktop component

// const DesktopFooter = () => {
//   return (
//     <footer id={desktopStyles.footer_container}>
//       <div id={desktopStyles.description_wrapper}>
//         <Image
//           id={desktopStyles.logo}
//           src={"/logo-dark.png"}
//           width={200}
//           height={200}
//           alt={"logo"}
//         />
//         <p id={desktopStyles.description}>
//           CodeDevils is an inclusive virtual club that aims to bring ASU
//           students together.
//         </p>
//       </div>

//       <div id={desktopStyles.linkWrapper}>
//         {/* <section className={desktopStyles.section_container}> */}
//         <h2 className={desktopStyles.section_title}>Organization</h2>
//         <ul className={desktopStyles.link_list}>
//           <li className={desktopStyles.list_item}>
//             <Link href={"/about"}>About</Link>
//           </li>
//           <li className={desktopStyles.list_item}>
//             <Link href={"/about#leadership"}>Leadership</Link>
//           </li>
//           <li className={desktopStyles.list_item}>
//             <Link
//               target="_blank"
//               href={
//                 "https://asu.campuslabs.com/engage/organization/codedevils/"
//               }
//             >
//               SunDevilSync
//             </Link>
//           </li>
//           <li className={desktopStyles.list_item}>
//             <Link target="_blank" href={"https://github.com/ASU-CodeDevils/"}>
//               Github
//             </Link>
//           </li>
//           <li className={desktopStyles.list_item}>
//             <Link
//               target="_blank"
//               href={"https://www.hackerrank.com/codedevils-spring-challenge"}
//             >
//               HackerRank
//             </Link>
//           </li>

//           <li className={desktopStyles.list_item}>
//             <Link
//               target="_blank"
//               href={"https://app.slack.com/client/T2N76FZ3Q/C2N5P84BD"}
//             >
//               Slack
//             </Link>
//           </li>
//         </ul>
//         {/* </section> */}
//       </div>
//     </footer>
//   );
// };

// const MobileFooter = () => {
//   const openPDF = (path) => {
//     window.open(path, "_blank");
//   };

//   const { ref: footerRef, inView: footerInView } = useInView({
//     threshold: 0.5,
//     triggerOnce: true,
//   });

//   return (
//     <footer id={mobileStyles.footer_container}>
//       <div id={mobileStyles.description_wrapper}>
//         <Image
//           src="/logo-dark.png"
//           alt="CodeDevils logo"
//           width={150}
//           height={200}
//         />
//         <p id={mobileStyles.description}>
//           CodeDevils is an inclusive virtual club that aims to bring ASU
//           students together.
//         </p>
//       </div>
//       <div id={mobileStyles.section_wrapper}>
//         <h3 id={mobileStyles.section_title}>Organization</h3>
//         <ul id={mobileStyles.section_list}>
//           <li className={mobileStyles.section_list_item}>
//             <Link href="/about">About</Link>
//           </li>
//           <li className={mobileStyles.section_list_item}>
//             <Link href="/about/#leadership">Leadership</Link>
//           </li>
//           <li className={mobileStyles.section_list_item}>
//             <Link
//               target="_blank"
//               href="https://asu.campuslabs.com/engage/organization/codedevils/"
//             >
//               SunDevilSync
//             </Link>
//           </li>
//           <li className={mobileStyles.section_list_item}>
//             <button onClick={() => openPDF("/pdf/welcome.pdf")}>
//               Welcome Docs
//             </button>
//           </li>
//           <li className={mobileStyles.section_list_item}>
//             <Link href="/about/#leadership">Constitution</Link>
//           </li>
//           <li className={mobileStyles.section_list_item}>
//             <Link href="/about/#leadership">Slack</Link>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  const openPDF = (path) => {
    window.open(path, "_blank");
  };

  const [currentYear, setCurrentYear] = useState<number | undefined>(undefined);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, [currentYear]);

  return (
    <footer className="flex flex-col flex-nowrap items-center justify-center py-5 px-2 shadow-lg">
      <section className="flex flex-col flex-nowrap items-center justify-center">
        <Image
          src="/logo-dark.png"
          alt="CodeDevils logo"
          width={150}
          height={200}
        />
        <p className="text-center">
          CodeDevils is an inclusive virtual club that aims to bring ASU
          students together.
        </p>
      </section>

      <ul>
        <li>
          <h3 className="text-center font-bold">Organization</h3>
          <ul className="text-center">
            {[
              ["About", "/about"],
              ["Leadership", "/about/#leadership"],
              ["Contact", "/contact"],
              ["Constitution", "/about/#constitution"],
            ].map(([title, url], key) => (
              <li key={key}>
                <Link href={url as string}>{title}</Link>
              </li>
            ))}
            <li>
              <button onClick={() => openPDF("/pdf/welcome.pdf")}>
                Welcome Docs
              </button>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-center font-bold">Follow</h3>
          <ul className="text-center">
            {[
              ["Instagram", "https://www.instagram.com/asu_codedevils/"],
              ["Discord Community", "https://discord.gg/9YCuQ5B48v"],
              [
                "SunDevilSync",
                "https://asu.campuslabs.com/engage/organization/codedevils/",
              ],
              ["Github", "https://github.com/ASU-CodeDevils/"],
              [
                "LinkedIn",
                "https://www.linkedin.com/company/42138997/admin/feed/posts/",
              ],
            ].map(([title, url], key) => (
              <li key={key}>
                <Link target="_blank" href={url as string}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <section></section>
      <section>
        <p className="after:content-['All Rights Reserved'] before:content-['@']">
          {" "}
          Copyright {currentYear}.
        </p>
      </section>
    </footer>
  );
};
export default Footer;
