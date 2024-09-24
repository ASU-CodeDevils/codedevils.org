import type { Metadata, NextPage } from 'next';

import { Hero, Section, SupportSection } from '~/components/ui/sections';
import { ExternalLink } from '~/components/ui/buttons';
import { socialLinks } from '~/utils/staticdata';

export const metadata: Metadata = {
  title: 'Getting Started',
  description:
    'Learn how to join CodeDevils and become part of our vibrant software development community. Find out what steps to take, what to expect, and how you can start contributing to projects and improving your coding skills.',
  openGraph: {
    title: 'Getting Started',
    description:
      'Learn how to join CodeDevils and become part of our vibrant software development community. Find out what steps to take, what to expect, and how you can start contributing to projects and improving your coding skills.',
  },
};

const getStarted: NextPage = () => {
  const { discord, sundevilsync, github } = socialLinks;
  return (
    <>
      <div className='w-full h-24' />
      <Hero className='bg-gray'>
        <article className='space-y-3 text-center'>
          <h1 className='gradient-text icon-sparkle rainbow text-3xl font-medium md:text-4xl'>
            Community
          </h1>
          <h2 className='mx-auto text-5xl font-bold md:w-2/3 md:text-6xl'>
            Welcome to the CodeDevils&apos; Community
          </h2>
          <p className='text-xl text-black/70 md:mx-auto md:w-7/12'>
            Learn from and connect with other developers.
          </p>
        </article>
      </Hero>

      <Section id='community'>
        <article className='space-y-3 text-center'>
          <h2 className='text-xl text-maroon'>Get involved</h2>
          <h3 className='text-4xl font-bold'>
            Engage with our thriving community
          </h3>
          <p className='mx-auto w-9/12 text-base'>
            We offer a rich online community where members can find their place
            with us. You can engage in insightful discussions, share knowledge,
            collaborate on projects, and create valuable connections with other
            members.
          </p>

          <ExternalLink href={discord} className='mx-auto'>
            Join our community
            <p className='sr-only'>
              on Discord to engage with our members and stay updated with our
              events and activities.
            </p>
          </ExternalLink>
        </article>

        <ul className='max-w-screeen-md mx-auto grid gap-y-4 md:grid-cols-3 md:gap-x-4'>
          <li className='space-y-4 rounded-xl bg-white p-6 shadow-xl'>
            <div className='space-y-1'>
              <h4 className='text-xl font-medium'>SunDevilSync</h4>
              <p>
                Register with us on SunDevilSync to stay updated with our events
                and activities.
              </p>
            </div>

            <ExternalLink href={sundevilsync}>
              Register with us
              <p className='sr-only'>
                on SunDevilSync to stay updated with our events and activities.
              </p>
            </ExternalLink>
          </li>

          <li className='space-y-4 rounded-xl bg-white p-6 shadow-xl'>
            <div className='space-y-1'>
              <h4 className='text-xl font-medium'>Github</h4>
              <p>Join our Github organization to contribute to our projects</p>
            </div>

            <ExternalLink href={github}>
              Join us on Github
              <p className='sr-only'>
                to contribute to our projects and collaborate with other
                members.
              </p>
            </ExternalLink>
          </li>

          <li className='space-y-4 rounded-xl bg-white p-6 shadow-xl'>
            <div className='space-y-1'>
              <h4 className='text-xl font-medium'>Newsletter</h4>
              <p>
                Subscribe to our newsletter to stay updated with our latest
                news.
              </p>
            </div>

            <ExternalLink href='https://forms.gle/hkqP2ZMuDrppxNsr8'>
              Subscribe now
              <p className='sr-only'>
                to our newsletter to stay updated with our latest news and
                events.
              </p>
            </ExternalLink>
          </li>
        </ul>
      </Section>

      <Section>
        <article className='space-y-3 text-center'>
          <h2 className='text-xl text-maroon'>Grow your skills</h2>
          <h3 className='text-4xl font-bold'>
            Learn and improve your skills with our resources
          </h3>
          <p className='mx-auto text-base md:w-9/12'>
            We offer a wide range of resources to help you grow your skills as a
            software developer. From courses to workshops, projects, and
            competitions, you&apos;ll find everything you need to succeed in
            your software development journey.
          </p>
        </article>

        <ul className='mx-auto grid max-w-screen-lg gap-6 md:grid-cols-2'>
          <li className='space-y-2 rounded-lg bg-white p-6 shadow-2xl'>
            <h4 className='text-2xl'>Courses</h4>
            <p className='text-base'>
              Get access to free courses on various topics to help you grow your
              skills and become the best verison of yourself as a developer.
            </p>
          </li>
          <li className='space-y-2 rounded-lg bg-white p-6 shadow-2xl'>
            <h4 className='text-2xl'>Workshops</h4>
            <p className='text-base'>
              Attend workshops to learn new technologies and tools from industry
              professionals.
            </p>
          </li>

          <li className='space-y-2 rounded-lg bg-white p-6 shadow-2xl'>
            <h4 className='text-2xl'>Projects</h4>
            <p className='text-base'>
              Take part in real-world projects to gain experience and build your
              portfolio up for future job opportunities.
            </p>
          </li>

          <li className='space-y-2 rounded-lg bg-white p-6 shadow-2xl'>
            <h4 className='text-2xl'>Competitions</h4>
            <p className='text-base'>
              Compete in our coding competitions to test your skills and win
              prizes.
            </p>
          </li>
        </ul>
      </Section>

      <SupportSection />
    </>
  );
};

export default getStarted;
