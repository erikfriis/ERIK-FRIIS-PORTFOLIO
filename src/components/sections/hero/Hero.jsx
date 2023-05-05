import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

import HeroCss from "./Hero.module.css";
import NavigationSection from "./NavigationSection";

const Hero = React.forwardRef(({ handleScroll }, ref) => {
	return (
		<div className={HeroCss.container}>
			<Navbar handleScroll={handleScroll} ref={ref} />
			<Header />
			<NavigationSection />
		</div>
	);
});

export default Hero;
