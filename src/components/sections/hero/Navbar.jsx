import React from "react";
import NavbarCss from "./Navbar.module.css";

const Navbar = React.forwardRef(({ handleScroll }, ref) => {
	return (
		<div className={NavbarCss.container}>
			<ul className={NavbarCss.navbarList}>
				<li onClick={() => handleScroll(ref[0])}>ABOUT</li>
				<li onClick={() => handleScroll(ref[1])}>LABS</li>
				<li onClick={() => handleScroll(ref[2])}>MUSIC</li>
				<li onClick={() => handleScroll(ref[3])}>CONTACT</li>
			</ul>
		</div>
	);
});

export default Navbar;
