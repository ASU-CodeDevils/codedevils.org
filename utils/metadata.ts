import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CodeDevils @ Arizona State University',
    default: 'CodeDevils | Arizona State University',
  },
  metadataBase: new URL('https://www.codedevils.io'),
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
  openGraph: {
    title: 'CodeDevils | Arizona State University',
    description:
      "Grow your software development skills with CodeDevils, Arizona State University's largest software development student organization. Learn, build, and network with us!",
    type: 'website',
    url: 'https://www.codedevils.io',
    locale: 'en_US',
    images: [
      {
        url: 'https://codedevils.io/og.png',
        width: 1362,
        height: 482,
        alt: "CodeDevils' openGraph image",
      },
    ],
  },
  icons: {
    shortcut: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
