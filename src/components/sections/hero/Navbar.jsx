import React from "react";
import NavbarCss from "./Navbar.module.css";

const Navbar = React.forwardRef(({ handleScroll }, ref) => {
	return (
		<div className={NavbarCss.container}>
			<ul className={NavbarCss.navbarList}>
				<div className={NavbarCss.logo}>EF</div>
				<li onClick={() => handleScroll(ref[3])}>CONTACT</li>
			</ul>
		</div>
	);
});

export default Navbar;
