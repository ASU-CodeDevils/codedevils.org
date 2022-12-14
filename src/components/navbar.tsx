import Link from "next/link";
import Image from "next/image";

// icons
import { FaLanguage } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

// styles
import navbarStyles from "./../styles/components/navbar.module.scss";

//** Navbar component */
export default function Navbar() {
  return (
    <nav id={navbarStyles.navbar_wrapper}>
      <Link href="/">
        <Image id={navbarStyles.logo} src="/logo-light.png" alt="CodeDevils Logo" width="100" height="100" />
      </Link>

      <ul id={navbarStyles.link_wrapper}>
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Contact Us</span>
          </Link>
        </li>
        <li>
          <Link href="/help">
            <span>Help</span>
          </Link>
        </li>
      </ul>

      <div id={navbarStyles.navbar_button_wrapper}>
      <Link href="/accounts/signup" className={navbarStyles.button}>
        <HiUserAdd />
        <span>Register</span>
      </Link>

      <Link href="/accounts/login" id={navbarStyles.login_button} className={navbarStyles.button}>
        <FiLogIn />
        <span>Login</span>
      </Link>

      <button>
        <FaLanguage />
      </button>
      </div>
    </nav>

    
  );
}
