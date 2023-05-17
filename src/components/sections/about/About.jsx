import React from "react";
import AboutCss from "./About.module.css";
import PortfolioPic from "../../../assets/ERIK-PORTFOLIO-COMPRESSED.jpeg";

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
				<img src={PortfolioPic} alt="" className={AboutCss.PortfolioPic} />
				<div className={AboutCss.paragraph}>
					<h4>
						Hi, my name is Erik Friis. I'm 27 year's old from Stockholm, Sweden.
						Let me tell you a bit about myself...
					</h4>
					Growing up I have always had a curiosity for learning new tools, video
					editing, 3D modeling, filming, music production… <br />
					<br />
					Eventually, I got hooked on making music and for the past five years,
					I have been working full-time as a{" "}
					<span className={AboutCss.emphasize}>music producer</span> and
					songwriter signed to companies like{" "}
					<span className={AboutCss.emphasize}>Warner Chappell </span>and{" "}
					<span className={AboutCss.emphasize}>Ultra Records.</span> <br />
					<br />
					However, a year ago, I decided to broaden my skill set and explore
					another tool for creating:{" "}
					<span className={AboutCss.emphasize}>coding</span>. <br />
					<br />I applied to the Frontend Developer Program at{" "}
					<span className={AboutCss.emphasize}>Hyper Island</span>, where I've
					been studying ever since. I'm excited to combine my creativity and
					technical skills to create solutions as a front-end developer. <br />
					<br />
					<span className={AboutCss.emphasize}>
						Currently I am looking for front-end internship.
					</span>
					<ul className={AboutCss.contactList}>
						<li>
							<img src={EmailIcon} alt="" />
							<a href="mailto:erik.friis@hyperisland.se">
								erik.friis@hyperisland.se
							</a>
						</li>
						<li>
							<img src={LinkedInIcon} alt="" />

							<a
								href="https://www.linkedin.com/in/erik-friis-8228a494/"
								target="_blank"
							>
								@erikfriis
							</a>
						</li>
						<li>
							<img src={GitHubIcon} alt="" />
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
