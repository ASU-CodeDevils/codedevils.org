import React from 'react'

// styles 
import headerStyles from "./../../styles/components/headers/_headerLayout.module.scss";

const AboutPageHeader = () => {
  return (
    <div id={headerStyles.header_content}>
      <h1 id={headerStyles.title}>About</h1>
      <p id={headerStyles.description}>CodeDevils aims to provide ASU students with an organization designed to encourage and promote involvement in coding projects and competitions through an exclusively online setting.</p>
    </div>
  )
}

export default AboutPageHeader;