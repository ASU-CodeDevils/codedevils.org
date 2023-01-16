import React, { useState, useEffect, useContext } from "react";
// context
import { AppContext } from "../../../contexts/AppContext";

// navbars
import DesktopNavbar from "./desktop";
import MobileNavbar from "./mobile";

const Navbar = ({ currentPagePath }) => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;

  return (
    <>
      {isMobile ? (
        <MobileNavbar currentPagePath={currentPagePath} />
      ) : (
        <DesktopNavbar currentPagePath={currentPagePath} />
      )}
    </>
  );
};

export default Navbar;
