import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

import HeroCss from "./Hero.module.css";

import HeroNavigation from "./HeroNaviagtion";
import Arrow from "./Arrow";

const Hero = React.forwardRef(({ handleScroll }, ref) => {
	const heroRef = useRef(null);
	const arrowRef = useRef(null);
	const [showArrow, setShowArrow] = useState(true);

	const handleScrollArrow = () => {
		const show = window.scrollY < 100;
		const showUp = window.scrollY > 300;
		setShowArrow(show);
		arrowRef.current.classList.toggle("arrow-hidden", !show);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollArrow);
		return () => window.removeEventListener(scroll, handleScrollArrow);
	}, []);

	return (
		<div className={HeroCss.container} ref={heroRef}>
			<Navbar handleScroll={handleScroll} ref={ref} />
			<Header />
			<HeroNavigation handleScroll={handleScroll} ref={ref} />
			<Arrow
				showArrow={showArrow}
				ref={[arrowRef, ref]}
				handleScroll={handleScroll}
			/>
		</div>
	);
});

export default Hero;
