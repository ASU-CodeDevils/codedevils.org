import React from "react";
import { NextPage } from "next";

import Typewriter from "typewriter-effect";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MenuLayout from "~/components/menu/layout";
import Header from "~/components/Header";

import { FaGithub, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import Card from "~/components/Card";
import Button from "~/components/Button";
import SocialIcon from "~/components/SocialIcon";

const HomePage: NextPage = () => {
  return (
    <>
      <Header>
        <h1 className="md:text-7xl">
          CodeDevils - An ASU Student Organization{" "}
          <span className="">
            <Typewriter
              options={{
                strings: ["Develop.", "Create.", "Network."],
                autoStart: true,
                delay: 50,
                cursor: "|",
                loop: true,
              }}
            />
          </span>
        </h1>
      </Header>

      <div className="isolate mb-16 -space-y-64 md:-space-y-20">
        <div className="flex h-96	w-full flex-col gap-2 bg-black pt-10 text-center text-white md:h-36 md:flex-row md:justify-center  md:pt-6">
          Stay up to date on CodeDevils news by{" "}
          <Link
            href="https://www.notion.so/team/251eda10-cc98-427e-914b-9a0f1da82168/join"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            following our newsletter!
            <div className="sr-only">Click here to see our newsletter</div>
          </Link>
        </div>
        <div className=" mx-4 grid h-fit rounded bg-white mix-blend-lighten shadow-lg md:mx-auto   md:w-10/12 md:grid-cols-3 md:space-y-0  ">
          <div className="relative  border-b-[1px] px-8 py-6 text-left	 transition-transform  duration-200 md:border-b-0	 md:border-r-[1px]">
            <h2 className="text-2xl font-bold">Community</h2>
            <p className="mb-8 mt-4">
              Join our community to connect with other members, ask questions,
              and get help with coding problems. We have channels for general
              discussion, coding help, and more.
              <br />
              <br />
              We also host events and workshops to help members learn new skills
              and meet other members. We have a variety of events, from social
              to technical.
              <br />
              <br />
              We also have a projects to help members learn from other members
              and work on growing their skills.
            </p>
            <Link
              href={"/about#community"}
              className="absolute bottom-0 flex items-center gap-2 pb-3 text-maroon"
            >
              Learn More <FaArrowRight />
              <div className="sr-only">
                Click here to learn more about our community
              </div>
            </Link>
          </div>

          <div className="relative  border-b-[1px] px-8 py-6 text-left	 transition-transform  duration-200 md:border-b-0	 md:border-r-[1px]">
            <h2 className="text-2xl font-bold">Code</h2>
            <p className="mb-8 mt-4">
              Work on exclusive CodeDevils projects and coding competitions.
              <br />
              <br />
              Projects are an opportunity for members to collaborate on coding
              projects. Anyone can propose an idea for a project, and a project
              can be anything that involves coding in some way (regardless of
              language or platform).
              <br />
              <br />
              Coding competitions are hosted each semester on HackerRank and our
              Discord server. Challenges range from easy to hard problems that
              may be solved using any supported programming language and give
              members a chance to win some swag while showing off their skills.
            </p>
            <Link
              href={"/about#projects"}
              className="absolute bottom-0 flex items-center gap-2 pb-3 text-maroon"
            >
              Learn More <FaArrowRight />
              <div className="sr-only">
                Click here to learn more about our projects and coding
                competitions
              </div>
            </Link>
          </div>

          <div className=" relative	px-8 py-6 text-left transition-transform  duration-200	  ">
            <h2 className="text-2xl font-bold">Compete</h2>
            <p className="mb-8 mt-4">
              Coding competitions are hosted each semester on HackerRank.
              <br />
              <br />
              Challenges range from easy to hard problems that may be solved
              using any supported programming language. <br />
              <br />
              These are a great opportunity to try out problem solving in a
              programming language you are trying to learn or showing off your
              skills! At the end of the term you could win some swag!
            </p>
            <Link
              href={"/about#community"}
              className="absolute bottom-0 flex items-center gap-2 pb-3 text-maroon"
            >
              Learn More <FaArrowRight />
              <div className="sr-only">
                Click here to learn more about our coding competitions
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 py-28">
        <div className="mx-auto w-11/12 space-y-4 pb-6 md:w-full md:p-6">
          <div className=" flex flex-col text-center text-black">
            <h1 className=" text-5xl ">Welcome to CodeDevils</h1>
            <p className="text-2xl">
              Welcome to CodeDevils - We are an ASU student run organization.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="md:w-8/12">
              <Card>
                <div className=" h-[32rem] md:h-72 md:min-h-fit  ">
                  <MenuLayout
                    tabs={{
                      amount: 2,
                      tabs: [
                        {
                          title: "What's New?",
                          text: "Level up your skills with CodeDevils! 🚀 Exciting news: we now offer courses on our Discord server! From coding basics to advanced techniques, our expert-led sessions cater to all levels. Join us for interactive learning, connect with pros, and supercharge your career—all on Discord.",
                          picture: "/images/blog-post-3.webp",
                        },
                        {
                          title: "Events",
                          text: "Get ready for the ultimate coding thrill with CodeDevils! 🚀 Exciting news: we've launched Code Challenges exclusively on our Discord community. Sharpen your coding prowess, tackle real-world problems, and compete with fellow enthusiasts. It's the perfect opportunity to test your skills, learn, and have a blast! Don't miss out—head to our Discord and join the coding excitement now. Challenge accepted? Let's code together! 💻🔥",
                          picture: "/images/blog-post-1.webp",
                        },
                      ],
                      cols: 2,
                    }}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-28 text-white">
        <div className="mx-auto w-10/12 space-y-4 py-16 md:w-8/12 ">
          <h1 className="text-center text-4xl font-extrabold uppercase text-maroon md:text-7xl">
            Our Mission
          </h1>
          <p className="text-center text-xl text-maroon/90 md:text-2xl">
            CodeDevils is an inclusive online student organization at Arizona
            State University dedicated to fostering a vibrant community of
            students united by their passion for software development. Our
            mission is to provide a collaborative and supportive environment
            where members can enhance their coding skills, share knowledge, and
            engage in innovative projects. Through a commitment to continuous
            learning, teamwork, and creativity, we aim to empower students to
            excel in the rapidly evolving field of software development.
            CodeDevils strives to bridge the gap between classroom theory and
            real-world application, preparing our members for successful careers
            while building lasting connections within the ASU community and the
            broader tech industry. Together, we develop, create, and network.
          </p>
        </div>
      </div>

      <div className=" bg-gray-700	py-28 ">
        <div className="flex flex-col ">
          <div className="flex flex-col	md:mb-6 md:flex-col">
            <div className="space-y-4 md:mb-6">
              <h1 className="text-center text-3xl font-bold uppercase text-maroon md:text-6xl">
                Become a CodeDevil
              </h1>{" "}
              <p className="mx-auto  text-center text-lg md:w-8/12">
                Join our community by registering with us on SunDevilSync,
                Discord, our newsletter, our website and reading our docs we
                encourge every new member reads.
              </p>
            </div>

            <div className="relative isolate py-16 md:py-28 ">
              <ul className="space-y-16 md:space-y-28">
                <li className="flex justify-center">
                  <div className=" md:w-8/12">
                    <Card>
                      <div className="h-[20rem] min-h-fit md:h-52 ">
                        <MenuLayout
                          tabs={{
                            amount: 3,
                            tabs: [
                              {
                                title: "Register",
                                text: "Officially register your membership as a CodeDevil on SunDevilSync. SunDevilSync is the official online registrar for Arizona State University. It connects students with student organizations and student organizations with their members and Administrative Advisors in a customizable, online campus community.",
                                btn: {
                                  text: "SunDevilSync",
                                  link: "https://asu.campuslabs.com/engage/organization/codedevils",
                                },
                              },
                              {
                                title: "Discord",
                                text: "Join our Discord server to connect with other members, ask questions, and get help with coding. We have channels for general discussion, coding help, and more.",
                                btn: {
                                  text: "Join",
                                  link: "https://discord.gg/YK2acN8brN",
                                },
                              },
                              {
                                title: "Docs",
                                text: "Check out our documentation to learn more about CodeDevils. We have information about our constitution, leadership, and more.",
                                btn: {
                                  text: "Read Docs",
                                  link: "https://codedevils.notion.site/Read-our-Docs-94d513295bca43a2ae9a3846284c0d26?pvs=4",
                                },
                              },
                            ],
                          }}
                        />
                      </div>
                    </Card>
                  </div>
                </li>

                <li className="flex justify-center">
                  <Card>
                    <div>
                      <h1 className="mb-2 text-center text-4xl uppercase md:text-5xl">
                        Subscribe to our newsletter
                      </h1>
                      <p className="mb-4 text-center text-lg">
                        Stay up to date on CodeDevils news by joining our
                        newsletter!
                      </p>
                      <div className="flex justify-center">
                        <Button
                          href="https://www.notion.so/team/251eda10-cc98-427e-914b-9a0f1da82168/join"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Follow our Newsletter
                        </Button>
                      </div>
                    </div>
                  </Card>
                </li>
              </ul>
              <div className="absolute inset-1/2 top-0 -z-10 h-full w-1/2 border-l-8 border-maroon	mix-blend-overlay"></div>
            </div>
          </div>

          <div>
            <h1 className="mb-2 text-center text-4xl uppercase md:text-5xl">
              Connect with us
            </h1>
            <p className="mb-4 text-center text-lg">
              Follow us on social media to stay up to date with CodeDevils
              events, news, and more!
            </p>
            <div className="flex justify-center gap-4">
              <SocialIcon href="https://www.youtube.com/@codedevils3743">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon href="https://github.com/ASU-CodeDevils">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/codedevils-official/">
                <FaLinkedinIn />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/codedevils.asu/">
                <FaInstagram />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
