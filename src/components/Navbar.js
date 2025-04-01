import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

  const location = useLocation();
  const navigate = useNavigate();

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
          { location.pathname !== "/tic-tac-toe" ? (
              <>
                <li><a href="/#about">About</a></li>
                <li><a href="/#featured">Featured</a></li>
                <li><a href="/#projects">Project</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/tic-tac-toe">Resume</a></li>
              </>
            ) : (
              <>
                <li><a href="/#">Back to Home</a></li>
                {/* <li><a href="/Sigmund_Resume_Tech.pdf" target="_blank">Actual_Resume_here!</a></li> */}
              </>
            )
          }
        </ul>
      </nav>
      <NavDivider />
    </>
  );
}

export default Navbar;
