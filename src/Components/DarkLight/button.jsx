import React from "react";
import './button.css'

const button = () => {
  return (
    <div className="Mode">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default button;
