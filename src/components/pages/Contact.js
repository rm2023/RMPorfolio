import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"

export default function ContactIcons() {
  return (
<div className="icons">
        <a
          href="https://github.com/rm2023"
          target="_blank" // Add target="_blank" to open in a new window/tab
          rel="noopener noreferrer" // Recommended for security reasons
          aria-label="GitHub"
        >
          <FaGithub size={200} />
        </a>
        <a
          href="https://www.linkedin.com/in/rmcoding23/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={200} />
        </a>
        <a
          href="mailto:rmeji2@gmail.com"
          target="_blank" // Add target="_blank" to open in a new window/tab
          rel="noopener noreferrer" // Recommended for security reasons
          aria-label="Email"
        >
          <MdOutlineEmail size={200} />
          </a>
    </div>
  );
}