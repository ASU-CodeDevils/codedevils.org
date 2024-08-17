import React from 'react';
import type { NextPage, Metadata } from 'next';

import { InfiniteLogoCarousel } from '~/components/infiniteLogoCarousel';
import { Section, SupportSection } from '~/components/ui/sections';
import { ExternalLink, InternalLink } from '~/components/ui/buttons';

import { socialLinks } from '~/utils/staticdata';
import { Header } from '~/components/header';

export const metadata: Metadata = {
  title: 'CodeDevils',
  description:
    'Discover CodeDevils, a vibrant software development community at Arizona State University. Learn how we help members grow their coding skills and prepare for tech careers. Explore our programs, events, and resources.',
};

const HomePage: NextPage = () => {
  const { discord } = socialLinks;
  return (
    <>
      <Header>
        <article className='flex flex-col space-y-6 text-black'>
          <h1 className='text-5xl font-bold  md:text-6xl'>
            Take your coding skills to the next level.
          </h1>
          <p className='text-base font-extralight'>
            CodeDevils is the premier destination for Arizona State University
            students to elevate their software development skills, preparing
            them for success in the industry through hands-on workshops,
            projects, and mentorship.
          </p>
          <InternalLink href='/get-started'>
            Learn More
            <p className='sr-only'>
              to learn more about how you can get started with CodeDevils.
            </p>
          </InternalLink>
        </article>
      </Header>

      <Section>
        <InfiniteLogoCarousel />
      </Section>

      <Section>
        <article className='space-y-3 md:text-center'>
          <h2 className=' text-xl text-maroon'>What is CodeDevils?</h2>
          <h3 className='text-4xl font-bold md:mx-auto md:w-10/12'>
            Arizona State University&apos;s largest software development student
            organization.
          </h3>
          <p className=' text-base md:mx-auto md:w-9/12'>
            CodeDevils is a student organization at Arizona State University
            that is dedicated to helping students learn and grow as software
            developers. We offer a variety of resources and opportunities to
            help students improve their coding skills and prepare for careers in
            the tech industry. We stand on three pillars: Learn, Build, Network,
            all to help you succeed in your software development journey.
          </p>
        </article>

        <ul className='max-w-screeen-md mx-auto grid gap-y-4 md:grid-cols-3 md:gap-x-4'>
          <li className='space-y-4 rounded-xl bg-white p-6 shadow-xl'>
            <div className='space-y-1'>
              <h4 className='text-xl font-medium'>Learn</h4>
              <p>
                As we pride ourselves on being a learning organization, we offer
                members various opportunities to learn new technologies and
                tools through different workshops and courses.
              </p>
            </div>
          </li>

          <li className='space-y-4 rounded-xl bg-white p-6 shadow-xl'>
            <div className='space-y-1'>
              <h4 className='text-xl font-medium'>Build</h4>
              <p>
                We offer the unqiue opportunity to members to work on real-world
                projects to gain experience and build their portfolio.
              </p>
            </div>
          </li>

          <li className='space-y-4 rounded-xl bg-white p-6 shadow-xl'>
            <div className='space-y-1'>
              <h4 className='text-xl font-medium'>Network</h4>
              <p>
                With being ASU&apos;s largest software development student
                organization, we can offer members a huge platform for which
                they can connect with other students and industry professionals.
              </p>
            </div>
          </li>
        </ul>
      </Section>

      <Section>
        <article className='space-y-3 md:text-center'>
          <h2 className='text-xl text-maroon'>Why CodeDevils?</h2>
          <h3 className='text-4xl font-bold md:mx-auto md:w-10/12'>
            What makes CodeDevils unique?
          </h3>
          <p className='text-base md:mx-auto md:w-9/12'>
            CodeDevils is more than just a student organization. We are a
            community of passionate developers who are dedicated to helping each
            other learn and grow. Unlike other student organizations, including
            other software development clubs, we offer members with
            opportunities to work on real-world projects, attend workshops, and
            compete in coding competitions. Our community is full of experienced
            developers and alumni who are happy to help you learn new skills and
            answer any questions you may have.
          </p>
          <ExternalLink href={discord} className='center_link'>
            Join our community
            <p className='sr-only'>
              to join our Discord server and connect with other members.
            </p>
          </ExternalLink>
        </article>
      </Section>

      <SupportSection />
    </>
  );
};

export default HomePage;
