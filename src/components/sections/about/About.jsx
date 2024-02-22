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
            Hi, my name is Erik Friis. I'm 28 year's old from Stockholm, Sweden.
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
          However, little over 2 years ago, I decided to broaden my skill set
          and explore another tool for creating:{" "}
          <span className={AboutCss.emphasize}>coding</span>. <br />
          <br />I applied to the Frontend Developer Program at{" "}
          <span className={AboutCss.emphasize}>Hyper Island</span>. Currently,I
          am doing a 6-month internship at{" "}
          <span className={AboutCss.emphasize}>Epidemic Sound</span>, where I
          work with their{" "}
          <span className={AboutCss.emphasize}>design system</span> as well as
          other interesting projects. I really enjoy to combine my creativity
          and technical skills to create solutions as a front-end developer.{" "}
          <br />
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
