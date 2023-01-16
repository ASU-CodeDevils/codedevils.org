import React, { useState, useEffect } from "react";

// footers
import DesktopFooter from "./desktop";
import MobileFooter from "./mobile";

// app context
import { AppContext } from "./../../../contexts/AppContext.jsx";

const Footer = () => {
  const { state } = React.useContext(AppContext);
  const { isMobile } = state;

  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
};

export default Footer;
