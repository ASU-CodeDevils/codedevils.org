import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import Button from "~/components/Button";
import Card from "~/components/Card";
import OfficerCard from "~/components/OfficerCard";
import Header from "~/components/Header";

import { BsGrid3X3Gap } from "react-icons/bs";
import { MdCastForEducation, MdCreateNewFolder } from "react-icons/md";
import {
  FaNetworkWired,
  FaGithub,
  FaRegStar,
  FaArrowRight,
} from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

import { officers } from "~/utils/staticdata";

type Project = {
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  archived: boolean;
  stargazers_count: number;
  updated_at: string;
};

export const getStaticProps = (async () => {
  const projectRes = await fetch(
    "https://api.github.com/users/ASU-CodeDevils/repos"
  );
  const project = await projectRes.json();

  project.sort((a: Project, b: Project) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  return { props: { project } };
}) satisfies GetStaticProps<{
  project: Project[];
}>;

export default function AboutPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header>
        <h1 className="text-6xl sm:text-7xl">About</h1>
        <p className="text-xl md:w-1/2">
          CodeDevils aims to provide ASU students with an organization designed
          to encourage and promote involvement in coding projects and
          competitions through an exclusively online setting.
        </p>
      </Header>

      <div className="md:pty-16 grid gap-4 bg-gray-700 py-0 lg:grid-cols-2">
        <div className="mx-auto mx-auto my-auto h-fit space-y-6 bg-white px-4 py-4 md:w-11/12 md:px-12 md:shadow-lg">
          <h2 className=" flex flex-col text-5xl">
            <span>Our</span> <span>Organzation&apos;s</span>{" "}
            <span>History</span>
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              CodeDevils was found in 2016 as a fully-virtual student
              organization. We pride ourselves in giving our members the tools
              needed to be successful in their cirriculum and have a competitive
              edge in the industry after graduating.
            </p>
            <p>
              CodeDevils isn&apos;t your traditional club; we are one of
              ASU&apos;s first organizations that caters to online students. We
              aim to further ASU&apos;s mission to maintaining the lead in
              innovation by successfully organizing and cultivating a rich
              student community existing exclusively online. Meetings, projects,
              guest speakers, and competitions are all organized and conducted
              virtually. Although we utilizes exclusively digital forms of
              communication to involve members and foster interaction, we do
              welcome all ASU students regardless of how you attend.{" "}
            </p>
            <p>
              We offer unique opportunities for all ASU students interested in
              software development and tech in general. Those opportunities
              include exclusive workshops with industry insiders, guest speakers
              from big name companies and prestigious institutions, weekly
              HackerRank challenges, online hackathons, and the opportunity to
              collaborate on resume-worthy projects (as well as weekly study
              sessions with fun and nerdy study breaks!)
            </p>
          </div>
        </div>

        <ul className="grid-cols-2 grid-rows-2 gap-4 pb-32 pt-6 md:grid">
          <li className="mx-auto my-auto flex items-center justify-center bg-white transition-transform duration-200	md:h-full md:w-[95%] md:hover:scale-105">
            <Card>
              <div className="space-y-2 ">
                <BsGrid3X3Gap className="text-6xl text-maroon" />
                <h1 className="text-xl font-bold">Project Based</h1>
                <p className="text-base">
                  CodeDevils is all about hands-on learning through projects.
                  Dive into coding challenges and real-world applications to
                  boost your skills. Join a collaborative space where
                  creativity, problem-solving, and teamwork thrive. Elevate your
                  tech expertise with practical experience at CodeDevils.
                </p>
              </div>
            </Card>
          </li>

          <li className="mx-auto my-auto flex items-center justify-center bg-white transition-transform duration-200	md:h-full md:w-[95%] md:translate-y-16 md:hover:scale-105 ">
            <Card>
              <div className="space-y-2 ">
                <MdCastForEducation className="text-6xl text-maroon" />
                <h1 className="text-xl font-bold">Free Courses</h1>
                <p className="text-base">
                  CodeDevils offers free courses for members to upskill or learn
                  new software development abilities. Accessible to all skill
                  levels, our diverse range of courses ensures everyone can
                  enhance their expertise without any cost. Join us to empower
                  your software development journey at no expense.
                </p>
              </div>
            </Card>
          </li>

          <li className="mx-auto my-auto flex items-center justify-center bg-white transition-transform duration-200	md:h-full md:w-[95%] md:hover:scale-105">
            <Card>
              <div className="space-y-2  ">
                <FaNetworkWired className="text-6xl text-maroon" />
                <h1 className="text-xl font-bold">Networking Opportunities</h1>
                <p className="text-base">
                  Unlock exceptional networking opportunities with CodeDevils!
                  Our platform not only enhances your visibility to recruiters
                  but also provides exclusive company sponsorships. Join our
                  vast community to connect with industry professionals, opening
                  doors to career growth and valuable connections. Elevate your
                  professional presence and seize networking opportunities that
                  CodeDevils uniquely offers, propelling your career to new
                  heights.
                </p>
              </div>
            </Card>
          </li>

          <li className="mx-auto my-auto flex items-center justify-center bg-white transition-transform duration-200	hover:scale-105	md:h-full md:w-[95%]	md:translate-y-16">
            <Card>
              <div className="space-y-2 ">
                <RiCommunityLine className="text-6xl text-maroon" />
                <h1 className="text-xl font-bold">Community</h1>
                <p className="text-base">
                  Welcome to CodeDevils, where our vibrant community thrives on
                  inclusivity! Everyone is welcome to join our diverse and
                  supportive club. Whether you&apos;re a seasoned coder or just
                  starting out, our inclusive atmosphere fosters collaboration
                  and shared learning. At CodeDevils, we believe in the strength
                  of unity, and together, we create an environment that values
                  every individual. Join our community to experience the warmth
                  of inclusivity as we learn and grow together in the world of
                  coding.
                </p>
              </div>
            </Card>
          </li>
        </ul>
      </div>

      <div id="leadership" className="bg-white py-28">
        <h1 className="mx-auto px-8 text-5xl text-maroon md:text-center  md:text-7xl">
          Meet the Officer Team
        </h1>
        <ul className="mx-auto grid gap-4 bg-transparent md:w-fit md:grid-cols-2 md:p-8 lg:grid-cols-3 xl:grid-cols-4">
          {officers.map((officer, idx) => {
            return (
              <li key={idx} className="mx-auto w-10/12 md:w-full">
                <OfficerCard officerInfo={officer} />
              </li>
            );
          })}
        </ul>
      </div>

      <div id="community" className="bg-gray-700 py-28 lg:py-40">
        <div className="mx-auto flex w-11/12 grid-cols-2 flex-col gap-4  lg:grid ">
          <article className="space-y-8 text-left text-2xl ">
            <h1 className="text-left text-6xl text-maroon  md:text-7xl">
              Our Online Community
            </h1>{" "}
            <div className="mx-auto flex justify-center lg:hidden">
              <Image
                src={"/images/discord.jpeg" as string}
                className="rounded-xl"
                width={500}
                height={500}
                alt="Discord Community"
              />
            </div>
            <p className="text-xl">
              CodeDevils has established a thriving online community through our
              dedicated Discord server. This digital space serves as the heart
              of our interconnected ecosystem, where members converge to access
              a multitude of resources and engage with fellow enthusiasts. By
              joining our Discord server, you unlock a gateway to a wealth of
              knowledge and opportunities for collaboration. Seamlessly bridging
              the gap between members, our voice channels host engaging
              workshops and meetings, allowing real-time interactions and
              discussions. This online hub is not just a platform; it&apos;s a
              dynamic space where the CodeDevils community comes alive,
              fostering connections, knowledge sharing, and collective growth.
              Elevate your CodeDevils experience by joining our Discord
              community and staying seamlessly connected with our vibrant
              network.
            </p>
            <div className="">
              <Button
                href={"https://discord.gg/eevXKjVmm2"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Discord
                <div className="sr-only">
                  Click here to join our Discord server
                </div>
              </Button>
            </div>
          </article>
          <div className="mx-auto hidden lg:flex">
            <Image
              src={"/images/discord.jpeg" as string}
              className="rounded-xl"
              width={500}
              height={500}
              alt="Discord Community"
            />
          </div>
        </div>
      </div>

      <div id="projects" className="mx-auto w-11/12 space-y-4 py-28 lg:py-40">
        <h1 className="text-6xl text-maroon md:text-center md:text-7xl">
          Our Projects
        </h1>
        <article className="mx-auto text-left text-xl md:text-center">
          <p>
            A huge part of CodeDevils is our projects. We are pround to offer
            members a variety of open source projects to help them grow their
            skills. Check out some of our on-going and past projects.
          </p>
        </article>
        <ul className="grid grid-cols-1 gap-4 bg-transparent  md:mx-auto md:w-11/12 md:grid-cols-2 md:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3">
          {project
            .filter((project: Project) => {
              return project.archived !== true;
            })
            .slice(0, 12)
            .map((project: Project, idx: number) => {
              return (
                <li
                  key={idx}
                  className="h-42 transition-transform hover:scale-105 md:h-full	"
                >
                  <Card>
                    <div className="flex h-full flex-col items-center justify-between text-black transition-colors hover:text-maroon">
                      <div className="flex w-full justify-between">
                        <h1 className="text-base font-bold uppercase">
                          {/* remove - and _  from project names for website display */}
                          {project.name
                            .split("-")
                            .join(" ")
                            .split("_")
                            .join(" ")}
                        </h1>
                        {project.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <p className="text-lg text-black">
                              {project.stargazers_count}
                            </p>
                            <FaRegStar className=" text-black" />
                          </div>
                        )}
                      </div>

                      <div className="flex w-full grow justify-between">
                        <p className="text-base text-black ">
                          {project.description}
                        </p>

                        <div className="flex w-fit flex-col gap-2 ">
                          {!project.archived && (
                            <Link
                              href={project.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Project's GitHub Repository"
                              className="flex h-12 w-12 items-center justify-center rounded-full text-3xl text-maroon transition-colors hover:text-black"
                            >
                              <FaGithub />
                              <div className="sr-only">
                                Click here to visit the project&apos;s GitHub
                                repository.
                              </div>
                            </Link>
                          )}
                          {project.homepage && project.archived !== true && (
                            <Link
                              href={project.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Project's Website"
                              className="flex h-12 w-12 items-center justify-center rounded-full text-3xl text-maroon transition-colors hover:text-black"
                            >
                              <TbWorld />
                              <div className="sr-only">
                                Click here to visit the project&apos;s website.
                              </div>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>
              );
            })}
        </ul>

        <div className="flex justify-center pb-4">
          <Link
            href="https://github.com/ASU-CodeDevils"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl font-black uppercase text-black transition-colors hover:text-maroon"
          >
            See More of our Projects
            <div className="sr-only">
              Click here to navigate to our GitHub organization page to see more
              of our projects.
            </div>
          </Link>
        </div>

        <div className="mx-auto my-12 w-11/12 md:w-9/12">
          <Card>
            <div className="grid md:grid-cols-2">
              <div className="space-y-4 p-4 text-left md:border-r-2 md:border-gray-400">
                <IoPersonOutline className="text-4xl text-maroon" />
                <div className="flex items-center gap-2 text-xl text-black transition-colors hover:text-maroon">
                  <Link
                    href={"#community"}
                    className="text-xl font-bold uppercase "
                  >
                    Join as a Member
                    <div className="sr-only">
                      Click here to navigate to the learn how to join as our
                      community.
                    </div>
                  </Link>
                  <FaArrowRight />
                </div>
                <p>
                  Want to join one of our projects? Become a member of
                  CodeDevils Discord server and get access to our projects and
                  resources to help grow your skills.
                </p>
              </div>
              <div className="space-y-4 p-4 text-left">
                <MdCreateNewFolder className="text-4xl text-maroon" />
                <div className="flex items-center gap-2 text-xl text-black transition-colors hover:text-maroon">
                  <Link
                    href={
                      "https://codedevils.notion.site/Project-Proposal-Guide-3d0fd1768faa4afa81a880a18e0d60bc?pvs=4"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold uppercase "
                  >
                    Submit a Project
                    <div className="sr-only">
                      Click here to navigate to the project proposal guide.
                    </div>
                  </Link>
                  <FaArrowRight />
                </div>
                <p>
                  Have a project idea? Submit a proposal to officer board
                  through these steps and get our sponsorship. We provide
                  assistance and insight to help you develop your project and
                  make it a reality.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
