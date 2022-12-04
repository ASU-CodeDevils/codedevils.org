import Link from "next/link";
import Image from "next/image";

//** Navbar component */
export default function Navbar() {
  return (
    <nav
      className="font-mono relative flex h-16 items-center justify-start bg-asu-maroon text-lg text-white shadow-sm"
      role="navigation"
    >
      <Link href="/">
        <a className="ml-5">
          <Image
            src="/logo-light.png"
            alt="CodeDevils Logo"
            width="100"
            height="41"
          />
        </a>
      </Link>

      <div className="ml-4">
        <Link href="/">
          <a className="p-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="p-4">About</a>
        </Link>
        <Link href="/contact">
          <a className="p-4">Contact</a>
        </Link>
        <Link href="/help">
          <a className="p-4">Help</a>
        </Link>
      </div>
    </nav>
  );
}
