import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hide = () => {
    if (isSmallScreen) {
      setIsVisible(false);
      document.getElementById("NavCheck").checked = false; // Uncheck the checkbox to hide navbar
    }
  };

  return (
    <>
      <nav id="MainNav" className={`${isVisible ? "visible" : "NA"}`}>
        <Link to="/" onClick={hide}>
          <li>Home</li>
        </Link>
        <Link to="/skills" onClick={hide}>
          <li>Skills</li>
        </Link>
        <Link to="/contact" onClick={hide}>
          <li>Contact Me</li>
        </Link>
        <Link to="/about" onClick={hide}>
          <li>About Me</li>
        </Link>
        <Link to="/projects" onClick={hide}>
          <li>Projects</li>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
