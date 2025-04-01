import "./Featured.css";
import ExperienceCard from "./ExperienceCard";
// import HorizontalScroll from './HorizontalScroll';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Box, Link } from "@mui/material";
import { timelineItemClasses } from '@mui/lab/TimelineItem';

import hoopp_logo from "../assets/HOOPP_icon.jpeg";
import UofT_logo from "../assets/UofT_icon.png";
import StandardS_logo from "../assets/standardsoftwareinc_icon.jpeg";
import SoundLife_logo from "../assets/Soundlife_Scarborough_icon.jpeg";
import Ping_An_icon from "../assets/Ping_An_icon.png";

// const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


function Featured() {
  const highlightWords = ["$35,000", "Python", "Student", "Council", "Leader", "30+", "PwC", "UofT", "officials", "70%", "team", "leader", "4", "100+", "50", "20+", "90%", "50,000", "users", "Global", "33rd" ];
  const experiences = [
    {
        logo: hoopp_logo,
        company: "HOOPP",
        title: "Cybersecurity, IT Audit Coop",
        date: "2024 Fall - 2025 Winter",
        link: "https://hoopp.com/",
        description: [
          "Saved $35,000 annual license cost by presenting & utilizing Python automation using VM, Selenium and Pillow",
          "As a Student Council Leader, hosted coop events and presented learning sessions recognized by Vice President",
          "Performed 30+ controls in Azure and ServiceNow with PwC, mastered IT General Controls and Auditing"
        ],
        animation: true
    },
    {
        logo: UofT_logo,
        company: "University of Toronto",
        title: "Software Developer",
        date: "2024 Summer - 2025 Winter",
        link: "https://www.utsc.utoronto.ca/physsci/welcome-physical-environmental-sciences",
        description: [
          "Developed an interactive timeline for UofT officials, reducing 70% of cases where students consult admin",
          "Utilized React, React Flow, Figma, and MongoDB, closely collaborated with admins and Business Analysts"
        ],
        animation: false
    },
    {
        logo: StandardS_logo,
        company: "Standard Software Inc.",
        title: "Software Developer",
        date: "2024 Summer",
        link: "https://standardsoftware.ca/",
        description: [
          "In Scrum cycles, worked as team leader of 4 and used React, Material UI, Express.js and Firebase",
          "Completed 100+ story points flawlessly, implementing 25 features using user-centric designs, enhancing usability",
          "Reached 5k+ daily API reads in the database, received student email about its convenience"
        ],
        animation: false
    },
    {
        logo: SoundLife_logo,
        company: "Soundlife Scarborough",
        title: "Web Developer, Program Assistant",
        date: "2023 Fall - 2024 Winter",
        link: "https://www.soundlifescarborough.ca/",
        description: [
          "Performed over 50 website updates, fixed several website breakdowns, enhancing the site performance by 100%",
          "Applied 20+ new dynamic features like carousel, enhanced user engagement by 90%, applying user-centric designs"
        ],
        animation: false
    },
    {
        logo: Ping_An_icon,
        company: "Ping An Insurance",
        title: "Software Developer Intern",
        date: "2023 Summer",
        link: "https://stock.pingan.com/",
        description: [
          "Participated in the maintenance of an app for over 50,000 users in Scrum cycles and Agile. Examined and maintained the furniture loan app in the Global 33rd Company in 2023",
          "Utilizing HTML/CSS/JS with Vue, Java, Mybatis, MySQL, Redis within Spring Boot and Maven, RESTful API",
        ],
        animation: true
    },
    {
        logo: UofT_logo,
        company: "UTSC Green Path",
        title: "Javascript Teaching Assistant",
        date: "2023 Winter",
        link: "https://www.utsc.utoronto.ca/greenpath-china/",
        description: [
          ""
        ],
        animation: false
    }
  ];

  return (
    <>
      <p class="featured-title">FEATURED</p>
      <div class="line"></div>
      {/* <div className="overview">
        <p>Hi, this is Sigmund, who is pursuing a HBSc CS Specialist Co-op and a Stats Minor degree at UofT.</p>
        <p>With my rich experiences in Software Development and Data Engineer in my study career, interns and coops, part-times and club positions, I showed deep affection for software development and data. I have attended 6 hackathons and was honoured to become winner two times.</p>
        <p>As for future, I am looking forward to more exciting opportunities both in Tech and Fintech companies. If you have any thoughts or chances, don't hesitate to contact me at the end of this page!</p>
      </div>
      <div className="skills">
      </div> */}

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

      {/* Timeline Section */}
      <Box sx={{ backgroundColor: "transparent", color: "white", padding: "15px", width: "100%" }}>
        {/* <Timeline position="alternate-reverse"> */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineDot sx={{ bgcolor: "white", top: "5px", left: "30px", borderRadius: "0" }} />
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "white" }} ></TimelineDot>
                <TimelineConnector sx={{ color: "white" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <Typography variant="h6" component="h1" sx={{ fontFamily: "'Source Code Pro', monospace", padding: 0, animation: "glowing2 2s linear infinite" }}>
                  <span style={{ textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}>{experience.title}</span> - @<Link href={experience.link} target="_blank" rel="noopener noreferrer" color="inherit">{experience.company}</Link>
                </Typography>
                <Typography variant="body2" component="p" sx={{ color: "white", paddingBottom: "20px", fontFamily: "Lobster" }}>{experience.date}</Typography>
                {experience.description.map((description) => (
                  <>
                    <Typography variant="body" sx={{ color: "white"}}>
                      {description.split(" ").map((word, i) => 
                      highlightWords.some((keyword) => word.includes(keyword)) ? (
                        <span key={i} style={{ fontWeight: "bold", color: "var(--regular)", animation: "glowing2 2s linear infinite" }}>{word} </span>
                      ) : (
                        `${word} `
                      )
                    )}
                    </Typography>
                    <br />
                  </>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      {/* <HorizontalScroll items={data} /> */}
    </>
  );
}

export default Featured;