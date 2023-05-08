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
						src="https://open.spotify.com/embed/album/65tjNTCfHWYI9loU4VinW1?utm_source=generator&theme=0"
						height="352"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
					<div className={MusicCss.textConteiner}>
						<h3>SAMURAII X HAUX - FEVER IN THE NIGHT EP</h3>
						<p>
							This EP consists of four atmospheric tracks that were the result
							of an exciting collaboration between myself and the talented
							singer/songwhispere, Haux. Our vision was to blend electronic
							productions with gentle folk vocals in a manner that would bring
							our individual styles to a unified whole, and this is the final
							result.
						</p>
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
						<p>
							During lockdown, I just wanted to dance a little and decided to
							make a house/melodic techno-influenced project. Together with some
							friends I produced and co-wrote four songs that later came out on
							Ultra Records. Since this was released as a new project I
							blablabalblablb
						</p>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Music;
