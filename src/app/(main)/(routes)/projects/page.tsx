import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import './project-styles.css';
import { Section } from 'src/app/components/ui/ContentWrappers';
import { ExternalLink, InternalLink } from 'src/app/components/ui/buttons';
import { socialLinks } from 'src/app/utils/staticdata';
import getContent, { projectIDs } from './content';
import { Backpack, ChevronRight, FileOutput, Gamepad2, PanelsTopLeft, Smartphone, Square } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects Hub',
  description:
    'Discover open source projects at CodeDevils and learn how to get involved. Collaborate with fellow developers, gain real-world experience, and make a meaningful impact through open source contributions.',
  openGraph: {
    title: 'Projects Hub',
    description:
      'Discover open source projects at CodeDevils and learn how to get involved. Collaborate with fellow developers, gain real-world experience, and make a meaningful impact through open source contributions.',
  },
};

const projectsPage = () => {
  const { discord } = socialLinks;
  const projectDescs = getContent({projectID: 'all', contentID: 1, pageID: "project-hub" }) as React.ReactNode[];
  const projectTitles = getContent({projectID: 'all', contentID: 0, pageID: "project-hub" }) as React.ReactNode[];


  return (
    <>
      <div className='w-full h-24' />
      <Section>
        <article className='space-y-3 text-center'>
          <h2 className='mx-auto text-5xl font-bold md:w-5/6 md:text-6xl'>
            Our members are foundational to our projects
          </h2>
          <p className='text-xl text-black/70'>
            Here are their achievements.
          </p>
        </article>
      </Section>
        {/* Card */}
      <div
        className='relative flex h-[40rem] items-center justify-center'
      >
        
        <div className='flex flex-row h-full w-full gap-8'>
          <div className='md:flex hidden flex-col'>
            <div className='flex items-center justify-center h-[80px] w-[320px] rounded-t-lg 
            font-semibold text-2xl shadow-xl shadow-slate-700
            bg-gradient-to-r from-slate-950 to-zinc-800 text-white' >Git Activity</div>
            <div className=' h-[600px] w-[320px] rounded-b-lg
            shadow-lg shadow-slate-500 p-2
            bg-gradient-to-br from-slate-800 to-slate-900'>
              <ul>
                <li className='relative flex flex-col justify-center w-full h-16'>
                  <div className='absolute w-full h-full border-y border-slate-400 opacity-15' />
                  <p className='flex text-white opacity-80 hover:opacity-95 mx-2'>
                    No Activity yet...</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative flex flex-col justify-center items-center w-full h-full overflow-hidden
            bg-gradient-to-br from-zinc-100 to-zinc-200 text-black' >
              <p className='text-xl font-semibold'>Contributor Leaderboard</p>
              <p className='text-xl font-light'>Coming Soon...</p>
              <Link href="/projects/website" className='absolute flex group justify-center items-center rounded-2xl text-xl w-72 h-16 mb-4
                hover:bg-gradient-to-br hover:from-asumaroon-600 hover:to-asumaroon-800 bg-asumaroon
                cursor-pointer shadow-md shadow-zinc-500 mt-48 scale-75'>
                <p className='text-white text-center hover:underline'>Be a part of the Project!</p>
              </Link>
              
            <div className='absolute flex gap-2 justify-center items-center bg-[#f3bb0b] w-[140%] h-10 rotate-3 top-20 flex-wrap overflow-hidden'>
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>

            </div>
            <div className='absolute flex gap-2 justify-center items-center bg-[#f3bb0b] w-[140%] -translate-x-8 h-10 -rotate-2 bottom-12 flex-wrap overflow-hidden'>
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
              <Square className='text-black fill-black h-2' />
              <p className='text-black font-bebas text-2xl'>Under Construction</p>
            </div>

            </div>
          
        </div>
      </div>
      

      <Section className='bg-zinc-200 mt-16'>
        <article className='space-y-3 text-center'>
          
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


        {/* List of Project Titles.  Dynamically generated. */}
        <ul className='flex flex-col gap-8'>
          
          { projectDescs ? projectDescs.map((description, index) => (
            <li key={index} className='relative grid grid-cols-7 items-center bg-white h-36 px-4 py-4 rounded-3xl pr-20 group overflow-x-hidden' >
              <div className='w-48 h-full col-span-1' />
              <div className='flex flex-col col-span-6 h-full z-20'>
                
                <Link href={`/projects/` + projectIDs[index]}>
                  {projectTitles[index]}
                </Link>
              {description}
              </div>
              <ChevronRight className='absolute h-16 w-16 text-asumaroon-800 right-2 cursor-pointer' />
              <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent to-asumaroon/30
                              -translate-x-[100%] group group-hover:-translate-x-16 transition-transform duration-500
                              rounded-full' />
            </li>
          )) : <></> }
          
          
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

      

    </>
  );
};

export default projectsPage;
