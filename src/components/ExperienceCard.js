import React from "react";
import "./ExperienceCard.css";

function ExperienceCard({ logo, company, title, date, link, animation }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className={!animation ? "experience-wrapper-normal" : "experience-wrapper-highlight"}>
                <img
                    src={logo}
                    alt={company}
                    className="experience_img"
                />
                <div className="experience-text-wrapper">
                    <div className="vertical-align">
                        <p className="experience_comp">{company}</p>
                        <p className="experience_title">{title}</p>
                        <p className="experience_date">{date}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ExperienceCard;
  