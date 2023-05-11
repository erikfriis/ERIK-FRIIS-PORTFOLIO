import CodeLabCardCss from "./CodeLabCard.module.css";
import synthImg from "../../../assets/synthImg.png";
const CodeLabCard = ({ lab }) => {
	return (
		<div className={CodeLabCardCss.container}>
			<img src={synthImg} alt="" />
			<div className={CodeLabCardCss.textContainer}>
				<h2>{lab.title}</h2>
				<h3>{lab.tech}</h3>
				<p>{lab.description}</p>
				<div className={CodeLabCardCss.linksContainer}>
					<ul>
						<li>Live Demo</li>
						<li>GitHub</li>
					</ul>
					<div className={CodeLabCardCss.cardLinks}>Read More</div>
				</div>
			</div>
		</div>
	);
};

export default CodeLabCard;
