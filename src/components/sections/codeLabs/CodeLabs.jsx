import CodeLabsCss from "./CodeLabs.module.css";
import CodeLabsCardContainer from "./CodeLabsCardContainer";

const CodeLabs = () => {
	return (
		<div className={CodeLabsCss.container}>
			<div className={CodeLabsCss.containerHeadings}>
				<h2>CODE LABS</h2>
				<h4>MOST RECENT CODE LABORATIONS</h4>
			</div>
			<CodeLabsCardContainer />
		</div>
	);
};

export default CodeLabs;
