import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./Palette.css";

import Icon from "../assets/Icon.png";

function NavDivider() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
    setTimeout(() => {
      setExpanded(true);
    }, 100);
  }, []);

  return <div className={`nav-divider ${expanded ? "expanded" : ""}`}></div>;
}

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
    setTimeout(() => {
      setExpanded(true);
    }, 100);
  }, []);

  return (
    <>
      <nav className="Navbar">
        {/* <p className="icon">Icon to be replaced</p> */}
        <img
          src={Icon}
          alt="icon"
          class={`icon ${expanded ? "expandicon" : ""}`}
        />
        <ul className={`sections ${expanded ? "expandli" : ""}`}>
          <li>
            <a href="#about-locator">About</a>
          </li>
          <li>
            <a href="#featured-locator">Featured</a>
          </li>
          <li>
            <a href="#projects-locator">Projects</a>
          </li>
          <li>
            <a href="#contact-locator">Contact</a>
          </li>
        </ul>
      </nav>
      <NavDivider />
    </>
  );
}

export default Navbar;
