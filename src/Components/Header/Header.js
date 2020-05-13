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
            onClick={() => {
              clickToScroll("b", "center");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              clickToScroll("c", "center");
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              clickToScroll("d", "center");
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              clickToScroll("e", "start");
            }}
          >
            Contact
          </li>
          <li>Resume</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
