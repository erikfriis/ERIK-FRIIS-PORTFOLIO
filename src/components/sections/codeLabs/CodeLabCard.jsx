import CodeLabCardCss from "./CodeLabCard.module.css";
const CodeLabCard = ({ lab }) => {
	return (
		<div className={CodeLabCardCss.container}>
			<img src={lab.img} alt="" />
			<div className={CodeLabCardCss.textContainer}>
				<h2>{lab.title}</h2>
				<h3>{lab.tech}</h3>
				<p>{lab.description}</p>
				<ul>
					<li>Live Demo</li>
					<li>GitHub</li>
				</ul>
			</div>
		</div>
	);
};

export default CodeLabCard;
