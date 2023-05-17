import FooterCss from "./Footer.module.css";
import React from "react";
import InstagramIcon from "../../../assets/instagramSVG.svg";
import LinkedInIcon from "../../../assets/linkedinSVG.svg";
import EmailIcon from "../../../assets/envelope-SVG.svg";
import GitHubIcon from "../../../assets/github-mark.svg";

const Footer = React.forwardRef(({}, ref) => {
	return (
		<div className={FooterCss.container} ref={ref}>
			<div className={FooterCss.containerHeadings}>
				<h2>CONTACT ME</h2>
				<ul className={FooterCss.contactList}>
					<li>
						<a href="mailto:erik.friis@hyperisland.se">
							<img src={EmailIcon} alt="Eamil icon" />
							erik.friis@hyperisland.se
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/erik-friis-8228a494/"
							target="_blank"
						>
							<img src={LinkedInIcon} alt="Linkedin icon" />
							@erikfriis
						</a>
					</li>
					<li>
						<a href="https://github.com/erikfriis" target="_blank">
							<img src={GitHubIcon} alt="Github icon" />
							GitHub
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/samuraiisounds/" target="_blank">
							<img src={InstagramIcon} alt="Instagram icon" />
							@samuraiisounds
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
});

export default Footer;
