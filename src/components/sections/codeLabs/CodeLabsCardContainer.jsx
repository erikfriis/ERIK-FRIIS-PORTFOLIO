import codeLabs from "../../../codeLabs.json";
import CodeLabCard from "./CodeLabCard";
import CodeLabsCardContainerCss from "./CodeLabsCardContainer.module.css";

const CodeLabsCardContainer = () => {
	return (
		<div className={CodeLabsCardContainerCss.container}>
			{codeLabs.map((lab) => (
				<CodeLabCard lab={lab} key={lab.id} />
			))}
		</div>
	);
};

export default CodeLabsCardContainer;
