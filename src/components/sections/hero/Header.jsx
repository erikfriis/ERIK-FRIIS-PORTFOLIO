import HeaderCss from "./Header.module.css";

const Header = () => {
	return (
		<div className={HeaderCss.container}>
			<h1 className={HeaderCss.headingMain}>
				Exploring tools to innovate: Erik Friis, frontend developer and music
				producer
			</h1>
			<h3 className={HeaderCss.headingSmall}>Let me show you...</h3>
		</div>
	);
};

export default Header;
