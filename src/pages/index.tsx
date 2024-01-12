import React from "react";
import { NextPage } from "next";

import { useUser } from "@clerk/nextjs";

import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MenuLayout from "~/components/menu/layout";

import { FaGithub, FaYoutube, FaDiscord, FaHackerrank } from "react-icons/fa";

import { IoMdCreate } from "react-icons/io";

const HomePage: NextPage = () => {
  const { user } = useUser();

  console.log(user);

  const { ref: headerRef, inView: isInView } = useInView({
    triggerOnce: false,
  });

  // code for the menu

  return (
    <>
      <div className="relative flex text-white">
        <Image
          src="/bg/headerImage.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[412px] w-screen"
          alt="CodeDevils code grid header background"
          priority
        />
        <div
          ref={headerRef}
          className={` ${
            isInView
              ? "translate-x-0	opacity-100 blur-0"
              : "-translate-x-full opacity-0 blur"
          } absolute mx-auto flex h-full w-full max-w-screen-2xl items-center text-left text-[2rem] transition-all duration-1000 md:text-[3rem] `}
        >
          <div className="my-auto px-6 md:ml-8 md:w-[45%] md:px-0 ">
            <h1 className="">
              CodeDevils - An ASU Student Organization{" "}
              <span className="inline-block">
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
          </div>
        </div>
      </div>

      <div className="isolate mb-16 -space-y-64 md:-space-y-20">
        <div className="flex h-96	w-full flex-col gap-2 bg-black pt-10 text-center text-white md:h-36 md:flex-row md:justify-center  md:pt-6">
          Stay up to date on CodeDevils news by{" "}
          <Link href="/newsletter" className=" font-extrabold text-white">
            joining our newsletter!
          </Link>
        </div>
        <div className=" mx-4 grid h-fit rounded bg-white mix-blend-lighten shadow-lg md:mx-auto   md:w-10/12 md:grid-cols-3 md:space-y-0  ">
          <div className="relative  border-b-[1px] px-8 py-6 text-left	 transition-transform  duration-200 md:border-b-0	 md:border-r-[1px]">
            <h2 className="text-lg font-bold">Community</h2>
            <p className="mt-4 mb-8">
              Be part of an amazing group of individuals who have a passion for
              coding.
              <br />
              <br /> Network with fellow students, faculty members, and guest
              speakers. <br />
              <br />
              We even have dedicated Discord channels for members to learn and
              collaborate.
            </p>
            <Link
              href={""}
              className="absolute bottom-0 flex items-center gap-2 pb-3 text-maroon"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>

          <div className="relative  border-b-[1px] px-8 py-6 text-left	 transition-transform  duration-200 md:border-b-0	 md:border-r-[1px]">
            <h2 className="text-lg font-bold">Code</h2>
            <p className="mt-4 mb-8">
              Work on exclusive CodeDevils projects!Coding competitions are
              hosted each semester on HackerRank.
              <br />
              <br />
              Projects are an opportunity for members to collaborate on coding
              projects. Anyone can propose an idea for a project, and a project
              can be anything that involves coding in some way (regardless of
              language or platform).Coding competitions are hosted each semester
              on HackerRank.
            </p>
            <Link
              href={""}
              className="absolute bottom-0 flex items-center gap-2 pb-3 text-maroon"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>

          <div className=" relative	px-8 py-6 text-left transition-transform  duration-200	  ">
            <h2 className="text-lg font-bold">Compete</h2>
            <p className="mt-4 mb-8">
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
              href={""}
              className="absolute bottom-0 flex items-center gap-2 pb-3 text-maroon"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-700">
        <div className="mx-auto w-11/12 pb-6 md:w-full md:p-6">
          <div className="mb-4 flex flex-col text-center text-black">
            <h1 className="mb-4 mt-24 text-5xl ">Welcome to CodeDevils</h1>
            <p className="text-2xl">
              Welcome to CodeDevils - We are an ASU student run organization.
            </p>
          </div>
          {/* Menu */}

          <MenuLayout
            tabs={{
              amount: 2,
              tabs: [
                {
                  title: "What's New?",
                  text: "Level up your skills with CodeDevils! 🚀 Exciting news: we now offer courses on our Discord server! From coding basics to advanced techniques, our expert-led sessions cater to all levels. Join us for interactive learning, connect with pros, and supercharge your career—all on Discord.",
                  picture: "/blog-post-3.jpg",
                },
                {
                  title: "Events",
                  text: "Get ready for the ultimate coding thrill with CodeDevils! 🚀 Exciting news: we've launched Code Challenges exclusively on our Discord community. Sharpen your coding prowess, tackle real-world problems, and compete with fellow enthusiasts. It's the perfect opportunity to test your skills, learn, and have a blast! Don't miss out—head to our Discord and join the coding excitement now. Challenge accepted? Let's code together! 💻🔥",
                  picture: "/blog-post-1.jpg",
                },
              ],

              cols: 2,
            }}
          />
        </div>
      </div>

      <div className=" bg-maroon text-white ">
        <div className="mx-auto w-10/12 space-y-4 py-16 md:w-8/12 ">
          <h1 className="text-center text-3xl font-extrabold uppercase">
            Our Mission
          </h1>
          <p className="text-center">
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

        {/* <div className="mb-12 bg-black">
          <ul className="mx-auto grid w-11/12 grid-cols-3 gap-4">
            <li className="bg-white text-black shadow-xl">
              <div className="flex">
                <IoMdCreate className="m-6 h-24 w-24" />
                <div className=" space-y-2">
                  <h1 className="text-left text-2xl">Develop</h1>
                  <p className="">
                    Ea ea esse consectetur laborum consequat voluptate mollit
                    anim aliqua aliqua consectetur consectetur incididunt.
                  </p>
                  <Link href={""} className="text-maroon">
                    Link
                  </Link>
                </div>
              </div>
            </li>
            <li className="bg-white">Create</li>
            <li className="bg-white">Network</li>
          </ul>
        </div> */}
      </div>

      <div className="mb-4	bg-gray-700 p-6">
        <div className="flex flex-col ">
          <div className="flex flex-col-reverse	 md:flex-col">
            <div className="h-full w-full">
              <h1 className=" text-center text-3xl md:text-5xl">
                Become a CodeDevil
              </h1>{" "}
              <p className="mb-8 text-center text-lg">
                Join our community by register with us on SunDevilSync, Discord,
                and reading our docs we encourge every new member reads.
              </p>
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
                        link: "/docs",
                      },
                    },
                  ],
                }}
              />
            </div>
          </div>

          <div>
            {/* <div className="h-full">
              

              <div className="">
                <FaGithub />
              </div>
              <div className="">
                <FaYoutube />
              </div>
              <div className="">
                <FaDiscord />
              </div>
              <div className="">
                <FaHackerrank />
              </div>

              <div className="">
                <Image
                  src="/logo-dark.png"
                  width={100}
                  height={100}
                  priority
                  
                  className=" h-fit w-fit"
                  alt="CodeDevils logo"
                />
              </div>
            </div> */}
          </div>
        </div>

        <div className="co3q6 ca5ue csm51 cwmqr csya4 ccyhi">
          <div className="ca5ue cwmqr ch67j" aria-hidden="true">
            <canvas
              data-particle-animation=""
              data-particle-quantity="5"
              width="2304"
              height="330"
              style={{ width: "1152px", height: "165px" }}
            ></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
