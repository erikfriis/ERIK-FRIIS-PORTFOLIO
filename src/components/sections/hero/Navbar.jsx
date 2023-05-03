import NavbarCss from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={NavbarCss.container}>
			<ul className={NavbarCss.navbarList}>
				<li>ABOUT</li>
				<li>LABS</li>
				<li>MUSIC</li>
				<li>CONTACT</li>
			</ul>
		</div>
	);
};

export default Navbar;
