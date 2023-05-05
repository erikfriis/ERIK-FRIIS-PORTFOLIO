import React from "react";
import MusicCss from "./Music.module.css";

const Music = React.forwardRef(({}, ref) => {
	return (
		<div className={MusicCss.container} ref={ref}>
			<div className={MusicCss.containerHeadings}>
				<h2>MUSIC PRODUCTION</h2>
				<h4>SOME PICS FROM MY MUSIC PRODUCTION WORK</h4>
			</div>
			<div className={MusicCss.musicContainer}>
				<div className={MusicCss.embededContainer}>
					<iframe
						style={{
							borderRadius: "0px",
							width: "100%",
						}}
						src="https://open.spotify.com/embed/album/65tjNTCfHWYI9loU4VinW1?utm_source=generator"
						height="352"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
				<div className={MusicCss.embededContainer}>
					<iframe
						style={{
							borderRadius: "0px",
							width: "100%",
						}}
						src="https://open.spotify.com/embed/album/1ffWHH2Y4lnfxi0xldRdBD?utm_source=generator"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
});

export default Music;
