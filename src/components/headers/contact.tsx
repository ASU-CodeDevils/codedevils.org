import React from 'react'

import headerStyles from "./../../styles/components/headers/_headerLayout.module.scss";

const ContactPageHeader = () => {
  return (
    <div id={headerStyles.header_content}>
      <h1 id={headerStyles.title}>Contact Us</h1>
      <p id={headerStyles.description}>
        Get in touch and let us know how we can help you with your cooking needs. Fill out the form and we&#180;ll be in touch as soon as possible.
      </p>
    </div>
  )
}

export default ContactPageHeader;