import HeaderCss from "./Header.module.css";

const Header = () => {
  return (
    <div className={HeaderCss.container}>
      <h1 className={HeaderCss.headingMain}>
        Exploring tools to innovate. <br />
        <span className={HeaderCss.headerSecondRow}>
          Frontend developer with background in music production.
        </span>
      </h1>
    </div>
  );
};

export default Header;
