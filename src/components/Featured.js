import "./Featured.css";
import ExperienceCard from "./ExperienceCard";
import hoopp_logo from "../assets/HOOPP_icon.jpeg";
import UofT_logo from "../assets/UofT_icon.png";
import StandardS_logo from "../assets/standardsoftwareinc_icon.jpeg";
import SoundLife_logo from "../assets/Soundlife_Scarborough_icon.jpeg";
import Ping_An_icon from "../assets/Ping_An_icon.png";


function Featured() {
  const experiences = [
    {
        logo: hoopp_logo,
        company: "Health of Ontario Pension Plan",
        title: "Internal Audit Coop",
        date: "2024 Fall, 2025 Winter",
        link: "https://hoopp.com/",
        animation: true
    },
    {
        logo: UofT_logo,
        company: "University of Toronto",
        title: "Software Developer",
        date: "2024 Summer - 2025 Winter",
        link: "https://www.utsc.utoronto.ca/physsci/welcome-physical-environmental-sciences",
        animation: false
    },
    {
        logo: StandardS_logo,
        company: "Standard Software Inc.",
        title: "Software Developer",
        date: "2024 Summer",
        link: "https://standardsoftware.ca/",
        animation: false
    },
    {
        logo: SoundLife_logo,
        company: "Soundlife Scarborough",
        title: "Web Developer, Events & Programming Assistant",
        date: "2023 Fall - 2024 Winter",
        link: "https://www.soundlifescarborough.ca/",
        animation: false
    },
    {
        logo: Ping_An_icon,
        company: "Ping An Insurance",
        title: "Software Developer Intern",
        date: "2023 Summer",
        link: "https://stock.pingan.com/",
        animation: true
    },
    {
        logo: UofT_logo,
        company: "UTSC Green Path",
        title: "Javascript Teaching Assistant",
        date: "2023 Winter",
        link: "https://www.utsc.utoronto.ca/greenpath-china/",
        animation: false
    }
  ];

  return (
    <>
      <p class="featured-title">FEATURED</p>
      <div className="experiences">
        {experiences.map((experience, index) => (
          <ExperienceCard className="experience"
              key={index}
              logo={experience.logo}
              company={experience.company}
              title={experience.title}
              date={experience.date}
              link={experience.link}
              animation={experience.animation}
          />
        ))}
      </div>
    </>
  );
}

export default Featured;


{/* <div class="rectangle"></div>
<div class="featured-main">
  <div class="skills-column">
    <div class="languages">
      <h3>Languages</h3>
      <p class="content languages">
        HTML/CSS/JS, C#, C++/C, Java, Python, SQL
      </p>
    </div>
    <div class="other">
      <h3>Frameworks and Applications</h3>
      <p class="content">React, SpringBoot, Maven, MyBatis, Vue;</p>
      <p class="content">
        Postman, Canva, Figma, Unity, Github, Godot, Blender, FL Studio
      </p>
    </div>
  </div>
  <div class="skills-column experiences">
    <h3>Experience</h3>
    <p class="bold content margin-t">Ping An Bank Intern</p>
    <p class="content des">
      Used SpringBoot, MySQL, Redis, Postman, RESTful APIs to maintain a
      loan section in an app.
    </p>
    <p class="bold content margin-t"> SoundLife Scarborough Part-time</p>
    <p class="content des">
      Helped with web-development of the official website with WordPress
      Admin.
    </p>
    <p class="bold content margin-t">Wintercamp TA Part-time</p>
    <p class="content des">
      Taught machine learning fundamentals and robotics in JavaScript.
      Helped student with projects.
    </p>
  </div>
</div> */}