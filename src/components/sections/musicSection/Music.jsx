import React from "react";
import MusicCss from "./Music.module.css";

const Music = React.forwardRef(({}, ref) => {
	return (
		<div className={MusicCss.container} ref={ref}>
			<div className={MusicCss.containerHeadings}>
				<h2>SOME MUSIC STUFF</h2>
				<h4>PICS FROM MY MUSIC PRODUCTION WORK</h4>
			</div>
			<div className={MusicCss.musicContainer}>
				<div className={MusicCss.embededContainer}>
					<iframe
						style={{ borderRadius: "0px", width: "100%" }}
						src="https://open.spotify.com/embed/album/65tjNTCfHWYI9loU4VinW1?utm_source=generator&theme=0"
						height="352"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
					<div className={MusicCss.textConteiner}>
						<h3>SAMURAII, HAUX - FEVER IN THE NIGHT EP</h3>
						<h4>PRODUCTION AND SONGWRITING</h4>
					</div>
				</div>
				<div className={MusicCss.embededContainer}>
					<iframe
						style={{
							borderRadius: "0px",
							width: "100%",
						}}
						src="https://open.spotify.com/embed/album/1ffWHH2Y4lnfxi0xldRdBD?utm_source=generator&theme=0"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
					<div className={MusicCss.textConteiner}>
						<h3>LUNO - PLANET LUNO EP</h3>
						<h4>PRODUCTION AND SONGWRITING</h4>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Music;
