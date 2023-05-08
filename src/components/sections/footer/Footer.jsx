import FooterCss from "./Footer.module.css";
import React from "react";
import InstagramIcon from "../../../assets/instagramSVG.svg";
import LinkedInIcon from "../../../assets/linkedinSVG.svg";
import EmailIcon from "../../../assets/envelopeSVG.svg";

const Footer = React.forwardRef(({}, ref) => {
	return (
		<div className={FooterCss.container} ref={ref}>
			<div className={FooterCss.containerHeadings}>
				<h2>CONTACT ME</h2>
				<ul className={FooterCss.contactList}>
					<li>
						<img src={EmailIcon} alt="" />
						<div>erik.friis@hyperisland.se</div>
					</li>
					<li>
						<img src={LinkedInIcon} alt="" />
						<div>@erikfriis</div>
					</li>
					<li>
						<img src={InstagramIcon} alt="" />
						<div>@samuraiisounds</div>
					</li>
					<li>
						<img src={InstagramIcon} alt="" />
						<div>Github</div>
					</li>
				</ul>
			</div>
		</div>
	);
});

export default Footer;
