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
          <a href="https://drive.google.com/file/d/1EaUUscpTnZ2x0BTZHvNe4jKt4Zp4rjor/view?usp=sharing">
            <li>Resume</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
