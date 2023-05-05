import FooterBreakCss from "./FooterBreak.module.css";

const FooterBreak = () => {
	return (
		<div className={FooterBreakCss.container}>
			<ul className={FooterBreakCss.navbarList}>
				<li>ABOUT</li>
				<li>LABS</li>
				<li>MUSIC</li>
				<li>CONTACT</li>
			</ul>
		</div>
	);
};

export default FooterBreak;
