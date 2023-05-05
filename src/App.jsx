import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import React, { useRef } from "react";

import Music from "./components/sections/musicSection/Music";
import AppCss from "./App.module.css";
import CodeLabs from "./components/sections/codeLabs/CodeLabs";
import Footer from "./components/sections/footer/Footer";

const App = () => {
	const aboutRef = useRef(null);
	const codeLabsRef = useRef(null);
	const musicRef = useRef(null);
	const footerRef = useRef(null);

	const handleScroll = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<div className={AppCss.container}>
			<Hero
				handleScroll={handleScroll}
				ref={[aboutRef, codeLabsRef, musicRef, footerRef]}
			/>
			<About ref={aboutRef} />
			<CodeLabs ref={codeLabsRef} />
			<Music ref={musicRef} />
			<Footer ref={footerRef} />
		</div>
	);
};

export default App;
