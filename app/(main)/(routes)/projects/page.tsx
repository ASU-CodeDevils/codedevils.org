import React from 'react';
import type { Metadata, NextPage } from 'next';
import Image from 'next/image';

import { Card } from '~/components/card';
import { Section, SupportSection } from '~/components/ui/sections';
import { ExternalLink, InternalLink } from '~/components/ui/buttons';

import { socialLinks } from '~/utils/staticdata';

export const metadata: Metadata = {
  title: "CodeDevils' Projects",
  description:
    'Discover open source projects at CodeDevils and learn how to get involved. Collaborate with fellow developers, gain real-world experience, and make a meaningful impact through open source contributions.',
};

const projectsPage: NextPage = () => {
  const { discord } = socialLinks;
  return (
    <>
      <Section>
        <article className='space-y-3 text-center'>
          <h1 className='text-3xl text-maroon'>Our Projects</h1>
          <h2 className='mx-auto text-5xl font-bold md:w-2/3 md:text-6xl'>
            Grow your resume with our open-source projects
          </h2>
          <p className='text-xl text-black/70'>
            Learn and improve your skills by contributing to our projects.
          </p>
        </article>

        {/* Card */}
        <div
          className='relative flex h-[35rem] items-center justify-center md:h-[50rem]' // md:h-[80rem]
        >
          <div
            className='relative w-full py-10 md:py-28'
            style={{
              perspective: '1000px',
            }}
          >
            <Card>
              <Image
                src={`/images/github.png`}
                alt='hero'
                height={720}
                width={1400}
                className='mx-auto hidden h-full rounded-2xl object-cover object-left-top md:block'
                draggable={false}
              />

              <Image
                src={`/images/github-mobile.png`}
                alt='hero'
                height={1280}
                width={1400}
                className='mx-auto block h-full rounded-2xl object-cover object-left-top md:hidden'
                draggable={false}
              />
            </Card>
          </div>
        </div>
      </Section>

      <Section className='bg-gray'>
        <article className='space-y-3 text-center'>
          <h2 className='text-2xl text-maroon'>Get involved</h2>
          <h3 className='text-4xl font-bold'>
            Contribute to our open-source projects
          </h3>
          <p className='mx-auto w-9/12 text-base'>
            Get involved with our open-source projects to build your portfolio
            up for future job opportunities. We have a variety of projects that
            you can contribute to help you grow your skills and gain real-world
            experience.
          </p>
        </article>

        <ul className='mx-auto flex max-w-screen-lg flex-col gap-y-8 md:grid md:grid-cols-3 md:gap-x-8'>
          <li className='flex flex-col justify-between space-y-4 rounded-lg bg-white px-6 py-12 text-center shadow-xl'>
            <div className='space-y-2'>
              <h4 className='text-xl font-medium'>CodeDevils&apos; Website</h4>
              <p className='text-base text-black/90'>
                The official CodeDevils&apos; website that you are currently
                viewing.
              </p>
            </div>
            <ExternalLink
              href='https://github.com/ASU-CodeDevils/codedevils.org'
              className='mx-auto'
            >
              View on GitHub
              <p className='sr-only'>
                to view the CodeDevils&apos; website repository.
              </p>
            </ExternalLink>
          </li>

          <li className='flex flex-col justify-between space-y-4 rounded-lg bg-white px-6 py-12 text-center shadow-xl'>
            <div className='space-y-2'>
              <h4 className='text-xl font-medium'>DevilBot</h4>
              <p className='text-base text-black/90'>
                A Bot written in Rust to provide utility and fun commands within
                our Discord server.
              </p>
            </div>
            <ExternalLink
              href='https://github.com/ASU-CodeDevils/discordo-rusto-boto'
              className='mx-auto'
            >
              View on GitHub
              <p className='sr-only'>to view DevilBot repository.</p>
            </ExternalLink>
          </li>

          <li className='flex flex-col justify-between space-y-4 rounded-lg bg-white px-6 py-12 text-center shadow-xl'>
            <div className='space-y-2'>
              <h4 className='text-xl font-medium'>
                Our React Components Library
              </h4>
              <p className='text-base text-black/90'>
                A Components Library that is used across all of our projects to
                maintain a consistent design system.
              </p>
            </div>
            <ExternalLink
              href='https://github.com/ASU-CodeDevils/CD-Library'
              className='mx-auto'
            >
              View on GitHub
              <p className='sr-only'>
                to view the React Components Library repository.
              </p>
            </ExternalLink>
          </li>
        </ul>
      </Section>

      <Section>
        <article className='space-y-3 text-center'>
          <h2 className='text-2xl text-maroon'>Get Started</h2>
          <h3 className='text-4xl font-bold'>
            Want to contribute to our projects, but you&apos;re new?
          </h3>
          <p className='mx-auto w-9/12 text-base'>
            No worries! We have a guide to help you get started with
            contributing to our projects. We welcome all skill levels to
            contribute to our projects.
          </p>
        </article>

        <div className='mx-auto flex max-w-screen-lg flex-col gap-y-6 md:grid md:grid-cols-2 md:gap-x-12'>
          <Image
            src='/images/YHFVJK.png'
            alt='GitHub'
            width={500}
            height={500}
            className=''
          />

          <ul className='flex flex-col gap-y-6'>
            <li className='flex flex-col gap-y-4 rounded-lg bg-gray px-4 py-6 text-base shadow-xl md:rounded-none md:bg-white md:p-0 md:shadow-none'>
              <div className='flex flex-col gap-y-2'>
                <h4 className='text-xl font-medium'>
                  Step 1: Join our Discord Server
                </h4>
                <p className=' text-black/90'>
                  Join our online community to stay up to date with our projects
                  and be involved in our discussions.
                </p>
              </div>
              <ExternalLink href={discord}>
                Join our Discord
                <p className='sr-only'>
                  to get involved with our community, projects, and access our
                  resources.
                </p>
              </ExternalLink>
            </li>

            <li className='flex flex-col gap-y-4 rounded-lg bg-gray px-4 py-6 text-base shadow-xl md:rounded-none md:bg-white md:p-0 md:shadow-none'>
              <div className='flex flex-col gap-y-2'>
                <h4 className='text-xl font-medium'>
                  Step 2: Talk to the project&apos;s lead
                </h4>
                <p className=' text-black/90'>
                  For whichever project you are interested in, talk to the lead
                  of the project to learn how to get started.
                </p>
              </div>
              <InternalLink href='/about#projectleads'>
                Meet our project leads
                <p className='sr-only'>
                  to learn more about our projects and how to get started with
                  them.
                </p>
              </InternalLink>
            </li>

            <li className='flex flex-col gap-y-4 rounded-lg bg-gray px-4 py-6 text-base shadow-xl md:rounded-none md:bg-white md:p-0 md:shadow-none'>
              <div className='flex flex-col gap-y-2'>
                <h4 className='text-xl font-medium'>
                  Step 3: Read our Project Documentation
                </h4>
                <p className=' text-black/90'>
                  Each project has its own documentation to help you get started
                  with contributing. Make sure to read it before you start.
                </p>
              </div>
              <ExternalLink href={'https://docs.codedevils.org/'}>
                View our Documentation
                <p className='sr-only'>
                  to understand our projects and get started with contributing.
                </p>
              </ExternalLink>
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className='flex flex-col items-center gap-6 md:grid md:grid-cols-2'>
          <article className='space-y-3 text-left'>
            <h2 className='text-2xl text-maroon'>Have a project idea?</h2>
            <h3 className='text-4xl font-bold'>
              Want to start a project with us?
            </h3>
            <p className='text-base'>
              We are always looking for new project ideas to work on. If you
              have a project idea that you want to work on with us, let us know
              and we can help you get started.
            </p>
            <ExternalLink
              href={
                'https://codedevils.notion.site/Project-Proposal-Guide-3d0fd1768faa4afa81a880a18e0d60bc?pvs=4'
              }
            >
              Learn more
              <p className='sr-only'>
                about how you can propose a project idea to us.
              </p>
            </ExternalLink>
          </article>
          <Image
            src='/images/WEVHIK.png'
            alt='Project Idea'
            width={500}
            height={500}
            className='rounded-lg object-cover'
          />
        </div>
      </Section>

      <SupportSection />
    </>
  );
};

export default projectsPage;
