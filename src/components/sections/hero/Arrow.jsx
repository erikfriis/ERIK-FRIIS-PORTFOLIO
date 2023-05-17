import React from "react";
import ArrowCss from "./Arrow.module.css";
import ArrowSvg from "../../../assets/Arrow.svg";

const Arrow = React.forwardRef(({ showArrow, handleScroll }, ref) => {
	return (
		<div
			className={`${ArrowCss.box} ${showArrow ? "" : ArrowCss.hideArrow}`}
			ref={ref[0]}
			onClick={() => handleScroll(ref[1][0])}
		>
			<img src={ArrowSvg} alt="Arrow icon to bring you to the next section" />
		</div>
	);
});

export default Arrow;
