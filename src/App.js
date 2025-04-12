import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import "./components/Palette.css";
import Navbar from "./components/Navbar";
import PageOverlay from "./components/PageOverlay";
import TicTacToe from "./components/TicTacToe";
import Structure from "./components/Structure";

// load the path: export PATH=$PATH:/usr/local/n/versions/node/16.12.0/bin

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
    <>
      <PageOverlay />
      <div id="progressbar"></div>
      <div id="scrollPath"></div>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={(
          <Structure/>
        )} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </>
  );
}

export default App;
