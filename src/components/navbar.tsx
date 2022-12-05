import Link from "next/link";
import Image from "next/image";

//** Navbar component */
export default function Navbar() {
  return (
    <nav
      className="font-mono relative flex h-16 items-center justify-start bg-asu-maroon px-5 text-lg text-white shadow-sm"
      role="navigation"
    >
      <Link className="mx-3" href="/">
        <Image
          src="/logo-light.png"
          alt="CodeDevils Logo"
          width="100"
          height="41"
        />
      </Link>
      <Link className="pl-5 hover:text-asu-gold" href="/">
        Home
      </Link>
      <Link className="pl-5 hover:text-asu-gold" href="/about">
        About
      </Link>
      <Link className="pl-5 hover:text-asu-gold" href="/contact">
        Contact
      </Link>
      <Link className="pl-5 hover:text-asu-gold" href="/help">
        Help
      </Link>
    </nav>
  );
}
