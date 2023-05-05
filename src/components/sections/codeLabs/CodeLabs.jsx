import React from "react";
import CodeLabsCss from "./CodeLabs.module.css";
import CodeLabsCardContainer from "./CodeLabsCardContainer";

const CodeLabs = React.forwardRef(({}, ref) => {
	return (
		<div className={CodeLabsCss.container} ref={ref}>
			<div className={CodeLabsCss.containerHeadings}>
				<h2>CODE LABS</h2>
				<h4>MOST RECENT CODE LABORATIONS</h4>
			</div>
			<CodeLabsCardContainer />
		</div>
	);
});

export default CodeLabs;
