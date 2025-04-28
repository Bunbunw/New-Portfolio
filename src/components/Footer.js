import "./Footer.css";
import { IconContext } from "react-icons";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="Footer">
      <p className="designer">
        Designed and coded by <span className="bold">Sigmund Wang</span>, 2024
      </p>
      <p className="friend">
        Also check out my bro's porfolio <a href="https://austinyt.in/" target="_blank" rel="noreferrer">here</a>
      </p>
      <div className="favicons">
        <IconContext.Provider value={{ size: "1em", className: "icon" }}>
          <a
            href="https://www.instagram.com/sigbunxx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sigmund-wang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/bunbunw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://devpost.com/Verusins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
}

export default Footer;
