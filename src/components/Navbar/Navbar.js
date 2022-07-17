import React from "react";
import "./Navbar.scss";
import citylogo from "../../citylogo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={citylogo} alt="city tours logo" className="imagelogo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
