import Link from "next/link";
import Image from "next/image";

//** Navbar component */
export default function Navbar() {
  return (
    <nav
      className="font-mono relative flex h-16 items-center justify-start bg-asu-maroon text-lg text-white shadow-sm"
      role="navigation"
    >
      <Link className="ml-5" href="/">
          <Image
            src="/logo-light.png"
            alt="CodeDevils Logo"
            width="100"
            height="41"
          />
      </Link>

      <div className="ml-4">
        <Link className="ml-4" href="/">Home
        </Link>
        <Link className="ml-4" href="/about">About
        </Link>
        <Link className="ml-4" href="/contact">Contact
        </Link>
        <Link className="ml-4" href="/help">Help
        </Link>
      </div>
    </nav>
  );
}
