import React from "react";
import { useInView } from "react-intersection-observer";

// styles
import headerStyles from "./../../styles/components/headers/_headerLayout.module.scss";

const AboutPageHeader = () => {
  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div
      id={headerStyles.header_content}
      ref={myRef}
      className={`${
        isInView ? headerStyles.header_visible : headerStyles.header_hidden
      }`}
    >
      <h1 id={headerStyles.title}>About</h1>
      <p id={headerStyles.description}>
        CodeDevils aims to provide ASU students with an organization designed to
        encourage and promote involvement in coding projects and competitions
        through an exclusively online setting.
      </p>
    </div>
  );
};

export default AboutPageHeader;
