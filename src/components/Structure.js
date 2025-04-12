import React, { useState, useEffect } from "react";
import About from "./About";
import Featured from "./Featured";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Divider() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
    setTimeout(() => {
      setExpanded(true);
    }, 100);
  }, []);

  return <div className={`divider ${expanded ? "expanded" : ""}`}></div>;
}

export default function Structure() {
    return (
        <>
            <div className="body">
              <div className="locator" id="about"></div>
              <section className="about black-bg" id="about">
                <About />
              </section>
              <Divider />
              <div className="locator" id="featured"></div>
              <section className="featured" id="featured">
                <Featured />
              </section>
              <Divider />
              <div className="locator" id="projects"></div>
              <section className="projects" id="projects">
                <Projects />
              </section>
              <Divider />
              <div className="locator" id="contact"></div>
              <section className="contact" id="contact">
                <Contact />
              </section>
            </div>
            <Footer />
        </>
    )
}