import "./Projects.css";
import Eventful from "../assets/Eventful.jpeg";
import Portfolio from "../assets/Portfolio.png";
import CyberDash from "../assets/CyberDash.png";
import SustainU from "../assets/SustainU.png";

function Projects() {
  return (
    <div className="project-wrapper">
      <div className="project Eventful">
        <a
          href="https://devpost.com/software/eventful-puhaj9"
          target="_blank"
          rel="noreferrer"
        >
          <img className="noedge fit" src={Eventful} alt="Eventful" />
        </a>
        <h2 className="project-name">
          Eventful <span className="regular">2023 Oct</span>
        </h2>
        <p className="project-description">
          React Native App with AI to simplify event planning process. Ranked 14
          of 80 in Hack the Valley 8.
        </p>
      </div>

      <div className="project Portfolio">
        <img className="noedge fit" src={Portfolio} alt="Portfolio" />
        <h2 className="project-name">
          Portfolio <span className="regular">2022 Oct</span>
        </h2>
        <p className="project-description">
          Personal Portfolio Built Using React. Intergrated a lot of animations.
        </p>
      </div>

      <div className="project CyberDash">
        <img className="noedge fit" src={CyberDash} alt="CyberDash" />
        <h2 className="project-name">
          CyberDash <span className="regular">2022 Dec</span>
        </h2>
        <p className="project-description">
          Ball rolling game created with Unity, blender, soundtrack by FL
          Studio. Multi-level hard game.
        </p>
      </div>

      <div className="project SustainU">
        <a
          href="https://devpost.com/software/sustainu-app"
          target="_blank"
          rel="noreferrer"
        >
          <img className="noedge fit" src={SustainU} alt="SustainU" />
        </a>
        <h2 className="project-name">
          SustainU <span className="regular">2023 Oct</span>
        </h2>
        <p className="project-description">
          Figma app prototype of a recycling app in campus. Winner of Best
          Nature Hack in Hack the Valley 7.
        </p>
      </div>
    </div>
  );
}

export default Projects;
