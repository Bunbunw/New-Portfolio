import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Palette.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageOverlay from "./components/PageOverlay";
import TicTacToe from "./components/TicTacToe";

// load the path: export PATH=$PATH:/usr/local/n/versions/node/16.12.0/bin

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
  useEffect(() => {
    const updateProgressBar = () => {
      let progress = document.getElementById("progressbar");
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      if (progress) {
        progress.style.height = progressHeight + "%";
      }
    };

    window.addEventListener("scroll", updateProgressBar);

    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return (
    <Router>
      <PageOverlay />
      <div id="progressbar"></div>
      <div id="scrollPath"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="body">
              <div class="locator" id="about"></div>
              <section className="about black-bg" id="about">
                <About />
              </section>
              <Divider />
              <div class="locator" id="featured"></div>
              <section className="featured" id="featured">
                <Featured />
              </section>
              <Divider />
              <div class="locator" id="projects"></div>
              <section className="projects" id="projects">
                <Projects />
              </section>
              <Divider />
              <div class="locator" id="contact"></div>
              <section className="contact" id="contact">
                <Contact />
              </section>
            </div>
            <Footer />
          </>
        } />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
