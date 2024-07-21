import React, { useState, useEffect } from "react";
import { Progress } from "antd";


const conicColors = {
  "0%": "skyblue",
  "50%": "#004d40",
  "100%": "#008080",
};

const SkillsCard = ({ image, heading, percentage }) => {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (hovered) {
      const start = 0;
      const end = percentage;
      const duration = 1000; // Duration for animation
      const stepTime = Math.abs(Math.floor(duration / end));
      let currentProgress = start;

      timer = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        if (currentProgress >= end) {
          clearInterval(timer);
          setProgress(end);
        }
      }, stepTime);
    } else {
      setProgress(0); // Reset to 0 when not hovered
    }

    return () => clearInterval(timer);
  }, [hovered, percentage]);

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="section1">
        <img src={image} alt="Logo" />
        <h2>{heading}</h2>
      </div>
      <div className="section2">
        <Progress
          type="dashboard"
          className="progress"
          percent={progress}
          strokeColor={conicColors}
        />
      </div>
    </div>
  );
};

export default SkillsCard;
