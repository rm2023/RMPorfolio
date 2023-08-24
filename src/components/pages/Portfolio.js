import React from 'react';
import '../css/portfolio.css';
import { FaGithub } from 'react-icons/fa';
import emp1 from "../../assets/EmployeeTracker.png"
import pet from "../../assets/pet.jpg"
import fit from "../../assets/fit.png"

export default function Portfolio() {
  return (
    <div className='port'>
      <h1>Portfolio</h1>
      <h3>Here are some of my Projects that I worked on</h3>
      <div>
        <h3>Employee tracker</h3>
        <a href="https://github.com/rm2023/EmployeeTracker" target="_blank" rel="noopener noreferrer">
          <img src={emp1} alt="Employee Tracker"/>
        </a>
      </div>
      <div>
        <h3> Petfolio </h3>
        <a href="https://github.com/matthewbaty/petfolio" className='btn' target='_blank' rel='noopener noreferrer'>
          <img src={pet} alt="Portfolio Item" />
        </a>
      </div>
      <div>
        <h3>Fit Checker</h3>
        <a href="https://github.com/rm2023/fit-checker" className='btn' target='_blank' rel='noopener noreferrer'>
          <img src={fit} alt="Portfolio Item" />
        </a>
      </div>
      <div className="icons">
        <h5>
         <p>Check out my</p> 
        <p>My Github --></p>
        <p>Profile</p>
        </h5>
        <a
          href="https://github.com/rm2023"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={100} />
        </a>
      </div>
    </div>
  );
}

