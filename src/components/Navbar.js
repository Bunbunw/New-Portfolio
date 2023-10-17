import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./Palette.css";

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
        <p className="icon">Icon to be replaced</p>
        <ul className={`sections ${expanded ? "expandli" : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <NavDivider />
    </>
  );
}

export default Navbar;
