import { NextPage } from "next";

import Image from "next/image";

import { ExternalLink, InternalLink } from "~/components/ui/buttons";
import { Hero, Section, SupportSection } from "~/components/ui/sections";

const CareersPage: NextPage = () => {
  return (
    <>
      <Hero className="bg-gray">
        <article className="space-y-3 text-center">
          <h2 className="mx-auto text-5xl font-bold md:w-2/3 md:text-6xl">
            Join our team
          </h2>
          <p className="text-xl text-black/70 md:mx-auto md:w-7/12">
            Do you have a passion for helping others learn and grow? CodeDevils
            is always looking for new officers to help us grow and succeed.
          </p>
        </article>
      </Hero>

      <Section>
        <article className="space-y-3 md:text-center">
          <h3 className="text-xl text-maroon">Who are we</h3>
          <h2 className="mx-auto max-w-screen-lg text-3xl font-bold md:text-4xl">
            We aren&apos;t just some ordinary leadership team.
          </h2>
          <p className="mx-auto max-w-screen-md text-base">
            With every organization&apos;, there are always a few key
            individuals who help keep the organization running smoothly. Our
            leadership team is no different. We are a group of dedicated
            individuals who are passionate about helping others learn and grow.
            We are always looking for dedicated people to join our leadership
            team and help us succeed.
          </p>
          <ExternalLink
            href="https://forms.gle/Y4rSigaHGzA1XCJ16"
            className="center_link"
          >
            Apply Now
          </ExternalLink>
        </article>
      </Section>

      <div className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-screen-xl space-y-3">
          <article className="space-y-3 md:text-center">
            <h2 className="mx-auto max-w-screen-lg text-3xl font-bold md:text-4xl">
              Our Virtues
            </h2>
            <p className="mx-auto max-w-screen-md text-lg">
              As an organization who is dedicated to helping others learn and
              grow, we look for individuals who embody our core virtues of
              enabling members to Learn, Build, and Network. We are looking for
              individuals who are passionate about helping others learn and
              grow, who are team players, and who are dedicated to helping us
              succeed in our mission.
            </p>
          </article>

          <ul className="mx-auto flex max-w-screen-lg flex-col">
            <li className="flex flex-col-reverse gap-x-8 md:grid md:grid-cols-2">
              <article className="flex flex-col justify-center space-y-2">
                <h3 className="text-2xl font-medium">Open Collaboration</h3>
                <p className="">
                  We believe in the power of collaboration and open
                  communication. We work together to achieve our goals and help
                  each other grow.
                </p>
              </article>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/AFYHFT.png"
                  alt="Learn"
                  width={500}
                  height={400}
                />
              </div>
            </li>

            <li className="flex flex-col gap-x-8 md:grid md:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/GFJBVT.png"
                  alt="Learn"
                  width={500}
                  height={400}
                />
              </div>
              <article className="flex flex-col justify-center space-y-2">
                <h3 className="text-2xl font-medium">Outcome Driven</h3>
                <p className="">
                  We are outcome-driven and focused on achieving our goals. We
                  work together to achieve our goals and help each other grow
                  for our members. As ensuring have the best experience possible
                  is our top priority.
                </p>
              </article>
            </li>

            <li className="flex flex-col-reverse gap-x-8 md:grid md:grid-cols-2">
              <article className="flex flex-col justify-center space-y-2">
                <h3 className="text-2xl font-medium">
                  Passionate About Learning
                </h3>
                <p className="">
                  We are passionate about creating a culture of learning and
                  growing within our community. We are always looking for new
                  ways to help our members learn and grow. We also aim to create
                  a supportive environment where members can learn no matter
                  their skill level.
                </p>
              </article>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/IUYJVK.png"
                  alt="Learn"
                  width={500}
                  height={400}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Section>
        <ul className="mx-auto flex max-w-screen-lg flex-col gap-x-6 gap-y-4 md:grid md:grid-cols-2">
          <li className="flex items-center justify-center">
            <article className="space-y-3 text-left">
              <h2 className="text-4xl font-bold">
                Fully Remote — Work From Where You Are
              </h2>
              <p className="  text-base">
                We&apos;re a fully remote organization, with no physical
                premises. You can work from anywhere in the world, as long as
                you have an internet connection.
              </p>
              <InternalLink href={"/careers"}>Learn more</InternalLink>
            </article>
          </li>
          <li>
            <Image
              src="/images/MHYECJ.png"
              alt="Learn"
              width={500}
              height={500}
            />
          </li>
        </ul>
      </Section>

      <SupportSection />
    </>
  );
};

export default CareersPage;
