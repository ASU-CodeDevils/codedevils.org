import React from "react";
import { useInView } from "react-intersection-observer";

import headerStyles from "./../../styles/components/headers/_headerLayout.module.scss";

const ContactPageHeader = () => {
  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div
      id={headerStyles.header_content}
      className={`${
        isInView ? headerStyles.header_visible : headerStyles.header_hidden
      }`}
      ref={myRef}
    >
      <h1 id={headerStyles.title}>Contact Us</h1>
      <p id={headerStyles.description}>
        Get in touch and let us know how we can help you with your coding needs.
        Fill out the form and we&#180;ll be in touch as soon as possible.
      </p>
    </div>
  );
};

export default ContactPageHeader;
