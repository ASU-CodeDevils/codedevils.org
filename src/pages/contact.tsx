import React from "react";
import { NextPage } from "next";
import Header from "~/components/Header";
import Link from "next/link";
import Form from "~/components/ContactForm";
import { RiMapPin2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLifebuoy } from "react-icons/hi2";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import Card from "~/components/Card";

const ContactPage: NextPage = () => {
  return (
    <>
      <div className="isolate -space-y-12">
        <div className="mix-blend-darken">
          <Header>
            <h1 className="text-5xl sm:text-7xl">Contact Us</h1>
            <p className="text-xl md:w-1/2">
              Get in touch and let us know how we can help you with your coding
              needs. Fill out the form and we&apos;ll be in touch as soon as
              possible.
            </p>
          </Header>
        </div>

        <div className="mx-auto w-11/12 grid-cols-2 bg-white  md:grid  xl:w-7/12 ">
          <div className="flex justify-center">
            <Form />
          </div>
          <article className=" h-fit space-y-4 bg-white p-8 text-left md:mt-[4rem]">
            <h1 className="text-4xl font-bold text-maroon">
              Have any Questions?
            </h1>
            <p className="text-xl">
              We are here to help. If you have any questions or need help with
              your project, feel free to reach out to us.
            </p>

            <div className="flex gap-2 ">
              <RiMapPin2Line className="text-2xl text-maroon" />
              <p className="text-xl">
                Arizona State University,
                <br />
                Tempe, AZ
              </p>
            </div>
            <div className="items-left flex gap-2 ">
              <MdOutlineEmail className="text-2xl text-maroon" />

              <Link
                href="mailto:codedevils.info@gmail.com"
                className="text-xl transition-colors hover:text-maroon"
              >
                codedevils.info@gmail.com
              </Link>
            </div>
          </article>
        </div>
      </div>
      <div className="mx-auto my-12 w-11/12 md:w-9/12">
        <Card>
          <div className="grid md:grid-cols-2">
            <div className="space-y-4 p-4 text-left md:border-r-2 md:border-gray-400">
              <HiOutlinePuzzlePiece className="text-4xl text-maroon" />
              <div className="flex items-center gap-2 text-xl text-black transition-colors hover:text-maroon">
                <Link href={""} className="text-xl font-bold uppercase ">
                  Get Project Support
                </Link>
                <FaArrowRight className="h-6 w-6" />
              </div>
              <p>
                Need help with a project? CodeDevils offers support for projects
                in the form of mentorship, resources, and more.
              </p>
            </div>
            <div className="space-y-4 p-4 text-left">
              <HiOutlineLifebuoy className="text-4xl text-maroon" />
              <div className="flex items-center gap-2 text-xl text-black transition-colors hover:text-maroon">
                <Link href={""} className="text-xl font-bold uppercase ">
                  Want to Sponsor CodeDevils?
                </Link>
                <FaArrowRight className="h-6 w-6" />
              </div>
              <p>
                Elevate your brand by sponsoring CodeDevils. Enjoy exclusive
                perks, including direct access to our vibrant community. Reach
                out to us for partnership opportunities!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ContactPage;
