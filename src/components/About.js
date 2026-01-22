import React, { useState, useEffect, useRef } from 'react';
import "./About.css";
import profile from "../assets/Person2.png";

function About() {
  const messages = ["4th year CS @UofT", "SWE @Dayforce @TD", "Composer"];
  const typingSpeed = 80;
  const pauseTime = 2000;
  
  const [displayText, setDisplayText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const typingIntervalRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  
  useEffect(() => {
    const typeMessage = () => {
      let charIndex = 0;
      setDisplayText(""); // Clear the text

      typingIntervalRef.current = setInterval(() => {
        if (charIndex < messages[currentMessageIndex].length) {
          const char = messages[currentMessageIndex][charIndex];
          setDisplayText(prev => prev + (char === undefined? "" : char));
          charIndex += 1;
        } else {
          clearInterval(typingIntervalRef.current);
          pauseTimeoutRef.current = setTimeout(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
          }, pauseTime);
        }
      }, typingSpeed);
    };

    typeMessage();

    return () => {
      clearInterval(typingIntervalRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, [currentMessageIndex]);

  return (
    <>
      <p className="easter-egg">
      ❖ Hi, Sigmund here! It might be... better to check on this portfolio in a bigger screen like your pc or ipad. But please also enjoy it here and wish you have a nice day! ❖
      </p>
      <img src={profile} alt="profile-pic" class="profile"></img>
      <div className="headline">
        <h1 className="name">Sigmund Wang</h1>
        {/* <p className="role">Full Stack Developer</p> */}
        <p className="role">- {displayText} -</p>
        {/* <p className="school">3rd year Student at UofT</p> */}
        <p className="quote">Create, Advance, Succeed.</p>
      </div>
      <div className="moving-bg">
        <div className="row">
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
