import React from "react";
import ArrowCss from "./Arrow.module.css";
import ArrowSvg from "../../../../public/assets/Arrow.svg";

const Arrow = React.forwardRef(({ showArrow, handleScroll }, ref) => {
	return (
		<div
			className={`${ArrowCss.box} ${showArrow ? "" : ArrowCss.hideArrow}`}
			ref={ref[0]}
			onClick={() => handleScroll(ref[1][0])}
		>
			<img src={ArrowSvg} alt="" />
		</div>
	);
});

export default Arrow;
