import React from "react";
import AboutCss from "./About.module.css";
import PortfolioPic from "../../../assets/ERIK-PORTFOLIO-3.jpg";

import LinkedInIcon from "../../../assets/linkedinSVG.svg";
import EmailIcon from "../../../assets/envelope-SVG.svg";
import GitHubIcon from "../../../assets/github-mark.svg";

const About = React.forwardRef((props, ref) => {
  return (
    <div className={AboutCss.container} ref={ref}>
      <div className={AboutCss.containerHeadings}>
        <h2>ABOUT ME</h2>
        <h4>EXPERIENCE AND BACKGROUND</h4>
      </div>
      <div className={AboutCss.card}>
        <img
          src={PortfolioPic}
          alt="Portfolio images of Erik Friis"
          className={AboutCss.PortfolioPic}
        />
        <div className={AboutCss.paragraph}>
          <h4>
            Hi, my name is Erik Friis. I'm 29 year's old from Stockholm, Sweden.
            Let me tell you a bit about myself...
          </h4>
          Growing up I have always had a curiosity for learning new tools, video
          editing, 3D modeling, filming, music production… <br />
          <br />
          Eventually, I got hooked on making music and for five years, I was
          working full-time as a{" "}
          <span className={AboutCss.emphasize}>music producer</span> and
          songwriter signed to companies like{" "}
          <span className={AboutCss.emphasize}>Warner Chappell </span>and{" "}
          <span className={AboutCss.emphasize}>Ultra Records.</span> <br />
          <br />
          However, about 3 years ago, I decided to broaden my skill set and
          explore another tool for creating:{" "}
          <span className={AboutCss.emphasize}>coding</span>. <br />
          <br />I studied at the Frontend Developer Program at{" "}
          <span className={AboutCss.emphasize}>Hyper Island</span>. After
          6-months at <span className={AboutCss.emphasize}>Epidemic Sound</span>
          , where my team and I, where drving a rebrand effort, building, and
          updating components and infrastructure for a seamless launch, I've
          been trying my wings as a freelance frontend/shopify developer. <br />
          <br />I love to combine my creativity and technical skills to create
          frontend solutions and other fun projects. <br />
          <br />
          <ul className={AboutCss.contactList}>
            <li>
              <img src={EmailIcon} alt="Eamil icon" />
              <a href="mailto:erik.friis@hyperisland.se">
                erik.friis@hyperisland.se
              </a>
            </li>
            <li>
              <img src={LinkedInIcon} alt="Linkedin icon" />

              <a
                href="https://www.linkedin.com/in/erik-friis-8228a494/"
                target="_blank"
              >
                @erikfriis
              </a>
            </li>
            <li>
              <img src={GitHubIcon} alt="GitHub icon" />
              <a href="https://github.com/erikfriis" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default About;
