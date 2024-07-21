import React from "react";
import SkillsCard from "./SkillsCard";
import { Link } from "react-router-dom";
import "./style.css"

const Education = () => {
  return (
    <div id="SkillsPage">
      <div className="graphicsContainer">
        <div className="graphics">
          <h1>Skills</h1>
          <div className="cards">
            <SkillsCard heading={"HTML"} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'} percentage={100} />
            <SkillsCard heading={"CSS"} image={'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg'} percentage={100} />
            <SkillsCard heading={"Javascript"} image={'https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png?f=webp&w=256'} percentage={90} />
            <SkillsCard heading={"React"} image={'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'} percentage={70} />
            <SkillsCard heading={"Java"} image={'https://cdn-icons-png.flaticon.com/512/226/226777.png'} percentage={70} />
            <SkillsCard heading={"SQL"} image={'https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png'} percentage={60} />
          </div>
            <Link to="/contact"><li>{'Contact Me ≻'}</li></Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
