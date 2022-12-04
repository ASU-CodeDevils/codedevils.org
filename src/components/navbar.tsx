import Link from "next/link";

//** Navbar component */
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-16 bg-red-800 text-white relative shadow-sm font-mono" role="navigation">
            <Link href="/">
                <a className="pl-8">Home</a>
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link href="/help">
                    <a className="p-4">Help</a>
                </Link>
                <Link href="/about">
                    <a className="p-4">About</a>
                </Link>
                <Link href="/contact">
                    <a className="p-4">Contact</a>
                </Link>
            </div>
        </nav>
    )
}