import "./Featured.css";
import ExperienceCard from "./ExperienceCard";
import HorizontalScroll from './HorizontalScroll';
import hoopp_logo from "../assets/HOOPP_icon.jpeg";
import UofT_logo from "../assets/UofT_icon.png";
import StandardS_logo from "../assets/standardsoftwareinc_icon.jpeg";
import SoundLife_logo from "../assets/Soundlife_Scarborough_icon.jpeg";
import Ping_An_icon from "../assets/Ping_An_icon.png";

const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


function Featured() {
  const experiences = [
    {
        logo: hoopp_logo,
        company: "Health of Ontario Pension Plan",
        title: "Data Engineer Coop",
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
        title: "Web Developer, Program Assistant",
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
      {/* <HorizontalScroll items={data} /> */}
    </>
  );
}

export default Featured;