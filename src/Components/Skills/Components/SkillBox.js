/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./SkillBox.css";
function SkillBox({ list }) {
  return (
    <div className="skillBox">
      <div className="skillImgs">
        {list.position === "Frontend" ? (
          <img src={require("./SkillsImg/Frontend.png")} />
        ) : list.position === "Backend" ? (
          <img src={require("./SkillsImg/Backend.png")} />
        ) : (
          <img src={require("./SkillsImg/DevelopmentTools.png")} />
        )}
      </div>
      <h1>{list.position}</h1>
      <p>{list.skills}</p>
    </div>
  );
}

export default SkillBox;
/*
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
*/
