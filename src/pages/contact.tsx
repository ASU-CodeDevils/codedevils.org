import { NextPage } from "next";
import React from "react";

// styles
import pageStyles from "./../styles/pages/layout.module.scss";

const ContactPage: NextPage = () => {
  return (
    <p id={pageStyles.description}>
      If you have any questions, comments, or concerns, please contact us at
      <a id={pageStyles.email} href="mailto:info@codedevils.org">
        {" "}
        info@codedevils.org
      </a>
    </p>
  );
};

export default ContactPage;
