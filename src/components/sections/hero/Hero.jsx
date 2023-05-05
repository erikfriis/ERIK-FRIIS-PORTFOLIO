import Header from "./Header";
import Navbar from "./Navbar";

import HeroCss from "./Hero.module.css";
import NavigationSection from "./NavigationSection";

const Hero = () => {
	return (
		<div className={HeroCss.container}>
			<Navbar />
			<Header />
			<NavigationSection />
		</div>
	);
};

export default Hero;
