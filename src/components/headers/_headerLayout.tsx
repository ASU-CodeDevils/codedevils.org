import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// overall header styles
// these styles will be applied to every header no matter what page the user is on.
import headerStyles from "./../../styles/components/headers/_headerLayout.module.scss";

// headers
import HomePageHeader from "./home";
import AboutPageHeader from "./about";
import ContactPageHeader from "./contact";

// wave divider
import Divider from "../page_layout/pageDivider";

const PageHeader = () => {
  const [header, setHeader] = useState(<></>);
  const [showDivider, setShowDivider] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    switch (asPath) {
      case "/":
        setHeader(<HomePageHeader />);
        break;
      case "/about":
        setHeader(<AboutPageHeader />);
        break;
      case "/contact":
        setHeader(<ContactPageHeader />);
        break;
      default:
        setHeader(<></>);
        break;
    }
    // showWave
    if (asPath != "/") {
      setShowDivider(true);
    } else {
      setShowDivider(false);
    }
  }, [asPath]);

  return (
    <div id={headerStyles.header_wrapper}>
      {header}
      {showDivider && <Divider />}
    </div>
  );
};

export default PageHeader;
