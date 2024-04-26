import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '~/utils/cn';

export const Header = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-4 px-8 py-12'>
      <div className={cn(className)}>{children}</div>
      <div className='flex items-center'>
        <Image
          src={'/images/YLPWQK.png'}
          height={500}
          width={500}
          alt='CodeDevils code grid header background'
          className='hidden md:block'
          style={{ height: 'auto', width: 'auto' }}
          priority
        />
      </div>
    </div>
  );
};

export const HeaderTitle = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <h1 className={cn('text-5xl font-bold  md:text-6xl', className)}>
      {children}
    </h1>
  );
};

export const HeaderSubtitle = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  // the reason why the chidlren is wrapped in a article is because the children prop is a ReactNode, allowing for multiple elements(paragraphs, links, etc) to be passed in as children.
  return (
    <p className={cn('text-base font-extralight', className)}>{children}</p>
  );
};

export const HeaderButton = ({
  link,
  target,
  rel,
  children,
  className,
}: {
  link: string;
  children: string;
  target?: string;
  rel?: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={cn(
        'w-fit rounded-lg border border-maroon bg-maroon px-4 py-1 text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-gray',
        className
      )}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
};
