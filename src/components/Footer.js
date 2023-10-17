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
        Designed and coded by <span className="bold">Sigmund Wang</span>, 2023
      </p>
      <div className="favicons">
        <IconContext.Provider value={{ size: "1em", className: "icon" }}>
          <a
            href="https://www.instagram.com/sigmund.wang/"
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
            href="https://github.com/verusins"
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
