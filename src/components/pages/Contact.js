import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import "../css/contact.css"
import { ContactUs } from './ContactUs'; // Import the ContactUs component



export default function ContactIcons() {
  return (

    <div className="contact-container">
      <h2>
        Send me a message tell me what you think!
      </h2>
      <ContactUs /> {/* Display the ContactUs component */}
      <div className="icon2">
        <a
          href="https://github.com/rm2023"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/rmcoding23/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={50} />
        </a>
        <a
          href="mailto:rmeji2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <MdOutlineEmail size={50} />
        </a>
      </div>
    </div>
  );
}
