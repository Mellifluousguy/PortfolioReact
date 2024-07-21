import React from "react";
import image from "../Assets/AboutMe.png";
import { Link } from "react-router-dom";
import "./style.css"

const AboutMe = () => {
  return (
    <div id="About-Me">
      <div className="graphicsContainer">
        <div className="graphics">
          <img src={image} alt="Profile Image" />
          <h2>About Me</h2>
          <p>
            Welcome! I'm <strong>Mohit Gupta</strong>, a passionate Web Developer with a
            <strong> Bachelor’s degree in Computer Applications</strong>. With a solid background
            in technical languages and web technologies, I specialize in
            creating dynamic and responsive web applications that deliver
            outstanding user experiences. My journey in web development is
            fueled by a relentless pursuit of innovation and a keen eye for
            detail. I enjoy transforming complex ideas into intuitive and
            engaging digital solutions.
            <br />
            On this site, you’ll find a showcase of my projects, where I blend
            creativity with functionality to develop effective web applications.
            Dive in to explore my work and discover how I turn visions into
            reality with code.
          </p>
          <Link to="/projects"><li>{'Projects ≻'}</li></Link>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
