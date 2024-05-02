import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '~/components/navbar';
import Footer from '~/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Arizona State University',
    default: 'CodeDevils | Arizona State University',
  },
  metadataBase: new URL('https://www.codedevils.org'),
  description:
    "Grow your software development skills with CodeDevils, Arizona State University's largest software development student organization. Learn, build, and network with us!",
  keywords: [
    'codedevils',
    'arizona state university student organizations',
    'arizona state university clubs and student organizations',
    'arizona state university clubs',
    'arizona state university clubs and organizations',
    'arizona state university student clubs',
    'asu clubs and organizations',
    'asu clubs',
    'clubs at asu',
    'asu student clubs',
    'asu online clubs',
    'asu tempe clubs',
    'list of asu clubs',
    'coding clubs at arizona state university',
    'software development clubs at arizona state university',
    'asu coding clubs',
    'asu clubs for students',
    'software development clubs at asu',
    'coding clubs at asu',
  ],
  robots: 'index, follow',
  authors: [{ name: "CodeDevils' Website Team" }],
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'CodeDevils | Arizona State University',
    description:
      "Grow your software development skills with CodeDevils, Arizona State University's largest software development student organization. Learn, build, and network with us!",
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://codedevils.org/og.png',
        width: 1362,
        height: 482,
        alt: "CodeDevils' openGraph image",
      },
    ],
  },
  icons: {
    shortcut: '/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`mx-auto flex h-screen flex-col flex-nowrap bg-white text-black`}
    >
      <body className={`flex h-screen flex-col ${inter.className}`}>
        <Navbar />
        <div className='mx-auto w-full max-w-screen-2xl'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
