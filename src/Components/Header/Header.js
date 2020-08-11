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
          <a href="https://docs.google.com/document/d/1fjk179Iukkkbwyab2D5JunVieQVy1oFfQC217ML6eMM/edit#heading=h.p2fovhdq0txp">
            <li className="resume">Resume</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
