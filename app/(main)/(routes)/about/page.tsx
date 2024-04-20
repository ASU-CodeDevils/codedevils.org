"use client";
import React from "react";

import { IconLeaf, IconHammer, IconBrandAsana } from "@tabler/icons-react";

import { HoverEffect } from "~/components/ui/card-hover-effect";

import { Hero, Section, SupportSection } from "~/components/ui/sections";
import { InternalLink } from "~/components/ui/buttons";

import { officers, projectLeads } from "~/utils/staticdata";

export default function AboutPage() {
  return (
    <>
      <Hero className="bg-gray">
        <article className="space-y-3 text-center">
          <h1 className="mx-auto text-5xl font-bold md:w-2/3 md:text-6xl">
            Our Organization
          </h1>
          <p className="text-xl text-black/70">
            Learn who we our and what we stand for.
          </p>
        </article>
      </Hero>

      <Section>
        <article className="space-y-3">
          <h2 className="text-xl text-maroon">Join our Team</h2>
          <h3 className="text-4xl font-bold">
            Find your group with CodeDevils
          </h3>
          <p className="text-base">
            Do you have a passion for helping others learn and grow? Are you a
            team player who enjoys collaborating with others? If so, we want you
            to join our team! CodeDevils is always looking for new officers to
            help us grow and succeed.
          </p>
          <InternalLink href={"/careers"}>
            Learn more
            <p className="sr-only">about how you can join our team</p>
          </InternalLink>
        </article>
      </Section>

      <Section className="bg-gray">
        <article className="space-y-3">
          <h2 className="text-xl text-maroon">Our Mission</h2>
          <h3 className="text-4xl font-bold">
            Understanding what we are all about
          </h3>
          <p className="text-base">
            CodeDevils is an inclusive virtual software development organization
            that aims to bring together coding enthusiasts of all skill levels
            to learn, build, and network. Our mission is to provide a welcoming
            environment for members to grow their skills and succeed in their
            software development journey.{" "}
          </p>
        </article>

        <ul className="grid gap-6 md:grid-cols-3">
          <li className="space-y-2">
            <IconLeaf color="maroon" size={44} stroke={1.5} />
            <h4 className="text-2xl">Learn</h4>
            <p className="text-base">
              We offer a variety of workshops and resources to help you learn
              new skills and technologies.
            </p>
          </li>

          <li className="space-y-2">
            <IconHammer color="maroon" size={44} stroke={1.5} />
            <h4 className="text-2xl">Build</h4>
            <p className="text-base">
              Our members work on a variety of projects to build their skills
              and gain real-world experience.
            </p>
          </li>

          <li className="space-y-2">
            <IconBrandAsana color="maroon" size={44} stroke={1.5} />
            <h4 className="text-2xl">Network</h4>
            <p className="text-base">
              Connect with other members to collaborate on projects, share
              ideas, and learn from each other.
            </p>
          </li>
        </ul>
      </Section>

      <Section>
        <article className="space-y-3">
          <h2 className="text-xl text-maroon">Our History</h2>
          <h3 className="text-4xl font-bold">
            Our journey and how it all started
          </h3>
          <p>
            Early on, students through Arizona State University&apos;s online
            campus realized that there wasn&apos;t any software development
            organization they could take part in. So they took the initiative to
            build a platform where students could participate, contribute to
            projects, learn new skills, and network with others. Thus,
            CodeDevils was born. Over time, CodeDevils grew into a platform
            where anyone could join to enhance their software development
            skills, evolving into a hub where students can learn, build, and
            network.
          </p>
          <p className="">
            We&apos;ve heard CodeDevils described as a &quot;hidden gem&quot; of
            organizations at ASU. We&apos;re proud to be told that and of all
            the work we&apos;ve done to help students grow their skills and
            succeed in their software development journey. Both current and past
            leadership teams are always happy to hear and see CodeDevils members
            succeeding in their careers. At its core, CodeDevils is a platform
            for people to grow and improve their software development skills for
            a future career in the tech industry.
          </p>

          <p>
            But we didn&apos;t become like this overnight. Through dedicated and
            hardworking individuals, we&apos;ve been able to grow and build a
            platform capable of helping students of all skill levels become
            successful software developers. For this, we are proud of all the
            work we&apos;ve done to help students grow their skills and succeed
            in their software development journey.
          </p>
          <InternalLink href="/careers">
            Contribute to our journey
            <p className="sr-only">
              by joining our team and helping us grow and succeed.
            </p>
          </InternalLink>
        </article>
      </Section>

      <Section id="leadership">
        <article className="space-y-3">
          <h2 className="text-xl text-maroon">Our Leadership</h2>
          <h3 className="text-4xl font-bold">Meet the CodeDevils Officers</h3>
          <p className="text-base">
            Our officers are dedicated to helping you grow your skills and
            succeed in your software development journey. Meet the team that
            makes CodeDevils possible.
          </p>
        </article>

        <HoverEffect items={officers} />
      </Section>

      <Section id="projectleads">
        <article className="space-y-3">
          <h2 className="text-xl text-maroon">Our Project Leads</h2>
          <h3 className="text-4xl font-bold">
            Meet our talented Project Leads
          </h3>
          <p className="text-base">
            Our Project Leads are experts in their field and are here to help
            our members grow their skills and succeed in their software
            development journey. Meet the team that makes CodeDevils&apos;
            projects possible.
          </p>
        </article>

        <HoverEffect items={projectLeads} />
      </Section>

      <SupportSection />
    </>
  );
}
