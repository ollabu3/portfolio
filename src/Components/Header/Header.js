import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header_Container">
        <h1 className="header_Title">YunJuLee</h1>
        <ul className="header_Menu">
          <li className="menu_List">About</li>
          <li className="menu_List">Skills</li>
          <li className="menu_List">Projects</li>
          <li className="menu_List">Contact</li>
          <li className="menu_List">Resume</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
