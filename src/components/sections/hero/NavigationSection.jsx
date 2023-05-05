import NavigationSectionCss from "./NavigationSection.module.css";

const NavigationSection = () => {
	return (
		<div className={NavigationSectionCss.container}>
			<div
				className={`${NavigationSectionCss.navigationItem} ${NavigationSectionCss.navigationItemOne}`}
			>
				<div className={NavigationSectionCss.textContainer}>
					<h2>ABOUT ME</h2>
					<h3>EXPERIENCE AND BACKGROUND</h3>
				</div>
			</div>
			<div
				className={`${NavigationSectionCss.navigationItem} ${NavigationSectionCss.navigationItemTwo}`}
			>
				<div className={NavigationSectionCss.textContainer}>
					<h2>CODE LABS</h2>
					<h3>MOST RECENT CODE LABS</h3>
				</div>
			</div>
			<div
				className={`${NavigationSectionCss.navigationItem} ${NavigationSectionCss.navigationItemThree}`}
			>
				<div className={NavigationSectionCss.textContainer}>
					<h2>MUSIC</h2>
					<h3>MUSIC PRODUCTION WORK</h3>
				</div>
			</div>
		</div>
	);
};

export default NavigationSection;
