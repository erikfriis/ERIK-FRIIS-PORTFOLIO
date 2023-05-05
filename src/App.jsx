import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Music from "./components/sections/musicSection/Music";

import AppCss from "./App.module.css";
import CodeLabs from "./components/sections/codeLabs/CodeLabs";
import Footer from "./components/sections/footer/Footer";

const App = () => {
	return (
		<div className={AppCss.container}>
			<Hero />
			<About />
			<CodeLabs />
			<Music />
			<Footer />
		</div>
	);
};

export default App;
