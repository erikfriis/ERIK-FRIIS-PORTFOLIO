import CodeLabCardCss from "./CodeLabCard.module.css";

const CodeLabCard = ({ lab }) => {
	return (
		<div className={CodeLabCardCss.container}>
			<img src={lab.img} alt="" />
			<div className={CodeLabCardCss.textContainer}>
				<h2>{lab.title}</h2>
				<h3>{lab.tech}</h3>
				<p>{lab.description}</p>
				<div className={CodeLabCardCss.linksContainer}>
					<ul>
						<li>
							<a href={lab.deployedUrl} target="_blank">
								Live Demo
							</a>{" "}
						</li>
						<li>
							<a href={lab.githubUrl} target="_blank">
								GitHub
							</a>
						</li>
					</ul>
					<div className={CodeLabCardCss.cardLinks}>Read More</div>
				</div>
			</div>
		</div>
	);
};

export default CodeLabCard;
