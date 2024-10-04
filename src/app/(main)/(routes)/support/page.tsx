import React from 'react';
import type { NextPage, Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { Hero, Section } from '~/src/app/components/ui/ContentWrappers';
import { FilledButton } from '~/src/app/components/ui/buttons';
import AccordionItem from '~/src/app/components/accordionItem';

import { socialLinks } from '~/src/app/utils/staticdata';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Need help with a technical issue or guidance on your software development journey? Visit the CodeDevils Support page for resources, FAQs, and expert assistance from our support team.',
  openGraph: {
    title: 'Support',
    description:
      'Need help with a technical issue or guidance on your software development journey? Visit the CodeDevils Support page for resources, FAQs, and expert assistance from our support team.',
  },
};

const ContactPage: NextPage = () => {
  const { discord, instagram, sundevilsync } = socialLinks;

  return (
    <>
      <div className='w-full h-24' />
      <Hero>
        <article className='space-y-3 text-center'>
          <h1 className='text-3xl text-maroon'>CodeDevils&apos; Support</h1>
          <h2 className='text-6xl font-bold'>How can we help you?</h2>
          <p className='text-xl text-black/70 md:mx-auto md:w-7/12'>
            Let&apos;s get the help you need to be the best programmer you can
            be.
          </p>
        </article>

        <ul className='mx-auto flex flex-col gap-y-4 md:grid md:w-10/12 md:grid-cols-3 md:gap-x-6'>
          <li className=' flex flex-col items-center justify-center gap-y-4 rounded-lg bg-white p-7 shadow-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={64}
              height={64}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-backpack'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z' />
              <path d='M10 6v-1a2 2 0 1 1 4 0v1' />
              <path d='M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4' />
              <path d='M11 10h2' />
            </svg>{' '}
            <Link
              href='#'
              className='cursor-not-allowed text-xl hover:underline'
            >
              CodeDevils&apos; Academy
              <span className='sr-only'>
                gives you access our online courses and other learning
                resources.
              </span>
            </Link>
            <p>
              <span className='font-bold text-maroon'>COMING SOON</span>
            </p>
          </li>
          <li className=' flex flex-col items-center justify-center gap-y-4 rounded-lg bg-white p-7 shadow-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={64}
              height={64}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2' />
              <path d='M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z' />
              <path d='M9 12h6' />
              <path d='M9 16h6' />
            </svg>
            <Link
              href='https://docs.codedevils.org'
              className='text-xl hover:underline'
            >
              Project Documentation
              <span className='sr-only'>
                are to understand our projects and get started with
                contributing.
              </span>
            </Link>
          </li>
          <li className=' flex flex-col items-center justify-center gap-y-4 rounded-lg bg-white p-7 shadow-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={64}
              height={64}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-mail'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
              <path d='M3 7l9 6l9 -6' />
            </svg>
            <Link
              href='mailto:support@codedevils.club'
              className='text-xl hover:underline'
            >
              Reach out to us
              <span className='sr-only'>by sending us an email.</span>
            </Link>
          </li>
        </ul>
      </Hero>

      <Section id='community' className='space-y-6'>
        <div className='space-y-6 md:grid md:grid-cols-2'>
          <div className='flex flex-col items-start justify-center space-y-6'>
            <article className='space-y-2'>
              <h2 className='text-xl text-maroon'>
                CodeDevils&apos; Community
              </h2>
              <h3 className='text-4xl font-bold '>
                Ask questions, share knowledge, and help solve problems.
              </h3>
              <p className='text-lg '>
                Join our community of developers, designers, and creators to
                share ideas, ask questions, and collaborate on projects.
              </p>
            </article>
            <FilledButton
              href={discord}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-6'
            >
              Community Discord
            </FilledButton>
          </div>{' '}
          <div className='flex items-center justify-center'>
            {' '}
            <Image
              src='/images/YIBCJK.png'
              alt='Community'
              width={500}
              height={500}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className='mx-auto max-w-screen-lg space-y-12'>
          <h2 className='text-center text-4xl font-bold'>Support FAQ</h2>

          <ul className='flex flex-col '>
            <li>
              <AccordionItem title='What types of events does CodeDevils organize?'>
                <p>
                  CodeDevils organizes a variety of events, including workshops,
                  hackathons, and networking events. Our events are open to
                  everyone, regardless of skill level or experience. Make sure
                  to follow us on{' '}
                  <Link
                    href={instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-maroon'
                  >
                    Instagram
                    <span className='sr-only'>
                      to stay updated on our events.
                    </span>
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={sundevilsync}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-maroon'
                  >
                    SunDevilSync
                    <span className='sr-only'>
                      to stay updated on our upcoming events and be counted as a
                      member.
                    </span>
                  </Link>{' '}
                  to stay updated on our upcoming events.
                </p>
              </AccordionItem>
            </li>

            <li>
              <AccordionItem title='What resources does CodeDevils provide to its members?'>
                <p>
                  CodeDevils provides a variety of resources to its members,
                  including access to our community{' '}
                  <Link
                    href={discord}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-maroon'
                  >
                    Discord
                    <span className='sr-only'>
                      to collaborate with other members and ask questions.
                    </span>
                  </Link>{' '}
                  server, workshops, courses and community projects where
                  members can get the opportunity to collaborate with other
                  members on real-world projects.
                </p>
              </AccordionItem>
            </li>

            <li>
              <AccordionItem title='How does the recruitment process work for leadership roles?'>
                <p>
                  CodeDevils recruits officers and project leads through an
                  application process. Interested members can apply for
                  leadership roles by submitting an application that outlines
                  their qualifications and experience. Head over to our{' '}
                  <Link href={'/careers'} className='text-maroon'>
                    careers
                    <span className='sr-only'>
                      to learn more about our current openings.
                    </span>
                  </Link>{' '}
                  page to learn more about our current openings.
                </p>
              </AccordionItem>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
