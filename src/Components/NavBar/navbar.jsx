import React from "react";
import { Link } from "react-router-dom";


import './style.css'

const navbar = () => {
  return (
    <>
      <nav id="MainNav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/skills">
          <li>Skills</li>
        </Link>
        <Link to="/contact">
          <li>Contact Me</li>
        </Link>
        <Link to="/about">
          <li>About Me</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        
      </nav>
    </>
  );
};

export default navbar;
