import React, { useEffect } from "react";
import "./Header.css";

function Header() {
  function clickToScroll(tag, block) {
    document
      .getElementById(tag)
      .scrollIntoView({ block: block, behavior: "smooth" });
  }

  return (
    <header>
      <div className="header">
        <h1
          onClick={() => {
            clickToScroll("a", "start");
          }}
        >
          YunJuLee
        </h1>
        <ul>
          <li
            className="scroll"
            onClick={() => {
              clickToScroll("b", "center");
            }}
          >
            About
          </li>
          <li
            className="scroll"
            onClick={() => {
              clickToScroll("c", "center");
            }}
          >
            Skills
          </li>
          <li
            className="scroll"
            onClick={() => {
              clickToScroll("d", "center");
            }}
          >
            Projects
          </li>
          <li
            className="scroll"
            onClick={() => {
              clickToScroll("e", "start");
            }}
          >
            Contact
          </li>
          <a href="https://drive.google.com/file/d/1FE3Dc73QPfR2UTWWt_dYQiWYiF5sUBst/view?usp=sharing">
            <li className="resume">Resume</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
