import React from "react";

import HeroNavigationCSS from "./HeroNavigation.module.css";

import shortArrow from "../../../assets/Arrow-2.svg";

const HeroNavigation = React.forwardRef(({ handleScroll }, ref) => {
	return (
		<div className={HeroNavigationCSS.container}>
			<div
				className={HeroNavigationCSS.itemOne}
				onClick={() => handleScroll(ref[0])}
			>
				<div className={HeroNavigationCSS.textContainer}>
					<h2>ABOUT ME</h2>
					<h3>EXPERIENCE AND BACKGROUND</h3>
				</div>
				<img src={shortArrow} alt="" className={HeroNavigationCSS.shortArrow} />
			</div>
			<div
				className={HeroNavigationCSS.itemTwo}
				onClick={() => handleScroll(ref[1])}
			>
				<div className={HeroNavigationCSS.textContainer}>
					<h2>CODE LABS</h2>
					<h3>MOST RECENT CODE LABS</h3>
				</div>
				<img src={shortArrow} alt="" className={HeroNavigationCSS.shortArrow} />
			</div>
			<div
				className={HeroNavigationCSS.itemThree}
				onClick={() => handleScroll(ref[2])}
			>
				<div className={HeroNavigationCSS.textContainer}>
					<h2>MUSIC</h2>
					<h3>MUSIC PRODUCTION WORK</h3>
				</div>
				<img src={shortArrow} alt="" className={HeroNavigationCSS.shortArrow} />
			</div>
		</div>
	);
});

export default HeroNavigation;
