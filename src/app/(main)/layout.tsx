import { Inter } from 'next/font/google';
import '~/src/app/globals.css';
import { Bebas_Neue } from 'next/font/google';
import { metadata, viewport } from '../utils/metadata';
export { metadata, viewport };

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });


const bebas_neue_init = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});


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
      <body className={`flex h-screen flex-col ${inter.className} ${bebas_neue_init.variable}`}>
        
        <Navbar />
        <main className='mx-auto w-full max-w-screen-2xl'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
