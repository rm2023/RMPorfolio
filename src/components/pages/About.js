import React from 'react';
import '../css/About.css';
import ME from '../../assets/me2.jpg';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"

export default function Home() {
  return (
    <div className="Main">
      <div className='title'>
        <h1>Hello my name is Roberto Mejia</h1>
        <h1>Fullstack Developer</h1>
      </div>

      <img src={ME} alt="me" style={{ width: '450px', height: '500px', borderRadius: '10px', paddingLeft: '70px' }} />
      <div className='description'>
        <h3>
          <p>Recently completing the coding Certification bootcamp at UNC Charlotte. Programs include the basics of front-end
            and back-end technologies including HTML5, CSS3, JavaScript, Bootstrap, React.js, Node.js, Express.js, MySQL, NoSQL
            (MongoDB), Command Line, and Git. Worked with multiple team members to create functional mobile friendly web applications.
          </p>
          <p>The Program included instructional time with learners of 240 hours, and spent up to an
            additional 240 hours on homework and projects.</p>
          <p>Using GitHub to upload/download homework and also collaborating with classmates on deployed websites projects. Learned to use Visual Studio to
            create mobile-friendly web apps while sending databases to MongoDB and deploying on Heroku.</p>
          <p>In my React portfolio, I have implemented what I have learned!</p>
        </h3>
      </div>
      <div className="icons">
        <a
          href="https://github.com/rm2023"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <BsGithub size={50} />
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
      {/* test */}
      </div>
    </div>
  );
}
