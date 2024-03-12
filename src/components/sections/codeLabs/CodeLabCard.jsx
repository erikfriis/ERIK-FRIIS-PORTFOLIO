import CodeLabCardCss from "./CodeLabCard.module.css";

const CodeLabCard = ({ lab }) => {
  return (
    <div className={CodeLabCardCss.container}>
      <a href={lab.deployedUrl} target="_blank">
        <img src={lab.img} alt="image showcasing the project" />
        <div className={CodeLabCardCss.textContainer}>
          <div className={CodeLabCardCss.textInnercontainer}>
            <h2>{lab.title}</h2>
            <h3>{lab.tech}</h3>
            <p>{lab.description}</p>
          </div>
          <div className={CodeLabCardCss.linksContainer}>
            <ul>
              <li>
                <a href={lab.deployedUrl} target="_blank">
                  {lab.deployedUrl === "" ? "Demo on request" : "Live Demo"}
                </a>
              </li>
              <li>
                <a href={lab.githubUrl} target="_blank">
                  {lab.githubUrl === "" ? "" : "GitHub"}
                </a>
              </li>
            </ul>
            {/* <div className={CodeLabCardCss.cardLinks}>Read More</div> */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default CodeLabCard;
