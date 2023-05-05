import React from "react";
import AboutCss from "./About.module.css";
import PortfolioPic from "../../../assets/ERIKPORTFOLIO.jpg";

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
					Music has been a lifelong passion of mine, and for the past five
					years, I've been fortunate enough to work as a music producer signed
					to companies like Warner Chappell and Ultra Records. However, a year
					ago, I decided to broaden my skill set and explore another passion of
					mine: coding. I applied to the Frontend Developer program at Hyper
					Island, where I've been studying ever since. I'm excited to combine my
					creativity and technical skills to create innovative solutions as a
					frontend developer.
				</div>
			</div>
		</div>
	);
});

export default About;
