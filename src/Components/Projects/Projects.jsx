import React from "react";
import mecode from "../Assets/Projects/mecode.png"
import HomePage from "../Assets/Projects/Webpage.png"
import Ecommerce from "../Assets/Projects/Ecommerce.png"
import card from "../Assets/Projects/card.png"
import { Link } from 'react-router-dom'
import './style.css'

const Feedback = () => {
  const CV = `https://drive.google.com/uc?export=download&id=1RsRLiDucNiyILlkMOp7f9GTzBjLPO8F6`;
  const projects = [
    {
      title: "Mecode",
      description:
        "A service-based website built using React and React Routing.",
      link: "https://github.com/Mellifluousguy/MeCode_Hub/",
      image: mecode,
    },
    {
      title: "Homepage Replica",
      description: "A Homepage Replica made using HTML and CSS",
      link: "https://github.com/Mellifluousguy/Responsive-Homepage-Replica",
      image: HomePage
    },
    {
      title: "E-commerce Website",
      description: "An e-commerce website created using HTML and CSS.",
      link: "https://github.com/Mellifluousguy/E-commerce",
      image: Ecommerce,
    },
    {
      title: "Login Card",
      description: "A login card designed with HTML and CSS.",
      link: "https://github.com/Mellifluousguy/Card",
      image: card,
    }
    
  ];
  return (
    <div id="project">
      <div className="graphicsContainer">
        <div className="graphics">
            <h1>My Projects</h1>
            <div className="projects-list">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <img src={project.image} alt={project.title} />
                  <div className="project-content">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          <Link to=`${CV}`><li>{'Download CV'}</li></Link>
          </div>
      </div>
    </div>
  );
};

export default Feedback;
