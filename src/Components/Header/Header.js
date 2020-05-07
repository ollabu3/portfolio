import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header_Container">
      <div className="header">
        <h3 className="header_Title">YunJuLee</h3>
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
