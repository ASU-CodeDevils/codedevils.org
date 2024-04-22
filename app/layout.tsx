import { type Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeDevils - Learn, Build, and Network",
  description:
    "CodeDevils is Arizona State University's largest software development student organization that aims to provide members with learning opportunities like no other so that they can learn, build, and network together to succeed through their software development journey. We provide a welcoming environment for members of all skill levels to grow their skills.",

  keywords: [
    "CodeDevils",
    "ASU",
    "Arizona State University",
    "Software Development",
    "Student Organization",
    "Learn",
    "Build",
    "Network",
  ],

  robots: "index, follow",
  authors: [{ name: "CodeDevils' Website Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "CodeDevils - Learn, Build, and Network",
    description:
      "CodeDevils is Arizona State University's largest software development student organization that aims to provide members with learning opportunities like no other so that they can learn, build, and network together to succeed through their software development journey. We provide a welcoming environment for members of all skill levels to grow their skills.",
    type: "website",
    locale: "en_US",
    siteName: "codedevils.org",
    images: [
      {
        url: "https://codedevils.org/og.png",
        width: 1362,
        height: 482,
        alt: "CodeDevils' openGraph image",
      },
    ],
  },
  icons: {
    shortcut: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`mx-auto flex h-screen flex-col flex-nowrap bg-white text-black`}
    >
      <body className={`flex h-screen flex-col ${inter.className}`}>
        <Navbar />
        <div className="mx-auto w-full max-w-screen-2xl">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
