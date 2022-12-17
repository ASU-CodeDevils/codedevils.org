import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
// import { useInView } from 'react-intersection-observer';
// icons
import { FaLanguage } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

// styles
import navbarStyles from "./../../../styles/components/page_layout/navbars/desktop.module.scss";


//** Desktop Navbar component */
const DesktopNavbar = () => {

  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener to the window scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Pass an empty array as the second argument to only run the effect once

  function handleScroll() {
    // Check the value of window.scrollY to determine if the user has scrolled the page
    if (window.scrollY > 60) {
      console.log('The user has scrolled the page by at least 90 pixels');
      setIsUserScrolling(true);
    }else{
      setIsUserScrolling(false);
    }
  }

  const [isDropdownShowing, setIsDropdownShowing] = useState(false)
  const showDropdown = () => {
    setIsDropdownShowing(true)
  }
  const hideDropdown = () => {
    setIsDropdownShowing(false)
  }

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIfMobile = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setIsMobile(true);
      }else{
        setIsMobile(false);
      }
    };
    // Call the function once to set the initial value of isMobile
    checkIfMobile();
    // Add an event listener to update isMobile whenever the window is resized
    window.addEventListener('resize', checkIfMobile);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <nav id={`${isUserScrolling ? navbarStyles.navbar_scrolled : navbarStyles.navbar_nonScrolled}`} className={navbarStyles.navbar_wrapper}> {/* className={`${navbarIsVisible && console.log('navbarIsVisible', navbarIsVisible)}`}> */}

       {/* className={`${navbarIsVisible && console.log('navbarIsVisible', navbarIsVisible)}`}> */}
      <Link href="/">
        <Image id={navbarStyles.logo} src={isUserScrolling? "/logo-dark.png" : "/logo-light.png"} alt="CodeDevils Logo" width="180" height="100" />
      </Link>

      <ul id={navbarStyles.link_wrapper} >
        <li id={`${isUserScrolling ? navbarStyles.scrolledLinkItemStyles : navbarStyles.linkItemStyles}`}>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li id={`${isUserScrolling ? navbarStyles.scrolledLinkItemStyles : navbarStyles.linkItemStyles}`}>
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li id={`${isUserScrolling ? navbarStyles.scrolledLinkItemStyles : navbarStyles.linkItemStyles}`}>
          <Link href="/contact">
            <span>Contact Us</span>
          </Link>
        </li>
        <li id={`${isUserScrolling ? navbarStyles.scrolledLinkItemStyles : navbarStyles.linkItemStyles}`}>
          <Link href="/help">
            <span>Help</span>
          </Link>
        </li>
      </ul>

      <div id={navbarStyles.navbar_button_wrapper}>
      <Link href="/accounts/signup" id={`${isUserScrolling ? navbarStyles.registerScrollStyle : navbarStyles.registerStyle }`} className={`${navbarStyles.button}`}>
        <HiUserAdd />
        <span>Register</span>
      </Link>
    
      <Link href="/accounts/login" id={`${isUserScrolling ? navbarStyles.loginScrollStyle : navbarStyles.loginStyle }`} className={`${navbarStyles.button}`}>
        {/* id={navbarStyles.login_button} */}
        <FiLogIn />
        <span>Login</span>
      </Link>

      
      </div>
      <div 
        id={navbarStyles.dropdown} 
        onMouseEnter={showDropdown} 
        onMouseLeave={hideDropdown}
      >
        <button 
        className={navbarStyles.languageButton} 
        id={`${isUserScrolling ? navbarStyles.langBtnScrollStyles : navbarStyles.langBtnStyles}`}
        >
          <FaLanguage />
        </button>
        {
          isDropdownShowing ? (
          <div id={navbarStyles.dropdown_content}>
            <button>
              English
            </button>
          </div> 
          ) : null
        }
      </div>
      
    </nav>

    
  );
}

export default DesktopNavbar;
