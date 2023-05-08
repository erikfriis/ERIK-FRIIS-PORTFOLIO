import React from "react";
import AboutCss from "./About.module.css";
import PortfolioPic from "../../../assets/ERIKPORTFOLIO.jpg";

import InstagramIcon from "../../../assets/instagramSVG.svg";
import LinkedInIcon from "../../../assets/linkedinSVG.svg";
import EmailIcon from "../../../assets/envelopeSVG.svg";

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
					Music has been a lifelong passion of mine, and for the past five
					years, I've been fortunate enough to work full time as a music
					producer signed to companies like Warner Chappell and Ultra Records.
					However, a year ago, I decided to broaden my skill set and explore
					another passion of mine: coding. I applied to the Frontend Developer
					program at Hyper Island, where I've been studying ever since. I'm
					excited to combine my creativity and technical skills to create
					innovative solutions as a frontend developer.
					<ul className={AboutCss.contactList}>
						<li>
							<img src={EmailIcon} alt="" />
							<div>erik.friis@hyperisland.se</div>
						</li>
						<li>
							<img src={LinkedInIcon} alt="" />
							<div>erikfriis</div>
						</li>
						<li>
							<img src={InstagramIcon} alt="" />
							<div>GitHub</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
});

export default About;
