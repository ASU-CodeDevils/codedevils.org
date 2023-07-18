import React from "react";
import { NextPage } from "next";
import Header from "~/components/Header";

const ContactPage: NextPage = () => {
  return (
    <>
      <Header
        title="Contact Us"
        description="Get in touch and let us know how we can help you with your coding needs. Fill out the form and we´ll be in touch as soon as possible."
      />
      <p className="">
        If you have any questions, comments, or concerns, please contact us at
        <a className="text-gold" href="mailto:info@codedevils.org">
          {" "}
          info@codedevils.org
        </a>
      </p>
    </>
  );
};

export default ContactPage;
