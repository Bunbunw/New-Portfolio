import React, { useState, useEffect } from "react";
import "./PageOverlay.css";
import Icon from "../assets/Icon.png";

function PageOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="overlay">
        <img src={Icon} alt="icon" className="overlay-icon" />
      </div>
    )
  );
}

export default PageOverlay;