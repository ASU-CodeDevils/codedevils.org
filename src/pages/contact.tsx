import React from "react";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <p className="">
      If you have any questions, comments, or concerns, please contact us at
      <a className="text-gold" href="mailto:info@codedevils.org">
        {" "}
        info@codedevils.org
      </a>
    </p>
  );
};

export default ContactPage;
