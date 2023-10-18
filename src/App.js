import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/Palette.css";
import About from "./components/About";

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

function App() {
  let progress = document.getElementById("progressbar");
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  };

  return (
    <>
      <Navbar />
      <div id="progressbar"></div>
      <div id="scrollPath"></div>
      <div className="body">
        <div class="locator" id="about-locator"></div>
        <section className="about black-bg" id="about">
          <About />
        </section>
        <Divider />
        <div class="locator" id="featured-locator"></div>
        <section className="featured" id="featured"></section>
        <Divider />
        <div class="locator" id="projects-locator"></div>
        <section className="projects" id="projects"></section>
        <Divider />
        <div class="locator" id="contact-locator"></div>
        <section className="contact" id="contact"></section>
      </div>
      <Footer />
    </>
  );
}

export default App;
